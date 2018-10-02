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

::: warning 性質
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



## range-based forの`auto x`, `auto& x`

- `auto x`このときイテレータの実態をコピーしている
- `auto& x`このとき参照(ポインタのコピー)が行われている
- `auto &x`アドレス？？参照が行われていると思われる →これは存在しない。

| 対象 | 使い方 |
|:--|:--|
| `auto x` | コピーが対象、変更してもoriginalに影響はない |
| `auto& x` | originalを対象に、変更を加えたいとき |
| `const auto& x` | originalを対象に、変更を加えたくないとき |

- [三つの違いについて](https://stackoverflow.com/questions/15176104/c11-range-based-loop-get-item-by-value-or-reference-to-const)
- [auto& xについて](https://qiita.com/rinse_/items/cdfce8aa6a685a8ebe0c)
- [range-based-for](https://cpprefjp.github.io/lang/cpp11/range_based_for.html)