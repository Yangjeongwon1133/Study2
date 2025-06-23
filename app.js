var a = '변수값';
console.log(a) // print '변수값'

let b = 1
b = 2
console.log(b) //변수 (변경가능)

const c = 5
//c = 10
console.log(c) //상수 (변경불가)

let d = 10
console.log(d, typeof d)
d = '문자'
console.log(d, typeof d)

if(1 == 0) {
    console.log('참')
}
else {
    console.log('거짓')
}