# Vuepressをはじめよう
- 概要
- [他のHexoなどのstatic site generatorとの比較](https://vuepress.vuejs.org/guide/#why-not)
- まだアルファ版なので、安定性や周辺環境の豊富さなら他の方が楽だと思いますが、技術的興味とVueに慣れたい思いから採用しました。
- (WIP)


### WSLでの準備
- 環境: windows(WSL)
```
kaito@PC:~/dev/kaito$ cat /etc/lsb-release
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=18.04
DISTRIB_CODENAME=bionic
DISTRIB_DESCRIPTION="Ubuntu 18.04.1 LTS"
```

- まずは、windows側でフォルダを作って(ここでvuepressという名前のフォルダにするとハマるので、それ以外にしましょう)、シンボリックリンクをWSLからwindows側に向けて張ります
- WSLでの操作
```
ln -s /mnt/c/Cmmd/Project/dev/kaito ~/kaito
```
- 以下、とくに断りのない場合、WSLでの操作です。
- 基本的には[公式](https://vuepress.vuejs.org/)を見るとよいです。

### インストールと最小構成
- [nodebrew](https://github.com/hokaccha/nodebrew)を利用してnode,npmが入っているとします。(node v10.8.0, npm 6.4.1で行っています)
```
cd kaito
npm init -y
npm install -g vuepress
npm install vuepress
```
- WSLはI/Oがちょっと遅いので待ちます。
- 次に、kaito/srcディレクトリを作り(ここに設定やmarkdownを書く)、kaito/src/README.mdというファイルを作ります。READMEには`# Hello VuePress`とか書いておきましょう
- package.jsonを以下のように書き換えます(scripts, authorを変更しています)
```
{
  "name": "kaito",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vuepress dev src",
    "build": "vuepress build src"
  },
  "keywords": [],
  "author": "kaito_tateyama",
  "license": "ISC",
  "dependencies": {
    "vuepress": "^0.14.4"
  }
}
```
- これで準備は整いました。kaitoディレクトリで`npm run dev`をしてみましょう。
- localhost:xxxxにアクセスされるように言われるのでそこにアクセスします。
- Hello VuePressのように表示されていればOKです。

# plugin install
- [数式レンダリング]
- `npm install markdown-it --save-dev`
- `npm install markdown-it-katex --save-dev`

# config系
- webpackを用いて出力するときにはconfigファイルが必要になります。VuePressでは`src/.vuepress/config.js`で管理します。
- kaito/src/.vuepressディレクトリを作り、中にconfig.jsファイルを作ります。記述は以下のようにします。
```
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
                text: 'HOME',
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
```
- 各項目は[こちら](https://vuepress.vuejs.org/config/)を見てください。
- title: ブログタイトル
- description: metaタグで反映される。ブログの説明。
- base: URL/xxxのxxxに入るもの
- dest: 'docs'これはGitHubPages用。ビルド出力先のディレクトリを指定する。
- head: アイコンや、読み込む外部stylesheetなど
- markdown: markdownのレンダリング設定。ここでは、anchor(#)、数式を使うためにkatexを導入している。
    - katexはmathjaxより機能が少ないが早いので、そこまで複雑な式を書かないつもりで導入した。場合によってはmathjaxに移行するつもり。
- themeConfig: ルーティング。

# ディレクトリ構成
- 上のconfig.jsに従ってディレクトリ、ファイルを構成します。
```
src/
  |-_assets/
    |-markdownで使うファイル.png
  |-.vuepress/
    |-components/
      |-vueファイル(部品).vue
    |-public/
      |-icon.png
    |-config.js
  |-about.md
  |-home.md
  |-works.md
```
- 基本はこんな感じで、あとはblog/ディレクトリを設置してその下に精進記事を入れるみたいな感じです。
- 実際に数式込みでやってみます。home.mdを、以下のようにします。
```
# summer festival contest 2018 (#夏祭りコン2018)
- Fについて書きます。

::: tip 問題
$\sum_{i=0}^{K-1} a \uparrow \uparrow i (mod M)$ を求めよ。
:::
- 方針
- 部分問題として、$a \uparrow\uparrow i (mod M)$を求める。
- $a$と$M$が互いに素のときは、
- $a^{\phi(M)} = 1 (mod M)$なので、$a \uparrow\uparrow i (mod M)$を求めるには$a \uparrow\uparrow (i-1) (mod \phi(M))$を求めればOK
- さらに、それを求めるには$a \uparrow\uparrow (i-2)(mod \phi(\phi(M)))$を求めればOK→これを続ける→...→再帰で実装する。計算量は$O(K)$

::: warning $\phi(x)$の性質
(1) xが偶数→$\phi(x)$は$x/2$未満<br>
(2) xが$3$以上→$\phi(x)$は偶数
:::

- (1)は、$p=2$に着目すると、掛ける因数に$2^e - 2^{e-1} = 2^{e-1}$が入るので$x$の半分未満になる
- (2)は、$p$が奇素数の場合を考えると、掛ける因数に$p^e - p^{e-1}$(奇数 - 奇数)が入るので偶数と分かる。
- この性質により、$\log M$回程度の繰り返しで$\phi(x)=1$となり、$mod1$の値を求めることになる。これは$0$に等しい。
- この場合は、$O(\min(K, \log M))$で解けた。
- では、$a$と$M$が互いに素でない場合は？
::: danger WIP
書きかけです
:::



## range-based forの`auto x`, `auto &x`, `auto& x`

::: warning 
auto& xとauto &xの違いが分からない→夜になったらSlackに投げる。
:::

- `auto x`このときイテレータの実態をコピーしている
- `auto& x`このとき参照(ポインタのコピー)が行われている
- ~~ `auto &x`アドレス？？参照が行われていると思われる~~ →これは存在しない

| 対象 | 使い方 |
|:--|:--|
| auto x | コピーが対象、変更してもoriginalに影響はない |
| auto& x | originalを対象に、変更を加えたいとき |
| const auto& x | originalを対象に、変更を加えたくないとき |

- [三つの違いについて](https://stackoverflow.com/questions/15176104/c11-range-based-loop-get-item-by-value-or-reference-to-const)
- [auto& xについて](https://qiita.com/rinse_/items/cdfce8aa6a685a8ebe0c)
- [range-based-for](https://cpprefjp.github.io/lang/cpp11/range_based_for.html)
```
- `npm run dev`してみてみると、数式がレンダリングされている様子が見えると思います。
- components/にvueファイルを作って`<my_vuefile/>`とかするとそのvueコンポーネントが使えるので、markdownだけど自由度的にはHTMLと同等だと思います(スタイルがどれくらいできるかは微妙なところですが…)

# ビルドしてGitHubPagesにデプロイしよう
.gitignore
```
node_modules/
# /dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
```
- `cd kaito` -> `npm run build`

# やりたいこと
- markdownをblog/以下のディレクトリに追加したとき自動でルーティングしてほしい(いちいちルーティング書くの面倒)
- 