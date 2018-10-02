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
            }
        ]
    }
}