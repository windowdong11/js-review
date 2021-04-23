console.log("[type]")
// true : {}, [], (number)0, -0, NaN을 제외한 모든 수, (string)문자가 하나라도 포함된 문자열
// false : '', null, undefined, 0, -0, NaN

if({}){
    console.log("{} : true")
}
if(''){
}
else {
    console.log("'': false")
}