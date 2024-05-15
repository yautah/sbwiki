---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 爆裂小队
  text: 了解爆裂小队游戏的角色、法术、新闻等
  tagline: 爆裂小队资料速查
  image:
    src: /Squad_Logo_Original.png
    alt: 爆裂小队Squad Busters

features:
  - icon:
      src: /maps.png
    title: 爆裂小队地图
    details: 了解所有地图的宝箱、箱子和结构
    link: /sb/maps
  - icon:
      src: /characters.png
    title: 爆裂小队部队
    details: 比较所有不同的单位，打造最强小队
    link: /sb/troops
  - icon:
      src: /monsters.png
    title: 爆裂小队怪物
    details: 查看所有敌人和Boss的统计数据
    link: /sb/monsters
  - icon:
      src: /appicon_sb_2cs.png
    title: 超级部队几率
    details: Probability to get Mega troops from a chest during battles.
    link: /sb/mega_chances
  - icon:
      src: /appicon_sb_2cs.png
    title: 常用技巧
    details: Do you know all of them? 
    link: /sb/tips
  - icon:
      src: /appicon_sb_2cs.png
    title: 更多资源
    details: Several links, tools and resources to external pages.
    link: /sb/resources
---

<style>
:root {

  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(70deg, #b71684 10%, #bdf4f8);

  --vp-home-hero-image-background-image: linear-gradient(10deg, #b71684 50%, #bdf4f8 20%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

.box .VPImage {
  width: 100% !important;
}

.vpi-social-bilibili {
    --icon: url("/bilibili.ico");
}

</style>
