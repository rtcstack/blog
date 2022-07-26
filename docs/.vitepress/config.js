export default {
  title: 'RTCStack',
  description: 'A RTCStack Site',
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '更新日期',
    nav: [
      {
        text: '云计算', link: '/ecs/ecs.md'
      },
      {
        text: '云原生', link: '/cce/cce.md'
      },
      {
        text: '云运维',
        items: [
          {
            items: [
              { text: 'AV', link: '/ops/av.md' },
              { text: 'CDN', link: '/ops/cdn.md' },
              { text: 'IOT', link: '/ops/iot.md' },
            ]
          }
        ]
      },
      {
        text: '云网络', link: '/bgp/bgp.md'
      },
      {
        text: '数据库', link: '/bgp/bgp.md'
      },
      {
        text: '前端开发', link: '/fe/fe.md'
      },
      {
        text: '后端开发', link: '/be/be.md'
      },
      {
        text: '移动开发', link: '/me/me.md'
      },
    ],
    sidebar: {
      '/': [
        {
          text: '在线工具',
          collapsible: true,
          items: [
            { text: 'MD5计算', link: '/tool/md5.html' },
            { text: '进制转换', link: '/tool/switch.html' }
          ],
        }
      ],
    }
  }
}
