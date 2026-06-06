// places.js

// ========== 城市名字库 ==========
const CITY_NAME_CHARS_STRING = '废荒石原灰旧野安宁远沉墟烬霜寒枯残缺破裂断落空无末亡冷阴黑静默尘暗暮雾寂铁锈零碎';
const CITY_NAME_CHARS = CITY_NAME_CHARS_STRING.split('');

function generateCityName() {
    let name;
    do {
        let count = Math.floor(Math.random() * 3) + 2;
        name = '';
        for (let i = 0; i < count; i++) {
            name += CITY_NAME_CHARS[Math.floor(Math.random() * CITY_NAME_CHARS.length)];
        }
        name += '镇';
    } while (Object.values(world.cities).some(city => city.name === name));
    return name;
}





// ========== 城市类型 ==========
const CITY_TYPES = {
    'C0001': {
        name: '废弃小镇',
        bigPlaces: [
            { bigPlaceTypeId: 'B0001', bigPlaceName: '小型酒店', probability: 1.0, minQty: 1, maxQty: 2 },
            { bigPlaceTypeId: 'B0002', bigPlaceName: '小饭店', probability: 0.7, minQty: 1, maxQty: 1 },
            { bigPlaceTypeId: 'B0003', bigPlaceName: '杂货铺', probability: 0.6, minQty: 1, maxQty: 1 },
            { bigPlaceTypeId: 'B0004', bigPlaceName: '通路', probability: 1.0, minQty: 1, maxQty: 1 },
            { bigPlaceTypeId: 'B0005', bigPlaceName: '住宅', probability: 0.8, minQty: 1, maxQty: 1 }
        ]
    },
};

// ========== 大场所 ==========
const BIG_PLACE_TYPES = {
    'B0001': {
        name: '小型酒店',
        subPlaces: [
            { subPlaceId: 'P0001', subPlaceName: '房间', probability: 1.0, minQty: 3, maxQty: 6 },
            { subPlaceId: 'P0002', subPlaceName: '厨房', probability: 0.6, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0003', subPlaceName: '员工休息室', probability: 0.7, minQty: 1, maxQty: 1 }
        ]
    },
    'B0002': {
        name: '小饭店',
        subPlaces: [
            { subPlaceId: 'P0004', subPlaceName: '店面', probability: 1.0, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0005', subPlaceName: '厨房', probability: 1.0, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0006', subPlaceName: '储藏间', probability: 0.7, minQty: 1, maxQty: 1 }
        ]
    },
    'B0003': {
        name: '杂货铺',
        subPlaces: [
            { subPlaceId: 'P0007', subPlaceName: '柜台', probability: 1.0, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0008', subPlaceName: '库房', probability: 0.6, minQty: 1, maxQty: 1 }
        ]
    },
    'B0004': {
        name: '通路',
        subPlaces: [
            { subPlaceId: 'P0009', subPlaceName: '铁皮房', probability: 0.5, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0010', subPlaceName: '道路', probability: 1.0, minQty: 2, maxQty: 3 }
        ]
    },
    'B0005': {
        name: '住宅',
        subPlaces: [
            { subPlaceId: 'P0011', subPlaceName: '客厅', probability: 1.0, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0012', subPlaceName: '厨房', probability: 0.8, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0013', subPlaceName: '厕所', probability: 0.9, minQty: 1, maxQty: 1 },
            { subPlaceId: 'P0014', subPlaceName: '卧室', probability: 1.0, minQty: 2, maxQty: 4 }
        ]
    },
};

// ========== 小场所 ==========
// items: [ { itemId, probability, minQty, maxQty } ]
// probability 为 0 到 1，每个物品独立判断
const SUB_PLACE_TYPES = {
    'P0001': {
        name: '酒店房间',
        comfort: 70,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.4, minQty: 1, maxQty: 2 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.3, minQty: 1, maxQty: 3 },
            { itemId: 'I0005', itemName: '糖果', probability: 0.3, minQty: 1, maxQty: 5 },
            { itemId: 'I0011', itemName: '外套', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0013', itemName: 'T恤', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0008', itemName: '打火机', probability: 0.15, minQty: 1, maxQty: 1 }
        ]
    },
    'P0002': {
        name: '酒店厨房',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.6, minQty: 2, maxQty: 5 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.5, minQty: 2, maxQty: 6 },
            { itemId: 'I0004', itemName: '罐头', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0006', itemName: '方便面', probability: 0.3, minQty: 1, maxQty: 4 },
            { itemId: 'I0001', itemName: '苹果', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0007', itemName: '水果刀', probability: 0.25, minQty: 1, maxQty: 1 }
        ]
    },
    'P0003': {
        name: '酒店员工休息室',
        comfort: 50,
        items: [
            { itemId: 'I0009', itemName: '钥匙串', probability: 1.0, minQty: 10, maxQty: 10 },
            { itemId: 'I0015', itemName: '消毒酒精', probability: 0.35, minQty: 1, maxQty: 2 },
            { itemId: 'I0012', itemName: '毛巾', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0014', itemName: '急救包', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0010', itemName: '手电筒', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0016', itemName: '绷带', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.3, minQty: 1, maxQty: 2 }
        ]
    },
        'P0004': {
        name: '饭店-店面',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.4, minQty: 1, maxQty: 2 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0005', itemName: '糖果', probability: 0.3, minQty: 1, maxQty: 3 }
        ]
    },
    'P0005': {
        name: '饭店-厨房',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.5, minQty: 1, maxQty: 3 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.4, minQty: 2, maxQty: 5 },
            { itemId: 'I0004', itemName: '罐头', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0006', itemName: '方便面', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0001', itemName: '苹果', probability: 0.2, minQty: 1, maxQty: 2 },
            { itemId: 'I0007', itemName: '水果刀', probability: 0.25, minQty: 1, maxQty: 1 }
        ]
    },
    'P0006': {
        name: '饭店-储藏间',
        comfort: 50,
        items: [
            { itemId: 'I0004', itemName: '罐头', probability: 0.5, minQty: 2, maxQty: 5 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.4, minQty: 3, maxQty: 8 },
            { itemId: 'I0006', itemName: '方便面', probability: 0.4, minQty: 2, maxQty: 6 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.5, minQty: 2, maxQty: 6 },
            { itemId: 'I0015', itemName: '消毒酒精', probability: 0.2, minQty: 1, maxQty: 1 }
        ]
    },
    'P0007': {
        name: '杂货铺-柜台',
        comfort: 50,
        items: [
            { itemId: 'I0005', itemName: '糖果', probability: 0.5, minQty: 2, maxQty: 5 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0008', itemName: '打火机', probability: 0.3, minQty: 1, maxQty: 1 },
            { itemId: 'I0010', itemName: '手电筒', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.3, minQty: 1, maxQty: 3 }
        ]
    },
    'P0008': {
        name: '杂货铺-库房',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.6, minQty: 3, maxQty: 8 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.5, minQty: 3, maxQty: 8 },
            { itemId: 'I0004', itemName: '罐头', probability: 0.4, minQty: 2, maxQty: 5 },
            { itemId: 'I0006', itemName: '方便面', probability: 0.4, minQty: 2, maxQty: 6 },
            { itemId: 'I0014', itemName: '急救包', probability: 0.15, minQty: 1, maxQty: 1 },
            { itemId: 'I0015', itemName: '消毒酒精', probability: 0.2, minQty: 1, maxQty: 2 },
            { itemId: 'I0016', itemName: '绷带', probability: 0.2, minQty: 1, maxQty: 3 }
        ]
    },
    'P0009': {
        name: '通路-铁皮房',
        comfort: 50,
        items: [
            { itemId: 'I0009', itemName: '钥匙串', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0010', itemName: '手电筒', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0011', itemName: '外套', probability: 0.2, minQty: 1, maxQty: 1 }
        ]
    },
    'P0010': {
        name: '通路-道路',
        comfort: 30,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.15, minQty: 1, maxQty: 1 },
            { itemId: 'I0005', itemName: '糖果', probability: 0.15, minQty: 1, maxQty: 2 },
            { itemId: 'I0008', itemName: '打火机', probability: 0.1, minQty: 1, maxQty: 1 },
            { itemId: 'I0011', itemName: '外套', probability: 0.1, minQty: 1, maxQty: 1 },
            { itemId: 'I0012', itemName: '毛巾', probability: 0.1, minQty: 1, maxQty: 1 }
        ]
    },
    'P0011': {
        name: '住宅-客厅',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0005', itemName: '糖果', probability: 0.2, minQty: 1, maxQty: 3 },
            { itemId: 'I0011', itemName: '外套', probability: 0.3, minQty: 1, maxQty: 1 },
            { itemId: 'I0012', itemName: '毛巾', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0008', itemName: '打火机', probability: 0.15, minQty: 1, maxQty: 1 }
        ]
    },
    'P0012': {
        name: '住宅-厨房',
        comfort: 50,
        items: [
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.4, minQty: 1, maxQty: 3 },
            { itemId: 'I0002', itemName: '压缩饼干', probability: 0.3, minQty: 1, maxQty: 4 },
            { itemId: 'I0004', itemName: '罐头', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0006', itemName: '方便面', probability: 0.3, minQty: 1, maxQty: 3 },
            { itemId: 'I0001', itemName: '苹果', probability: 0.2, minQty: 1, maxQty: 2 },
            { itemId: 'I0007', itemName: '水果刀', probability: 0.2, minQty: 1, maxQty: 1 }
        ]
    },
    'P0013': {
        name: '住宅-厕所',
        comfort: 50,
        items: [
            { itemId: 'I0012', itemName: '毛巾', probability: 0.5, minQty: 1, maxQty: 2 },
            { itemId: 'I0015', itemName: '消毒酒精', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0016', itemName: '绷带', probability: 0.15, minQty: 1, maxQty: 1 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.2, minQty: 1, maxQty: 1 }
        ]
    },
    'P0014': {
        name: '住宅-卧室',
        comfort: 70,
        items: [
            { itemId: 'I0011', itemName: '外套', probability: 0.4, minQty: 1, maxQty: 2 },
            { itemId: 'I0013', itemName: 'T恤', probability: 0.3, minQty: 1, maxQty: 2 },
            { itemId: 'I0012', itemName: '毛巾', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0005', itemName: '糖果', probability: 0.2, minQty: 1, maxQty: 3 },
            { itemId: 'I0003', itemName: '矿泉水', probability: 0.2, minQty: 1, maxQty: 1 },
            { itemId: 'I0008', itemName: '打火机', probability: 0.15, minQty: 1, maxQty: 1 },
            { itemId: 'I0010', itemName: '手电筒', probability: 0.1, minQty: 1, maxQty: 1 }
        ]
    },
};

// ========== 从小场所抽取物品 ==========
function getLootFromPlace(subPlaceId) {
    let place = SUB_PLACE_TYPES[subPlaceId];
    let loot = [];

    for (let entry of place.items) {
        if (Math.random() < entry.probability) {
            let qty = Math.floor(Math.random() * (entry.maxQty - entry.minQty + 1)) + entry.minQty;
            loot.push({
                id: entry.itemId,
                name: entry.itemName,
                category: getItemById(entry.itemId).category,
                qty: qty
            });
        }
    }

    return loot;
}