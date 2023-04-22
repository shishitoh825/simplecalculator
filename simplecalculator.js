// 数字を入力
function addNumber(num){
    const result = document.getElementById("result");
    result.value += num;
}
// 演算子を入力
function addOperator(operator){
    const result = document.getElementById("result");
    // 数字だけが入力されていることを確認
    var checkoperator = document.getElementById("result").value;
    if(isNaN(checkoperator) === false){
        result.value += operator;
    }else{
        alert("演算子を二回以上連続で入力しないでください。")
        return;
    }
}
// =を押したときに計算
function calculate(){
    const result = document.getElementById("result").value;
    // 数字と演算子のみが入力されているか判定
    var regex = new RegExp(/[ -0-9/*+.]*/);
    if(regex.test(result)){
        const answer = eval(result);
    
        document.getElementById("result").value = answer;
        // 0で割ると答えがInfinityになるのでその時警告
        if(answer === Infinity){
            alert('0で割らないでください。');
        }
    }
}
// ACで全消去
function allclear(){
    document.getElementById("result").value = "";
}