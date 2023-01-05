

//普通 数值 number 类型
function fn(num1:number,num2:number):number{

        return num1+num2;
}

console.log(fn(2,3));


const fnn = (numm1:number , numm2:number) :number => {

    return numm1+numm2;
}

console.log(fnn(3,4));


//--------------------神经病复杂版

// const add=(nuu1,nuu2)=>{
//     return nuu1+nuu2;
// }

// (nu1:number , nu2:number)=> number 


const add:(nu1:number , nu2:number)=> number =(nuu1,nuu2)=>{
    return nuu1+nuu2;
}

console.log(add(5,6));
//---------------------------------------------没明白有啥用

// const add:(nu1:number , nu2:number)=> number =(nuu1:number,nuu2:number)=>{
//     return nuu1+nuu2;
// }

// console.log(add(5,6));


function vovo(name:string):void{
    console.log('void-void-void:',name);
    
}
vovo('what?')

//可选参数类型， 就是 有时候函数需要参数， 有时候不需要参数

function mySomething(start?:number , end?: number):void{
    
    console.log('kai:',start,'guan',end);
    
}
mySomething()
mySomething(5)
mySomething(5,6)