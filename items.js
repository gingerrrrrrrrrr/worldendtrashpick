// items.js
// 物品数据：{ id, name, category }


const ITEMS = {
    //饱腹、体力、精神
    'I0001': { name: '苹果', category: 'food', effect: [15, 0, 5] },
    'I0002': { name: '压缩饼干', category: 'food', effect: [25, 0, 0] },
    'I0003': { name: '矿泉水', category: 'food', effect: [5, 0, 0] },
    'I0004': { name: '罐头', category: 'food', effect: [35, 0, 10] },
    'I0005': { name: '糖果', category: 'food', effect: [8, 0, 8] },
    'I0006': { name: '方便面', category: 'food', effect: [30, 0, 0] },
    'I0007': { name: '水果刀', category: 'tool', effect: [0, 0, 0] },
    'I0008': { name: '打火机', category: 'tool', effect: [0, 0, 0] },
    'I0009': { name: '钥匙串', category: 'tool', effect: [0, 0, 0] },
    'I0010': { name: '手电筒', category: 'tool', effect: [0, 0, 0] },
    'I0011': { name: '外套', category: 'clothing', effect: [0, 0, 0] },
    'I0012': { name: '毛巾', category: 'clothing', effect: [0, 0, 0] },
    'I0013': { name: 'T恤', category: 'clothing', effect: [0, 0, 0] },
    'I0014': { name: '急救包', category: 'medical', effect: [0, 0, 0] },
    'I0015': { name: '消毒酒精', category: 'medical', effect: [0, 0, 0] },
    'I0016': { name: '绷带', category: 'medical', effect: [0, 0, 0] }
};



// const ITEMS = {
//     'I0001': { name: '苹果', category: 'food', effect: { fullness: 15, spirit: 5 } },
//     'I0002': { name: '压缩饼干', category: 'food', effect: { fullness: 25 } },
//     'I0003': { name: '矿泉水', category: 'food', effect: { fullness: 5 } },
//     'I0004': { name: '罐头', category: 'food', effect: { fullness: 35, spirit: 10 } },
//     'I0005': { name: '糖果', category: 'food', effect: { fullness: 8, spirit: 8 } },
//     'I0006': { name: '方便面', category: 'food', effect: { fullness: 30 } },
//     'I0007': { name: '水果刀', category: 'tool', effect: {} },
//     'I0008': { name: '打火机', category: 'tool', effect: {} },
//     'I0009': { name: '钥匙串', category: 'tool', effect: {} },
//     'I0010': { name: '手电筒', category: 'tool', effect: {} },
//     'I0011': { name: '外套', category: 'clothing', effect: {} },
//     'I0012': { name: '毛巾', category: 'clothing', effect: {} },
//     'I0013': { name: 'T恤', category: 'clothing', effect: {} },
//     'I0014': { name: '急救包', category: 'medical', effect: {} },
//     'I0015': { name: '消毒酒精', category: 'medical', effect: {} },
//     'I0016': { name: '绷带', category: 'medical', effect: {} }
// };




function getItemById(id) {
    return ITEMS[id];
}