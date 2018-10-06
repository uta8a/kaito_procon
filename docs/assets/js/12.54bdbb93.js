(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"atcoder-abc-112-d-partition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#atcoder-abc-112-d-partition","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://beta.atcoder.jp/contests/abc112/tasks/abc112_d",target:"_blank",rel:"noopener noreferrer"}},[t._v("AtCoder ABC 112 D Partition"),a("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("問題")]),t._v(" "),a("p",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("a")]),a("mn",[t._v("1")])],1),a("mo",[t._v("+")]),a("msub",[a("mi",[t._v("a")]),a("mn",[t._v("2")])],1),a("mo",[t._v("+")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mo",[t._v("+")]),a("msub",[a("mi",[t._v("a")]),a("mi",[t._v("N")])],1),a("mo",[t._v("=")]),a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a_1 + a_2 + ... + a_N = M")])],1)],1)],1),t._m(1)]),t._v("で、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("G")]),a("mi",[t._v("C")]),a("mi",[t._v("D")]),a("mo",[t._v("(")]),a("msub",[a("mi",[t._v("a")]),a("mn",[t._v("1")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("a")]),a("mn",[t._v("2")])],1),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v(".")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("msub",[a("mi",[t._v("a")]),a("mi",[t._v("N")])],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("GCD(a_1,a_2,...,a_N)")])],1)],1)],1),t._m(2)]),t._v("の最大値を求めよ")])]),t._v(" "),a("ul",[t._m(3),t._v(" "),a("li",[t._v("問題文の"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("G")]),a("mi",[t._v("C")]),a("mi",[t._v("D")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("GCD")])],1)],1)],1),t._m(4)]),t._v("を"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(5)]),t._v("とおく。左辺は"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(6)]),t._v("で割れるので、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")]),a("mo",[t._v("∣")]),a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g \\mid M")])],1)],1)],1),t._m(7)]),t._v("である。つまり、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(8)]),t._v("は"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),t._m(9)]),t._v("の約数。")]),t._v(" "),a("li",[t._v("約数全列挙をする。")]),t._v(" "),a("li",[a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),t._m(10)]),t._v("個の整数に"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(11)]),t._v("を割り振ることを考えると、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("M")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),t._m(12)]),t._v("の約数のうち"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),t._m(13)]),t._v("を超える整数"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S")])],1)],1)],1),t._m(14)]),t._v("のうち最小のものをとり、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("S")])],1)],1)],1),t._m(15)]),t._v("個の"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(16)]),t._v("を"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),t._m(17)]),t._v("個の"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("msub",[a("mi",[t._v("a")]),a("mi",[t._v("i")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a_i")])],1)],1)],1),t._m(18)]),t._v("に適当に割り振れば、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")]),a("mo",[t._v("=")]),a("mi",[t._v("M")]),a("mi",{attrs:{mathvariant:"normal"}},[t._v("/")]),a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g=M/S")])],1)],1)],1),t._m(19)]),t._v("となり、"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("g")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("g")])],1)],1)],1),t._m(20)]),t._v("が最大化できる。")]),t._v(" "),a("li",[t._v("以上をコードにする。計算量は"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mi",[t._v("O")]),a("mo",[t._v("(")]),a("msqrt",[a("mrow",[a("mi",[t._v("M")])],1)],1),a("mo",[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("O(\\sqrt{M})")])],1)],1)],1),t._m(21)])])]),t._v(" "),t._m(22),t._m(23)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("約数全列挙ができずに時間を食ってしまった")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.83333em","vertical-align":"-0.15em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mbin"},[t._v("+")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit"},[t._v("G")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[t._v("C")]),a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("D")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("1")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathrm"},[t._v("2")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mord mathrm"},[t._v(".")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathit"},[t._v("a")]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle scriptstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("strong",[this._v("方針")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit"},[this._v("G")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.07153em"}},[this._v("C")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[this._v("D")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")]),s("span",{staticClass:"mrel"},[this._v("∣")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("M")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("M")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("N")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("M")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("N")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[this._v("S")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[this._v("S")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.68333em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("N")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[this._v("a")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[this._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[this._v("i")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[this._v("​")])]),this._v("​")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.75em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")]),s("span",{staticClass:"mrel"},[this._v("=")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[this._v("M")]),s("span",{staticClass:"mord mathrm"},[this._v("/")]),s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05764em"}},[this._v("S")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.03588em"}},[this._v("g")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.9266650000000001em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.176665em","vertical-align":"-0.25em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.02778em"}},[t._v("O")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"sqrt mord"},[a("span",{staticClass:"sqrt-sign",staticStyle:{top:"-0.08666499999999999em"}},[a("span",{staticClass:"style-wrap reset-textstyle textstyle uncramped"},[t._v("√")])]),a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])]),a("span",{staticStyle:{top:"-0.846665em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),a("span",{staticClass:"reset-textstyle textstyle uncramped sqrt-line"})]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"1em"}},[t._v("​")])]),t._v("​")])])]),a("span",{staticClass:"mclose"},[t._v(")")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("<bits/stdc++.h>")])]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" LINF 1000000000000000001 ")]),a("span",{attrs:{class:"token comment"}},[t._v("// 1e18+1")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int64_t")]),t._v(" N"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("M"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nvector"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int64_t")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ediv")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("int64_t")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  vector"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int64_t")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" ret"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("<=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      ret"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push_back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        ret"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push_back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ret"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("push_back")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" ret"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int64_t")]),t._v(" mn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LINF"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("main")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  std"),a("span",{attrs:{class:"token operator"}},[t._v("::")]),t._v("ios"),a("span",{attrs:{class:"token operator"}},[t._v("::")]),a("span",{attrs:{class:"token function"}},[t._v("sync_with_stdio")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  std"),a("span",{attrs:{class:"token operator"}},[t._v("::")]),t._v("cin"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("tie")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token comment"}},[t._v('// ifstream in("input.txt");')]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// cin.rdbuf(in.rdbuf());")]),t._v("\n\n  cin "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" N "),a("span",{attrs:{class:"token operator"}},[t._v(">>")]),t._v(" M"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" i"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ediv")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),a("span",{attrs:{class:"token operator"}},[t._v(">=")]),t._v(" N"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      mn "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("min")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mn"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  cout "),a("span",{attrs:{class:"token operator"}},[t._v("<<")]),t._v(" M"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("mn "),a("span",{attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("まとめ")]),this._v(" "),s("ul",[s("li",[this._v("典型: 約数全列挙")])])])}],!1,null,null,null);e.options.__file="201810062343.md";s.default=e.exports}}]);