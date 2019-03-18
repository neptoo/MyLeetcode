// LRU 最近最少使用 缓存机制
// get(key) - 存在于缓存，则获取值，否则返回 -1
// put(key, value) - 不存在,写入缓存;容量达上限，写入新数据前删除最近最少使用的缓存

LRUCache cache = new LRUCache(2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // evicts key 2
cache.get(2); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
cache.get(1); // returns -1 (not found)
cache.get(3); // returns 3
cache.get(4); // returns 4

// 设置指针追踪末尾的值
// 内存增加数据时，如果已经存在该值，更新内存中值的顺序

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cacheSize = capacity;
    this.cacheIndex = 0;
    this.cacheSet = new Set();
    this.head = null;
    this.cacheShift = null;
    this.memory = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val;
    const { cacheSet, memory } = this;
    if (cacheSet.has(key)) {
        val = memory[key].value;
        // get最后一个节点
        if (memory[key].next == null) {
            return val;
        }
        if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
            memory.cacheShift = memory.cacheShift.next;
        }
        this.memorySort(key);
    } else {
        val = -1;
    }

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const { cacheSet, memory } = this;
    if (this.cacheIndex < this.cacheSize) {
        !cacheSet.has(key) && this.cacheIndex++;
        cacheSet.add(key)
    } else {
        if (!cacheSet.has(key)) {
            cacheSet.delete(memory.cacheShift.key);
            memory.cacheShift.next && (memory.cacheShift = memory.cacheShift.next)
            cacheSet.add(key);
        }
    }

    // 内存中有该值
    if (memory.head) {
        // 内存中不存在该节点
        if (!memory[key]) {
            memory[key] = {
                prev: memory.head,
                next: null
            }
            memory.head.next = memory[key];
            memory.head = memory[key];
        } else {
            // 内存中存在该节点
            if (memory.cacheShift === memory[key] && memory.cacheShift.next) {
                memory.cacheShift = memory[key.next];
            }
            this.memorySort(key);
        }
    } else {
        // 内存为空
        memory[key] = {
            prev: null,
            next: null
        };
        memory.cacheShift = memory.head = memory[key];
    }

    memory[key].key = key;
    memory[key].value = value;
};

LRUCache.prototype.memorySort = function(key) {
    const { memory } = this;
    // get的不是最后一个节点
    if (memory[key].next != null) {
        if (memory[key].prev != null) {
            memory[key].prev.next = memory[key].next;
        } else {
            memory[key].next.prev = null; // 第一个节点
        }
        memory[key].next.prev = memory[key].prev;
        memory[key].prev = memory.head;
        memory[key].next = null;
        memory.head.next = memory[key];
        memory.head = memory[key];
    }
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 // 另一种方法优化实现
 class LRUCache {
   constructor(capacity) {
     this.capacity = capacity
     this.map = new Map()
   }

   get(key) {
     let val = this.map.get(key)
     if (typeof val === 'undefined') { return -1 }
     this.map.delete(key)
     this.map.set(key, val)
     return val
   }

   put(key, value) {
     if (this.map.has(key)) { 
       this.map.delete(key) 
     }

     this.map.set(key, value)
     let keys = this.map.keys()
     while (this.map.size > this.capacity) { this.map.delete(keys.next().value) }
   }
 }
// map.keys().next()可以取得到排位第一的键值，
// map.put()操作类似数组的push操作，将值保存在最顶的位置
// 对map操作的复杂度为O(1)