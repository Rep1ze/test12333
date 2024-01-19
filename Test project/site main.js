function NDS(){
    let a = prompt("Enter your bet no NDS")
    if(!a || isNaN(a) || a < 0){
        alert("Wrong result")
    }else{
        let b = prompt("Enter NDS in %")
        if(!b || isNaN(b) || b < 0 ){
            alert("Wrong result")
        }else{
            alert(a * b / 100 +  " Your NDS")
            alert(a *b / 100 + a + " Your NDS + summ")
        }
    }
}