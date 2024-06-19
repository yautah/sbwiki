import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [["link", { rel: "icon", href: "/favicon.ico" }, {
    rel: "stylesheet",
    href: "../styles/styles.css",
  }]],
  lang: "zh-CN",
  title: "爆裂小队速查",
  logo: "/logo.png",
  description: "爆裂小队速查工具",
  base: "/sbwiki/",
  appearance: "dark",
  search: {
    provider: 'local'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "爆裂小队速查",
    nav: [
      { text: "首页", link: "/" },
      //{ text: "B", link: "/sb/" },
      //{ text: "CR", link: "/cr/" },
    ],
    sidebarMenuLabel:"菜单",
    returnToTopLabel:"回到顶部",
    darkModeSwitchLabel: "夜间模式",
    docFooter:{
      prev: '上一页',
      next: '下一页',
    },

    sidebar: [
      {
        text: "世界",
        link: "/sb/maps",
        items: [
          { text: "绿野世界", link: "/sb/maps_w1" },
          { text: "沙漠世界", link: "/sb/maps_w2" },
          { text: "皇室世界", link: "/sb/maps_w3" },
          { text: "海岛世界", link: "/sb/maps_w4" },
          { text: "绿野世界（终局）", link: "/sb/maps_w1e" },
        ],
      },
      {
        text: "小队",
        link: "/sb/troops",
        items: [
          { text: "信息卡片", link: "/sb/troops_cards" },
          { text: "伤害排行", link: "/sb/troops_by_dps" },
          { text: "血量排行", link: "/sb/troops_by_hp" },
          {
            text: "合体加成",
            link: "/sb/troops_fusion_multipliers",
          },
        ],
      },
      {
        text: "怪物",
        link: "/sb/monsters",
        items: [
          { text: "小型怪物", link: "/sb/monsters_small.html" },
          { text: "中型怪物", link: "/sb/monsters_medium.html" },
          { text: "大型怪物", link: "/sb/monsters_big.html" },
          { text: "Boss怪物", link: "/sb/monsters_bosses.html" },
          { text: '全部怪物', link: '/sb/monsters_all.html' }
        ],
      },
      {
        "text": "更多内容",
        "link": "/sb/more_stuff",
        "collapsed": false,
        "items": [
        { "text": "宝箱循环", "link": "/sb/chest_cycle.html" },
        { "text": "宝箱尺寸", "link": "/sb/chest_sizes.html" },
        { "text": "宝箱价格", "link": "/sb/chest_prices.html" },
        { "text": "征程进度", "link": "/sb/progression_worlds.html" },
        { "text": "超级部队几率", "link": "/sb/mega_chances.html" },
        { "text": "更多技巧", "link": "/sb/tips.html" },
        { "text": "其他资源", "link": "/sb/resources.html" }
        ]
        }
    ],

    socialLinks: [
      // { icon: "twitter", link: "https://twitter.com/Alpe123_CR" },
      // { icon: 'reddit', link: 'https://www.reddit.com/user/alpe123/' },
      { icon: "bilibili", link: "https://space.bilibili.com/44441533" },
      { icon: "github", link: "https://github.com/yautah" },
    ],
    footer: {
      message: '<a href="https://supercell.com/en/fan-content-policy/">本站数据来源自 @alpe | Royaleapi，对前人的工作表示最高的致敬！</a>',
      copyright: 'Copyright © 2024 Xiaomi. All rights reserved.'
    }
  },
});

function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
