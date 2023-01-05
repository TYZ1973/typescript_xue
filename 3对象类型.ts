let person :{age:number ; sex:string;sayHello():void}={

    age:30,
    sex:'male',
    sayHello(){

    }
}
//-------------------------------
let person1 : {age:number ; sex:string;sayHello(dada:string):void}={

    age:30,
    sex:'male',
    sayHello(dada){
        console.log(dada);
        

    }
}
//---------------------------------

let person2 : {age:number 
               sex:string
               sayHello:(dada:string)=>void}={

    age:30,
    sex:'male',
    sayHello(dada){
        console.log(dada);
        
    }
}


function myAxios(config:{url:string ; method?:string}){

    console.log(config);
    
}

myAxios({
    url:'',
    method:'' // method 可以省略， 
})