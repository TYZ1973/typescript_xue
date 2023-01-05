var person = {
    age: 30,
    sex: 'male',
    sayHello: function () {
    }
};
//-------------------------------
var person1 = {
    age: 30,
    sex: 'male',
    sayHello: function (dada) {
        console.log(dada);
    }
};
//---------------------------------
var person2 = {
    age: 30,
    sex: 'male',
    sayHello: function (dada) {
        console.log(dada);
    }
};
function myAxios(config) {
    console.log(config);
}
myAxios({
    url: '',
    method: '' // method 可以省略， 
});
