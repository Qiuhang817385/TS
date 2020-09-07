var getPersonName = function (person) {
    console.log(person.name);
};
var setPersonName2 = function (person, name) {
    person.name = name;
};
// 接口要求传递的是对象
var getPersonName3 = function (person) {
    console.log(person.name);
};
var setPersonName4 = function (person, name) {
    person.name = name;
};
var person = {
    name: 'qiu'
};
getPersonName3(person);
function sssP(x, y) {
    return x + y;
}
var sssP2 = sssP;
function getNameRes(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
var person4 = {
    name: 'qiu',
    age: 17,
    sex: 'man'
};
var getPersonName4 = function (person) {
    console.log(person.name);
};
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
// 通过变量方式传递,弱校验
getPersonName4(person4);
// ============================================================类+接口
var User = /** @class */ (function () {
    function User() {
        this.name = 'qiu';
    }
    return User;
}());
var syHi = function (word) {
    return word;
};
console.log('syHi()', syHi('hello'));
// function plus(a: number, b: number): IPlus {
//   return a + b
// }
var plus = function (a, b) {
    return a + b;
};
