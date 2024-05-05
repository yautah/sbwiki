# 宝箱循环

与《皇室战争》类似，你通过战斗赢得的宝箱的稀有度并不是随机的。它们由一个循环预先定义，对于每个玩家都是一致的，从而确保所有玩家的进展平衡和一致。

## 概述

宝箱循环的长度为60个宝箱，稀有度的分布如下：

- 36个普通宝箱（60%）
- 18个稀有宝箱（30%）
- 6个史诗宝箱（10%）

一旦你达到序列的末尾，循环将重新回到开始。

![宝箱循环](/assets/sb_chest_cycle_1.png)

## 循环



<style>
    .heatmapChestCycle {
        width: 100%;
        text-align: left;
    }
    .heatmapChestCycle th {
        word-wrap: break-word;
        text-align: left;
        color: white;
        background: #202127;
    }
    .heatmapChestCycle tr:nth-child(1) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(2) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(3) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(4) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(5) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(6) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(7) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(8) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(9) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(10) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(11) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(12) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(13) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(14) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(15) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(16) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(17) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(18) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(19) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(20) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(21) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(22) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(23) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(24) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(25) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(26) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(27) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(28) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(29) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(30) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(31) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(32) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(33) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(34) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(35) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(36) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(37) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(38) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(39) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(40) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(41) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(42) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(43) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(44) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(45) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(46) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(47) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(48) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(49) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(50) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(51) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(52) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(53) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(54) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(55) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(56) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(57) { background: rgba(255, 179, 0, 0.30); }
    .heatmapChestCycle tr:nth-child(58) { background: rgba(0, 112, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(59) { background: rgba(156, 1, 255, 0.30); }
    .heatmapChestCycle tr:nth-child(60) { background: rgba(255, 179, 0, 0.30); }
</style>

<div class="heatmapChestCycle">

| Index | Icon | Rarity | 
| -- | -- | -- |
| 1 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 2 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 3 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 4 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 5 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 6 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 7 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 8 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 9 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 10 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 11 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 12 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 13 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 14 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 15 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 16 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 17 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 18 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 19 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 20 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 21 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 22 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 23 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 24 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 25 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 26 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 27 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 28 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 29 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 30 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 31 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 32 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 33 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 34 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 35 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 36 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 37 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 38 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 39 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 40 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 41 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 42 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 43 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 44 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 45 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 46 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 47 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 48 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 49 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 50 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 51 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 52 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 53 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 54 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 55 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 56 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 57 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |
| 58 | <img src="../assets/chest_icon_common.png"  width="40" height="40" /> | Common |
| 59 | <img src="../assets/chest_icon_epic.png"  width="40" height="40" /> | Epic |
| 60 | <img src="../assets/chest_icon_rare.png"  width="40" height="40" /> | Rare |

</div>


## 查找你的循环

知道你下一个宝箱的稀有度并不会带来很大的区别，但如果你知道下一个宝箱将是史诗宝箱，那么在游戏中尽可能发挥得更好会有所帮助……或者为连续出现的稀有宝箱做好准备！

为了做到这一点，你需要注意一些不寻常的宝箱序列。其中主要的是史诗宝箱和连续出现的稀有宝箱。如果你追踪这些宝箱之后的3个宝箱，你就能确定你在循环中的位置。