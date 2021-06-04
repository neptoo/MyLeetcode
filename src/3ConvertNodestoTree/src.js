// cvte 给定如下形式的父子关系数组，转为有树结构，
// 节点数据结构是一个对象，包含val和id属性， 以及一个children数组。

// 输入
var nodes = [
    { id: 10, title: 'dw10', parentId: 4 },
    { id: 2, title: 'dw2', parentId: 0 },
    { id: 4, title: 'dw4', parentId: 2 },
    { id: 12, title: 'dw12', parentId: 2 },
    { id: 8, title: 'dw8', parentId: 4 }
];

// 考虑时间复杂度 排序后从后向前遍历数组 
// 相当于从叶子节点开始到根节点逐渐建立一棵完整的树

function compare(a, b) {
    return a.parentId - b.parentId;
}
nodes.sort(compare);
var midObj = {};

for (var i = nodes.length - 1; i >= 0; i--) {
    var nowPid = nodes[i].parentId;
    var nowId = nodes[i].id;
    if (midObj[nowPid]) {
        midObj[nowPid].push(nodes[i]);
    } else {
        midObj[nowPid] = [];
        midObj[nowPid].push(nodes[i]);
    }

    if (midObj[nowId]) {
        nodes[i].children = midObj[nowId];
        delete midObj[nowId];
    }
}
console.log(midObj[0][0]);

// 输出
// {
//     "id": 2,
//     "title": "dw2",
//     "parentId": 0,
//     "children": [
//     {
//         "id": 12,
//         "title": "dw12",
//         "parentId": 2
//     },
//     {
//         "id": 4,
//         "title": "dw4",
//         "parentId": 2,
//         "children": [
//         {
//             "id": 8,
//             "title": "dw8",
//             "parentId": 4
//         },
//         {
//             "id": 10,
//             "title": "dw10",
//             "parentId": 4
//         }
//         ]
//     }
//     ]
// }