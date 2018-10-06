module.exports = {
    title: 'kaitoの精進記録',
    description: '',
    base: '/kaito_procon/',
    dest: 'docs',
    head: [
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
            }
        ],
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
            }
        ],
        ['link',
            {
                rel: 'icon',
                type: 'image/png',
                href: '/__YOUR__FILE__.png'
            }
        ]
    ],
    markdown: {
        anchor: {
            permalink: true
        },
        config: md => {
            md.use(require("markdown-it-katex"))
            md.options.linkify = true
        }
    },
    themeConfig: {
        search: true,
        nav: [{
                text: 'INDEX',
                link: '/'
            },
            {
                text: 'ABOUT',
                link: '/about.html'
            },
            {
                text: 'WORKS',
                link: '/works.html'
            },
            {
                text: 'PROCON',
                items: [
                    {
                        text: `AtCoder ABC 045 D すぬけ君の塗り絵/Snuke's Coloring`,
                        link: `/procon/201810040750.html`
                    },
                    {
                        text: `AtCoder ABC 047 D 高橋君と見えざる手 / An Invisible Hand`,
                        link: `/procon/201810040849.html`
                    },
                    {
                        text: `AtCoder ABC 049 D 連結 / Connectivity`,
                        link: `/procon/201810041749.html`
                    },
                    {
                        text: `AtCoder ABC 053 D Card Eater`,
                        link: `/procon/201810041809.html`
                    },
                    {
                        text: `AtCoder ABC 060 D Simple Knapsack`,
                        link: `/procon/201810041830.html`
                    },
                    {
                        text: `AtCoder ABC 063 D Widespread`,
                        link: `/procon/201810050944.html`
                    },
                    {
                        text: `AtCoder ABC 112 C Pyramid`,
                        link: `/procon/201810062325.html`
                    },
                    {
                        text: `AtCoder ABC 112 D Partition`,
                        link: `/procon/201810062343.html`
                    }
                ]
            }
        ]
    }
}