
// 함수 js

//js 에서는 함수도 전달 가능

function fucn01(a){
    console.log(1231);
}
funco1(1231);

function func02(F) { // f: 함수
    console.log('func02');
    f (); //함수호출
}

const temp1 = ()=>{
    console.log('temp()함수 호출');
}
const temp2 = ()=>{
    console.log('temp2()함수 호출 temp{}');
}

func02(temp1);
func02(temp2);


//콟백함수 callback 나중에/특정 시점에 실행할 함수

function reserve(name , callback){
    console.log("예약 종료 확인");
    console.log("예약 가능 여부 확인");
    console.log("예약 스케줄 조정");

    console.log( name +' 님 예약 가능확인 -> 예약 완료 처리');

    console.log('예약완료 안내');
    callback();
}

function sendMsg(){
    console.log('문자로 안내문자 전송')
}

reserve('김부장', sendMsg);

reserve('최이사' , function(){
    console.log('전화로 안내해주기');
})

reserve('강회장', ()=>{
    console.log('카톡안내메시지 전달')
});