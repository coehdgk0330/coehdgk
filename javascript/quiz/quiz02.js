function getMealByTime(x){

    if(10>= x && x>=6){
        console.log('아침');
        return;
    }else if(14>=x && x>=11){
        console.log('점심');
        return;
    }else if(20>=x && x>=17){
        console.log('저녁');
        return;
    }else if(23>=x && x>=21){
        console.log('야식');
        return;
    }else{
        console.log('금식')
    }
}
getMealByTime(5);
getMealByTime(8);
getMealByTime(13);
getMealByTime(16);
getMealByTime(19);
getMealByTime(22);
getMealByTime(2);

