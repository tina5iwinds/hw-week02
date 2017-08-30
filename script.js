function showMsg(msg1,msg2){
    var allMsg = msg1+msg2;
    return allMsg;
}

function lastChar(arr){
    var index = arr.join(,);
    var a = index(index.length-1)
    console.log(a);
}

function max(a,b){
    if(a>b){
        console.log(a);
    }
    else{
        console.log(b);
    }
}

function random(m){
    console.log(Math.floor(Math.random()*m+1));
}

function squares(a,b){
    var c;
    c = a^2+b;
    console.log(c);
}

function leapYear(y){
    if(y%4===0 || y%100!=0){
        console.log(true);
    }
    else if(y%400===0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}