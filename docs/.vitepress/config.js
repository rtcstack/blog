export default {
  base:'./',    
  themeConfig: {
    siteTitle: "RTCStack",
    nav: [
      {
        text: '云计算',
        items: [
          {
            items: [
              { text: '计算榜', link: '/ecs/ecs.md' },
            ]
          }
        ]
      },
      {
        text: '云原生',
        items: [
          {
            items: [
              { text: '原生榜', link: '/cce/cce.md' },
            ]
          }
        ]
      },
      {
        text: '云运维',
        items: [
          {
            items: [
              { text: '云运维', link: '/ops/ops.md' },
            ]
          }
        ]
      },      {
        text: '云网络',
        items: [
          {
            items: [
              { text: '云网络', link: '/bgp/bgp.md' },
            ]
          }
        ]
      },
      {
        text: '数据库',
        items: [
          {
            items: [
              { text: '数据库榜', link: '/rds/rds.md' },
            ]
          }
        ]
      },
      {
        text: '前端开发',
        items: [
          {
            items: [
              { text: '前端榜', link: '/fe/fe.md' },
            ]
          }
        ]
      },
      {
        text: '后端开发',
        items: [
          {
            items: [
              { text: '后端榜', link: '/be/be.md' },
            ]
          }
        ]
      },
      {
        text: '移动开发',
        items: [
          {
            items: [
              { text: '移动榜', link: '/me/me.md' },
            ]
          }
        ]
      },
    ],
    sidebar: {
      '/index': [
        {
          text: '在线工具',
          collapsible: true,
          items: [{ text: 'MD5计算', link: '/tool/md5.html' }]
        }
      ],
      // '/ecs/': [
      //   {
      //     text: '云计算',
      //     collapsible: true,
      //     items: [{ text: '云计算', link: '/ecs/ecs.md' }]
      //   }
      // ]
    }
  }
}
