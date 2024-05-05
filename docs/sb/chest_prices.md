# 宝箱价格

在战斗中，随着你的小队规模的增长，宝箱的金币价格也会增加。根据小队规模的大小，宝箱的价格如下：

<style>
    .heatMapChestPrices {
        width: 100%;
        text-align: left;
    }
    .heatMapChestPrices th {
        word-wrap: break-word;
        text-align: left;
        color: white;
        background: #202127;
    }
    .heatMapChestPrices tr:nth-child(1) { background: rgba(243, 130, 0, 0.04); }
    .heatMapChestPrices tr:nth-child(2) { background: rgba(243, 130, 0, 0.07); }
    .heatMapChestPrices tr:nth-child(3) { background: rgba(243, 130, 0, 0.14); }
    .heatMapChestPrices tr:nth-child(4) { background: rgba(243, 130, 0, 0.21); }
    .heatMapChestPrices tr:nth-child(5) { background: rgba(243, 130, 0, 0.28); }
    .heatMapChestPrices tr:nth-child(6) { background: rgba(243, 130, 0, 0.35); }
    .heatMapChestPrices tr:nth-child(7) { background: rgba(243, 130, 0, 0.42); }
    .heatMapChestPrices tr:nth-child(8) { background: rgba(243, 130, 0, 0.56); }
    .heatMapChestPrices tr:nth-child(9) { background: rgba(243, 130, 0, 0.70); }
</style>

<div class="heatMapChestPrices">

| 小队规模 | 下一个宝箱价格 | 
| -- | -- |
| 1个小队单位 | 3个金币 |
| 2个小队单位 | 5个金币 |
| 3个小队单位 | 10个金币 |
| 4个小队单位 | 15个金币 |
| 5个小队单位 | 20个金币 |
| 6个小队单位 | 25个金币 |
| 7个小队单位 | 30个金币 |
| 8个小队单位 | 40个金币 |
| 9个或更多小队单位 | 50个金币 |

</div>

即使你的小队规模增长，宝箱的价格仍然是50个金币，这是最高价格。