# 按秒伤排序

<style>
    .heatMapTDPS {
        width: 100%;
        text-align: left;
    }
    .heatMapTDPS th {
        word-wrap: break-word;
        text-align: left;
        color: white;
        background: #202127;
    }
    .heatMapTDPS tr:nth-child(1) { background: rgba(200, 0, 200, 0.3); }
    .heatMapTDPS tr:nth-child(2) { background: rgba(200, 0, 200, 0.3); }
    .heatMapTDPS tr:nth-child(3) { background: rgba(0, 255, 0, 0.3); }
    .heatMapTDPS tr:nth-child(4) { background: rgba(8, 247, 0, 0.3); }
    .heatMapTDPS tr:nth-child(5) { background: rgba(33, 222, 0, 0.3); }
    .heatMapTDPS tr:nth-child(6) { background: rgba(35, 220, 0, 0.3); }
    .heatMapTDPS tr:nth-child(7) { background: rgba(37, 218, 0, 0.3); }
    .heatMapTDPS tr:nth-child(8) { background: rgba(43, 212, 0, 0.3); }
    .heatMapTDPS tr:nth-child(9) { background: rgba(63, 192, 0, 0.3); }
    .heatMapTDPS tr:nth-child(10) { background: rgba(66, 189, 0, 0.3); }
    .heatMapTDPS tr:nth-child(11) { background: rgba(70, 185, 0, 0.3); }
    .heatMapTDPS tr:nth-child(12) { background: rgba(76, 179, 0, 0.3); }
    .heatMapTDPS tr:nth-child(13) { background: rgba(90, 165, 0, 0.3); }
    .heatMapTDPS tr:nth-child(14) { background: rgba(91, 164, 0, 0.3); }
    .heatMapTDPS tr:nth-child(15) { background: rgba(93, 162, 0, 0.3); }
    .heatMapTDPS tr:nth-child(16) { background: rgba(101, 154, 0, 0.3); }
    .heatMapTDPS tr:nth-child(17) { background: rgba(115, 140, 0, 0.3); }
    .heatMapTDPS tr:nth-child(18) { background: rgba(115, 140, 0, 0.3); }
    .heatMapTDPS tr:nth-child(19) { background: rgba(117, 138, 0, 0.3); }
    .heatMapTDPS tr:nth-child(20) { background: rgba(118, 137, 0, 0.3); }
    .heatMapTDPS tr:nth-child(21) { background: rgba(121, 134, 0, 0.3); }
    .heatMapTDPS tr:nth-child(22) { background: rgba(122, 133, 0, 0.3); }
    .heatMapTDPS tr:nth-child(23) { background: rgba(123, 132, 0, 0.3); }
    .heatMapTDPS tr:nth-child(24) { background: rgba(127, 128, 0, 0.3); }
    .heatMapTDPS tr:nth-child(25) { background: rgba(145, 110, 0, 0.3); }
    .heatMapTDPS tr:nth-child(26) { background: rgba(145, 110, 0, 0.3); }
    .heatMapTDPS tr:nth-child(27) { background: rgba(145, 110, 0, 0.3); }
    .heatMapTDPS tr:nth-child(28) { background: rgba(160, 95, 0, 0.3); }
    .heatMapTDPS tr:nth-child(29) { background: rgba(188, 67, 0, 0.3); }
</style>

<div class="heatMapTDPS">

|   | 角色 | 血量 | 秒伤 | 
| -- | -- | -- | -- |
| <img src="../assets/sb_emote_mega-chicken.png"  width="40" height="40" /> | 蛟龙母鸡 | 8000 | 273 |
| <img src="../assets/sb_emote_mega-el-primo.png"  width="40" height="40" /> | 虎王普里莫 | 11000 | 237 |
| <img src="../assets/sb_emote_penny.png"  width="40" height="40" /> | 潘妮 | 1100 | 219 |
| <img src="../assets/sb_emote_witch.png"  width="40" height="40" /> | 女巫 | 1000 | 212 |
| <img src="../assets/sb_emote_colt.png"  width="40" height="40" /> | 柯尔特 | 750 | 190 |
| <img src="../assets/sb_emote_bea.png"  width="40" height="40" /> | 贝亚 | 900 | 189 |
| <img src="../assets/sb_emote_max.png"  width="40" height="40" /> | 麦克斯 | 1100 | 188 |
| <img src="../assets/sb_emote_chicken.png"  width="40" height="40" /> | 母鸡 | 1000 | 182 |
| <img src="../assets/sb_emote_mortis.png"  width="40" height="40" /> | 莫提斯 | 1700 | 165 |
| <img src="../assets/sb_emote_pam.png"  width="40" height="40" /> | 帕姆 | 1200 | 162 |
| <img src="../assets/sb_emote_goblin.png"  width="40" height="40" /> | 哥布林 | 1200 | 159 |
| <img src="../assets/sb_emote_archer-queen.png"  width="40" height="40" /> | 弓箭女皇 | 1200 | 154 |
| <img src="../assets/sb_emote_hog-rider.png"  width="40" height="40" /> | 野猪骑士 | 1500 | 142 |
| <img src="../assets/sb_emote_shelly.png"  width="40" height="40" /> | 雪莉 | 1300 | 141 |
| <img src="../assets/sb_emote_barbarian-king.png"  width="40" height="40" /> | 野蛮人之王 | 3200 | 139 |
| <img src="../assets/sb_emote_barbarian.png"  width="40" height="40" /> | 野蛮人 | 1400 | 132 |
| <img src="../assets/sb_emote_bo.png"  width="40" height="40" /> | 阿渤 | 700 | 120 |
| <img src="../assets/sb_emote_heavy.png"  width="40" height="40" /> | 重机枪手 | 2300 | 120 |
| <img src="../assets/sb_emote_medic.png"  width="40" height="40" /> | 医师 | 900 | 119 |
| <img src="../assets/sb_emote_tank-girl.png"  width="40" height="40" /> | 坦克驾驶员 | 1200 | 118 |
| <img src="../assets/sb_emote_mavis.png"  width="40" height="40" /> | 梅维斯 | 1300 | 115 |
| <img src="../assets/sb_emote_wizard.png"  width="40" height="40" /> | 法师 | 850 | 115 |
| <img src="../assets/sb_emote_battle-healer.png"  width="40" height="40" /> | 战斗天使 | 1800 | 113 |
| <img src="../assets/sb_emote_royale-king.png"  width="40" height="40" /> | 国王 | 2200 | 110 |
| <img src="../assets/sb_emote_el-primo.png"  width="40" height="40" /> | 普利莫 | 2800 | 95 |
| <img src="../assets/sb_emote_greg.png"  width="40" height="40" /> | 格雷格 | 1300 | 94 |
| <img src="../assets/sb_emote_trader.png"  width="40" height="40" /> | 商人 | 1600 | 94 |
| <img src="../assets/sb_emote_nita.png"  width="40" height="40" /> | 妮塔 | 1200 | 82 |
| <img src="../assets/sb_emote_dynamike.png"  width="40" height="40" /> | 爆破麦克 | 800 | 58 |

</div>