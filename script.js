function max(a,b){
    if(a>b){
        return a;
    }
    else if(a<b){
        return b;
    }
    else{
        return '一樣大';
    }
}

function random(m){
    return Math.floor(Math.random()*m+1);
}

function lastChar(arr){
    var c = arr.length;
    return arr[c-1];
}

function squares(a,b){
    return a^2+b;
}

function leapYear(y){
    if(y % 4 == 0 && y % 100 != 0 || y % 400 == 0){
        return 'yes';
    }
    else{
        return 'no';
    }
}