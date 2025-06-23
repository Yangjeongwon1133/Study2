var a = '변수값';
//console.log(a) // print '변수값'

let b = 1
b = 2
//console.log(b) //변수 (변경가능)

const c = 5
//c = 10
//console.log(c) //상수 (변경불가)

let d = 10
//console.log(d, typeof d)
d = '문자'
//console.log(d, typeof d)

if(1 == 0) {
    //console.log('참')
}
else {
    //console.log('거짓')
}

/////////////////////////////////////

console.log("콜라, 사이다, 환타 중 하나를 주문하세요.")
음료 = '콜라'
금액 = 0
if(음료 == '콜라') {
    console.log('콜라를 선택하셨습니다.')
    금액 = 1000
}else if(음료 == '사이다') {
    console.log('사이다를 선택하셨습니다.')
    금액 = 1200
}else if(음료 == '환타') {
    console.log('환타를 선택하셨습니다.')
    금액 = 1500
}
console.log(음료 + '의 가격은 ' + 금액)