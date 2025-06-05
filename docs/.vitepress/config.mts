import { defineConfig } from "vitepress";
import jsSidebar from '../js/_sidebar';
import es6Sidebar from '../es6/_sidebar';
import handleSidebar from '../手写代码/_sidebar';
import tsSidebar from '../ts/_sidebar';
import WebpackSidebar from '../webpack/_sidebar';
import VuekSidebar from '../vue/_sidebar';
import CSSSidebar from '../css/_sidebar';
import ReactSidebar from '../react/_sidebar';
import MiniSidebar from '../mini/_sidebar';
import AlgorithmSidebar from '../算法/_sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "史楠的前端面试题总结",
  description: "前端基础及相关面试题",
  base: '/',
  themeConfig: {
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      {
        text: "JavaScript",
        items: [
          { text: "基础", link: "/js/原型", activeMatch: '/js/' },
          { text: "ES6", link: "/es6/箭头函数", },
          { text: "手写代码", link: "/手写代码/new", },
          { text: "设计模式", link: "/item-3", },
          { text: "数据结构和算法", link: "/item-3",  },
        ],
      },
      { text: "CSS", link: "/css/盒子模型" },
      { text: "Vue", link: "/vue/MVVM和MVM的区别", activeMatch: '/vue/' },
      { text: "React", link: "/react/base", activeMatch: '/react/' },
      { text: "TypeScript", link: "/ts/home" },
      { text: "Node.js", link: "/markdown-examples" },
      { text: "算法", link: "/算法/base" },
      {
        text: "工程化",
        items: [
          { text: "Webpack", link: "/webpack/home" },
          { text: "Vite", link: "/item-1" },
          { text: "微前端", link: "/item-1" },
          { text: "小程序", link: "/mini/云开发" },
        ],
      },
    ],

    sidebar: {
      "/js": jsSidebar,
      "/es6": es6Sidebar,
      "/手写代码/":handleSidebar,
      "/ts/":tsSidebar,
      "/webpack/":WebpackSidebar,
      "/vue": VuekSidebar,
      "/react/": ReactSidebar,
      "/css/": CSSSidebar,
      "/mini/": MiniSidebar,
      "/算法/": AlgorithmSidebar,
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],

    search: {
      provider: "local",
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    externalLinkIcon: true,

    footer: {
      copyright: "Copyright © 2024 单程票",
    },
  },
});
