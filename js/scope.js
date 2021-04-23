console.log("[scope]")
function scope() {
    if(false){
        let sv = 100;
    }
    console.log(sv)
}