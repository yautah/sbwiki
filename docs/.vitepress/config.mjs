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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    siteTitle: "爆裂小队速查",
    nav: [
      { text: "首页", link: "/" },
      //{ text: "B", link: "/sb/" },
      //{ text: "CR", link: "/cr/" },
    ],

    docFooter:{
      prev: '上一页',
      next: '下一页',
    },

    sidebar: [
      {
        text: "地图",
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
        text: "部队",
        link: "/sb/troops",
        items: [
          { text: "信息卡片", link: "/sb/troops_cards" },
          { text: "按伤害排序", link: "/sb/troops_by_dps" },
          { text: "按血量排序", link: "/sb/troops_by_hp" },
          {
            text: "融合乘数",
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
        ],
      },
    ],

    socialLinks: [
      // { icon: "twitter", link: "https://twitter.com/Alpe123_CR" },
      // { icon: 'reddit', link: 'https://www.reddit.com/user/alpe123/' },
      { icon: "bilibili", link: "https://space.bilibili.com/44441533" },
      { icon: "github", link: "https://github.com/yautah" },
    ],
  },
});

function getImageUrl(path) {
  return new URL(`../assets/${path}`, import.meta.url).href;
}
