# simplecalculator
# Discription
・This is a simple calculator with only four arithmetic operations.<br>
・This calculator is not a direct input type, but a button input type.<br>
・A small number of calculations can also be performed, but there is no button to enter a decimal point.<br>
・The Eval function is used in the calculation, but it uses a regular expression to ensure that it only works when only the numbers and symbols necessary for the calculation are entered.<br>
・Only one operator can be entered at a time.<br>
As an example, a calculation like 9 × 8 + 7 - 3 cannot be done at once.<br>
If you try to use more than one operator at a time, you will get an alert.<br>
・Pressing the × button will result in a * on the display of the calculation.The ÷ button will likewise result in a /.<br>
・It is a little unsightly because you can enter numbers starting with 0, but there should be no problem with the functionality of the calculation.<br>
・Divide the number by zero and you will see Infinity and an alert.
# 説明
・四則演算のみのシンプルな電卓です。<br>
・直接入力するタイプではなく、ボタンで入力するタイプです。<br>
・少数の計算もできますが、少数点を入力するボタンはありません。<br>
・正規表現を使って計算に必要な数字や記号だけが入力されているときのみ動くようにしていますが、計算にEval関数を使っています。<br>
・一度に入力できる演算子（演算記号）は1つまでです。<br>
例として、 9 × 8 + 7 - 3のような計算は一度にはできません。<br>
演算子を一度に2つ以上使おうとすると警告が出ます。<br>
・ × のボタンを押すと計算の表示の上では * となります。 ÷ のボタンの場合も同様に / となります。<br>
・0から始まる数字を入力できてしまい少し見栄えが悪いですが、計算の機能としての問題はないはずです。<br>
・数字を0で割ると Infinity と表示され警告が出ます。
