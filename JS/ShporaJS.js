/////////////////////������ ������/////////////////////////////////////

window.onload = function(){ // �������� �������� ���������
}
//'use strict'              // ������� �����
/////////////////////������ �������������� MVC/////////////////////////

var vies = {};// - �������������F
var model = {};// - ������
var controller = {};// - ����������
// 1.������������ ���������������� � �����������
// 2.���������� ����������� ������� � �����������
// 3.���������� ����������� ������ �� ����������� � �������� �� ������������
// 4.�������������� ������������� �� ������������

////////////////////////////////Var//////////////////////////////////////

var a = 'Zoom', // �������
    b = 3,      // �����
    c = false,  // ������� ��������
    d = '',     // ������ �����������
    v;          // ����������(�� ����� �������� ��� ����)
// 1. ��� ���������� ������� ����������
// 2. ���� ���������� ������������ � ������� �� ��� ���������.
// 3. ��� ��������� ��������� ���� � ������ ����� .js ����� window.onload = function(){};
var a = 5;
console.log(typeof a) // ���������� ������, ����������� ��� ��������


////////////////////////////�������� �� �����/////////////////////////////

// 1.NaN ������ ������ ���� ������ ����
// 2. isNaN ��������� true ���� ���������� �� �������� �� �����
isNaN("12") // ������ false

////////////////////////////�� ������ � �����/////////////////////////////

var a = "2", // ������
    b = +a;  // �����

parseInt() //��������� ������ � �������� ��������� � ����������
//����� ����� � ������������ � ��������� ���������� ������� ���������.
parseInt("15px", 10);//10 ��� ������������ ����� (�������� ����� ������������)
//��������� - 10
////////////////////////������������ � ����������� ��������///////////
Math.max(a, b, c)// ������� ���������� ������������ �������� �� ����������
alert( Math.max(1, 5, 2) ); // 5

Math.mix(a, b, c)// ������� ���������� ������������ �������� �� ����������
alert( Math.mix(1, 5, 2) ); // 1

/////////////////////���-��� � ��������////////////////////////////////

function foo(ip){}; // �������
foo();              // ����� �������
(function foo(ip){
    console.log(ip)
})('cocis');        // ��� ������ ��� ������� cocis ���������� ��������� ip,
                  // � ���� ������� � ������ ������ cocis
// 1. ��������� - ������� � ��� �� ������� ����������
// 2. ������������ ������� - ������� � �������. ������:
//                      function foo(){
//                                    function ggg(){};
//
//����������� (FunctionDeclaration)
//����������� ������� �������� ����� � ������� ���������
//function ���(���������) {
//...
//}
//��������� (FunctionExpression)
//var ��� = function(���������) {
//    �
//}
//
//��������� - �������� ������ � ������� ����������.


//////////////////////��������� ��������� �����///////////////////////////
Math.floor(Math.random() * 5); // - ���������� ��������� ����� �� 0 �� 4(������������)
//Math.random() - ���������� ��������� ����� �� 0 �� 1(�� ������� 1), �� ������� 0.123; 0.499
//Math.floor() - ����������� ������� ����� �� ���� 0.123 � 0; 4.999 � 4;
Math.ceil() // ���������� ���������� �����
// ������: �������������
Math.ceil(.95);   // 1
Math.ceil(4);     // 4
Math.ceil(7.004); // 8




/////////////////////////////������///////////////////////////////////////

// ������ �������� ��������� ����� ��������

var anyString = "������, ���"
console.log(anyString.charAt(0))         // ���������� ������ � ������,
                                         // � ���� ������� ������������ - �

var LowerText="������"
document.write(LowerText.toLowerCase()); // ���������� ������ ������� �������,
                                         // � ���� ������� ������������ ������
var upperText="������"
document.write(upperText.toUpperCase())  // ���������� ������ ������� �������,
                                         // � ���� ������� ������������ ������

var arr = [ 1, 2, 3, 4, 5 ];
arr.slice(2);                           // ������ ����� �� �������� �������� ������ ��� ������,
                                        // � ������ ���������� ��� �����.
                                        // ����� �������� - [3, 4, 5]
var str = "��� ������"
str.substring(0,3)                      // ���������� ����� ������, ��� ���������� ��������(����� ��� 3),
                                        // � ���� ������� ������������ ���
var str = "���� ��� ����";
str.replace("����","������");           // �������� ���� ����� ������,
                                        // � ���� ������� ������������ "������ ��� ����"
var str = "     Hello World!      ";
alert(str.trim());                      // ����� trim() ������� ���������� ������� � ������ � ����� ������,
                                        // � ���� ������� ������������ "Hello World!"
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);            // ��������� ������, ����� ���������� Hello World!"
                                        // ����� � ��������� �� ����
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);// ������� ������ ["a", "b", "c", 1, 2, 3];

var upperText="������"
document.write(upperText.toLowerCase()); // ���������� ������ ������� �������,
                                         // � ���� ������� ������������ ������ ������

split() //��������� ������ String �� ������ ����� ���� ���������� ������ ��������� ����������.
var data = ('London is a capitol of GB').split(' ');
console.log(data)
//����������    [ 'London', 'is', 'a', 'capitol', 'of', 'GB' ]

///////////////////////////////������� (��� �� �� ������)/////////////////

a = [1,2,45,12,5,34];
a[a.length -1];                          // ������ ��������� ������� �������
a.push(3);                               // ��������� � ����� ������� ������ ����� �������
for (var i = 0; i < this.numShip; i++) {
    var ship = this.a[i];
    var index = ship.location.indexOf(2); // ���������� �������� � �� ��� � ��������
};                                        // � ���������� ����� ��������� � ������� ��������,
                                          // � ���� ������� ������������ - 1
                          // ������� ��� �� � ��� �����
var array = [2, 5, 9];
array.indexOf(5);                         // �������� 1

var arr = ["���","���������", "������"]
var my = arr.shift() // �������� � �����������(� ������ ������ ���������� my)  �������� ������� � ��������, ����� => "���"
alert(arr[0]) // => "���������"
// ������ arr = ["���������", "������"]

myFish = ["angel", "clown", "mandarin", "surgeon"];// �������� �������� �������
popped = myFish.pop(); // ������ popped = "surgeon", a myFish = ["angel", "clown", "mandarin"]

var myArray = ['����', '���', '���']; //�� ����� �������� ������� ���������� ��������� �������.
myArray.reverse();                     // ������ ������� ������� ���������� ���������, � ��������� � ������.
console.log(myArray) // ['���', '���', '����']

arr.slice(start, end) // ������ ����� ������ � �������� � ���� �������� ������� arr �� start �� end.
                      //� ���� start � end �� �������, �� �������� ���� ������.
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

forEach()//��������� ��������� ������� ���� ��� ��� ������� �������� � �������.
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
// �������� �������� �� ������� �� ������� 2, ��� ��� ��������, ������� �� �� ����������
[2, 5, , 9].forEach(logArrayElements);
// ����:
// a[0] = 2
// a[1] = 5
// a[3] = 9

map() //������ ����� ������ � ����������� ������ ��������� ������� ��� ������� �������� �������.
var numbers = [1, 4, 9];
var doubles = numbers.map(function(index,elem) {
    return elem * 2;
});
// ������ doubles ����� [2, 8, 18], � numbers �� ��� ����� [1, 4, 9]

split() //��������� ������ String �� ������ ����� ���� ���������� ������ ��������� ����������.
var data = ('London is a capitol of GB').split(' ');
console.log(data)
//����������    [ 'London', 'is', 'a', 'capitol', 'of', 'GB' ]

/////////////////////////���� for, ������� �������/////////////////////////////

var a = [1,2,34,65,72,64];
for(var i = 0; i < a.length; i++){
    console.log(a[i]);
}
// length - ����� �������
// ��� ���� ������ ��������
var go = [1232,43,64,12,445,7]
for(var item in go){
    console.log(item);
    console.log(go[item])
}

 var foo = [10,4,6,2,4]
 function foof(a,b){
     if(a < b){
        return 1;
    } else if(a == b ){
        return 0;
   } else {
       return -1;
   }
  }
foo.sort(foof);  // ��������� �������� �������
                 // � ���� ������� ������������ [2,4,4,6,10]


////////////////////////////////���� while///////////////////////////////////////

a= 0;
while ( a < 3 ){
   a++;
    };
// ���� a < 3 ������ � + 1

do {
    locat = this.generetShip();  //������
} while (this.collision(locat)); // ����

////////////////////////////////���� in ///////////////////////////////////////

var Car = {
    a: 'Zoom',
    b: 34,
    c: function () {
        console.log(this.a); // �� �������� ��� this
    }
};
for(var prop in car){   // ���������� �������� ������� � ���������������
                        // �����������  ���������� prop
    console.log(prop + ':' + car[prop]);  //prop � ����������� �������� �����
                                         // ������������ ��� ��������� �������� ������
}

///////////////////////////////�������///////////////////////////////////////
// � ������� �� ������� ����� ������ �� ���������� ����������� ������ �� ������ ��� ��� ������
var Car = {
    a: 'Zoom',
    b: 34,
    c: function() {
        console.log(this.a); // �� �������� ��� this
    },
    fist: function() {
            var foo = document.getElementById('zero');
            foo.onclick = Car.touth.bind(Car); // ���������� ������� ��� ��������
        },                                     // ������� ������.������ �� ��������.bind(������)
    touth: function(eventObj){
        console.log('blabla');
    }
}
Car.d = false; // ���������� � ������ ��� ��������
delete Car.b;  // �������� �������� ������
Car.c();       // ����� �������� ������� � ��������
Car['a'];      // ���������� ������� ����� � ���
o = new Object();
o.prop = '����������';
o.hasOwnProperty('prop'); // ���������� ���������� ��������, �����������,
                          // �������� �� ������ ��������� ��������,
                          // � ���� ������� ������������ true
 var copy = Object.assign({}, obj)//������������ ��� ����������� �������� ���� ����������� �������������
                                  //������� �� ������ ��� ����� �������� �������� � ������� ������.
var obj = { a: 1 };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }


var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };
var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, ��������� � ��� ������� ������.


//object.set() - ������������� ��������
//object.get() - ���������� ��������
// ��� � ��� ����� ��� ���� ����� ���� ������������� � ���������� �������� ������� ��������
// �� � ��� ����� ������������� ������� ������� ����� ����������� ��� � ���
// ������ ������ � ��� � ���
var Car = {
    name: "lada",
    old: 5,
    get age(){
        return this.old
    },
    set age(value){     // ��� value ����������� ��� ���
        if(value < 0){
            this.old = 0
        } else if(value>18){
            this.old = 18
        } else{
            this.old = value;
        }
    }
}

Car.age = -2;
console.log(Car.age); //������ 0
Car.age = 20;
console.log(Car.age);//������ 18
Car.age = 15;
console.log(Car.age);//������ 15

///////////////////////////������������ ���������� �� ���������� � Object.create//////////////
// � js ���� ������ ���� ��� ������������ � ������ ������������ �� ����������

var obj1 = {
    name: "Kevin"
}

var obj2 = Object.create(obj1); //obj2 ��������� ��������  obj1

console.log(obj2.name); //Kevin

//////////////////////////����������� �������� ��������� � ������ ///////////////////////////////
// ������ 1
function Dog(name, old) {
    this.name = name;
    this.old = old;
    this.cons = function () {
        console.log('��� ������� - ' + this.name);
    }
}
  var Kevin = new Dog('Kevin','34'); // ���������� ������ Kevin


// ������ 2 �� ������

  function Car(p){
    this.name = p.name;
    this.model = p.model;
    this.god = p.old;
};
var Cadi = new Car({                 // ���������� ������ Cadi
    name: 'Cadi',
    model: 'Cadilac',
    old: '1999'
});

if(Cadi instanceof  Car) {            // ���������� true ���� ������ ��� ������ ��������� �������������
}

// ������ 3 ����� ����� ��������� � ������� Object.create

var Dog = {
    const: function (name, old) {
        this.name = name;
        this.old = old;
        return this;
    },
    say: function () {
        console.log("Ma dog " + this.name + " " + this.old);
    }
};


var Kevin = Object.create(Dog).const("Kevin", "12");

Kevin.say();


//������� ����� ����������� �������� �� ������ �������� ����� ��������� � �����������
function Dog(name, old) {
    this.name = name;
    this.old = old;
    this.cons = function () {
        console.log('��� ������� - ' + this.name);
    }
}
var Kevin = new Dog('Kevin','34');  // - �� � ���� �������� ���������� ������ Dog, �.�. ������

// ��� ������
    function Robot(name,old) {
        this.name = name;
        this.old = old;
    }
    Robot.prototype.toString = function(){ // �� �������������� ����� toString ���������� ��� Robot
                                            // (toString � toLocaleString ����������� �������� ������ � ������ � ������)
        return this.name + this.old
    }
    var Gavi = new Robot('Gavi','34');
    console.log(Gavi.toString());
// ����� - ��� ��������� ���� �������� ������� ��������� ���� �������� �� ���������
//.prototype ������ ������� ����� ��� �������� � ������� �������� �������� �������� �������� ����� ����������� ��� ������� �������
// ����� ����������� ��� ������ ������������, ���������� �� ������,

function Dog(name, old) {
    this.name = name;
    this.old = old;
    this.cons = function () {
        console.log('��� ������� - ' + this.name);
    }
}
var Kevin = new Dog('Kevin','34');  // - �� � ���� �������� ���������� ������ Dog, �.�. ������

Dog.prototype.say = function(){  // ������ Kevin ����� ������������ ������� .say,
    console.log("Gav");            // ���������� ���������  Kevin.say
}


////////////////////������� ���������� �������������//////////////////////////

////////////// ���������� ����� � ������ Dog2.prototype = new Dog1()
function Dog1(name,old,test1){
    this.name = name;
    this.old = old;
    this.test1 = function(){
        console.log('test1');
    }
}
function Dog2(test2){
    this.test2 = function(){
        console.log('test2');
    }
}
Dog2.prototype = new Dog1(); // ��� ����������� Dog2 ���������� �������� �� ����������� Dog1()(!!! ����������!!!)_


function Dog3(name,old,test3){
/*!!!!!!*/    Dog1.call(this,name,old); // ����� �� ������ this.name = name; this.old = old; ����� �� ������� �� Dog1
                                        // ���� ��� ����� ��������� Dog1.apply(this, arguments); � ����� �� ����������� name old
    this.test3 = function(){
        console.log('test3');
    }
}
Dog3.prototype = new Dog2(); // ��� ����������� Dog3 ���������� �������� �� ����������� Dog2
var Kevin = new Dog3('Kevin','34');
console.log(Kevin.constructor); // .constructor ��������� ����������� �����������
////////////////
/////////////�� ����������
Object.create // ������������ �� ������ ������������ � ��������

// 1. ����������� Animal
function Animal(name) {
    this.name = name;
    this.speed = 0;
}

// 1.1. ������ -- � ��������
Animal.prototype.stop = function() {
    this.speed = 0;
    alert( this.name + ' �����' );
}
Animal.prototype.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' �����, �������� ' + this.speed );
};
// 2. ����������� Rabbit
function Rabbit(name) {
    this.name = name;
    this.speed = 0;
}
// 2.1. ������������
Rabbit.prototype = Object.create(Animal.prototype);// ������������ �� ������ ������������ � ��������
                                                   // � ����� ������ Rabbit ��������� �� Animal
Rabbit.prototype.constructor = Rabbit;     // � prototype �� ��������� ������ ��������� �������� constructor, ����������� �� �������-�����������.
                                                //    � ���������, Rabbit.prototype.constructor == Rabbit. ���� �� ������������ ������������ ��� ��������,
                                                //    �� ��� ������ prototype ����� Object.create ����� ��� ���� ���������
                                                // ����� ������� ����� ����������� ��� ������ Rabbit � ��  Animal,
// 2.2. ������ Rabbit
Rabbit.prototype.jump = function() {
    this.speed++;
    alert(this.name + ' �������, �������� ' + this.speed);
}

////////��� ������� �� ������� � �����������



function Person(name){
    this.name = name;
}
Person.prototype.greet = function(){
    console.log("Hello my name is " + this.name)
}

function Developer(name){
    Person.apply(this, arguments)
}


Developer.prototype = Object.create(Person.prototype); // ��� ��� ���������� ������������
// �� ��� constructor(�� ����) ����� ��������� ��  Person ������� ����� ��������� ��� ���
Developer.prototype.constructor = Developer;

// �������� constructor  ����������� ���� �������� ��������� ��� ������
// ������������, ��� �� ���� � prototype, ��� ������� ��� js,


////////////////////////////////Object.function.call()/////////////////////////////////////
obj.func.call(this, arg1, arg2) // �����  call ��������� �� ����� ������ ���������� this


var greet = function(){
    var str = "Name is" + this.name
    return str
}

var OnePerson = {
    name: "jon",
    greet: greet
}
var TwoPerson = {
    name: "Bob",
    greet: greet

}
console.log(TwoPerson.greet.call(OnePerson))

// c �����������

var greet = function(elem){
    var str = elem + "Name is " + this.name
    return str
}

var OnePerson = {
    name: "jon",
    greet: greet
}
var TwoPerson = {
    name: "Bob",
    greet: greet
}
console.log(TwoPerson.greet.call(OnePerson, "hi! "))
////////////////////////////////Object.function.apply()/////////////////////////////////////
obj.func.apply(this, [arg1, arg2]) // �������� ���������� call, �� ��������� ������ ���������� ������ ������.

var greet = function(elem, elem2){
    var str = elem + elem2 + "Name is " + this.name
    return str
}

var OnePerson = {
    name: "jon",
    greet: greet
}
var TwoPerson = {
    name: "Bob",
    greet: greet
}
console.log(TwoPerson.greet.apply(OnePerson, ["hi","! "]))

////////////////////////////////Function.prototype.bind()/////////////////////////////////////
fun.bind(this) // ��������� ������� � �������� � ������� this , ��� ���� �� �� ��������� � �� ��������� ������� �
               // ���������� ����� �������

var greet = function(){
    var str = "Name is " + this.name
    return str
}

var OnePerson = {
    name: "jon",
    greet: greet
}

var bound = greet.bind(OnePerson)
console.log(bound())

////////////////////////////////Function.prototype.call()/////////////////////////////////////


fun.call(this, arg1, arg2)//  ����� �������  fun(��� ����� ���� �����������) ��� �������(��� ������������)
                          // ������� ����������� � this, ��� ���� �������� � fun ���������� ����������� �
                          // �������(��� ������������) ������� ����������� � this
////������ �������
function showFullName() {
    alert( this.firstName + " " + this.lastName );
}

var user = {
    firstName: "�������",
    lastName: "������"
};

// ������� ��������� � this=user
showFullName.call(user) // "������� ������"  � ����� ������� ������ user ���������� ���������� ��� showFullName

//// ������ ����� ������
var user = {
    firstName: "�������",
    surname: "������",
    patronym: "��������"
};

function showFullName(firstPart, lastPart) {
    alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(��������, ��������1, ��������2, ...)
showFullName.call(user, 'firstName', 'surname') // "������� ������"
showFullName.call(user, 'firstName', 'patronym') // "������� ��������"

///// ��� ������ ��� �������������
function Dog1(name,old,test1){
    this.name = name;
    this.old = old;
    this.test1 = function(){
        console.log('test1');
    }
}

function Dog3(name,old,test3){
    /*!!!!!!*/    Dog1.call(this,name,old); // ����� �� ������ this.name = name; this.old = old; ����� �� ������� �� Dog1
    this.test3 = function(){
        console.log('test3');
    }
}
// ��� ��� ������
function Product(name, price) {
    this.name = name;
    this.price = price;

    if (price < 0) {
        throw RangeError('������ ������� ������� ' +
            this.name + ' � ������������� �����');
    }
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = '���';
}

Food.prototype = Object.create(Product.prototype); // ���� ����� ��� � Food.prototype = new Product()
                                                   // �� ���� Food ���������� �������� �� Product/*!!/
var cheese = new Food('��������', 5);

  // /*!!/�� ���� ���������� ��� ����� �����������
function Food(name, price) {
    this.name = name;
    this.price = price;
    this.category = '���';
    if (price < 0) {
        throw RangeError('������ ������� ������� ' +
            this.name + ' � ������������� �����');
    }
}
//////////////////////////////������������ ���������� "arguments"/////////////////////////////

// ������ � ��������� ����� ����������� ����� ����������� ������ � ��� �������������� ����� �������-������ arguments.
function sayHi() {
    for (var i = 0; i < arguments.length; i++) {
        alert( "������, " + arguments[i] );
    }
}

sayHi("�����", "�������"); // '������, �����', '������, �������'
// �.�. ����� ������� ���������� ����������� arguments = ['�����','�������']
// �� arguments � ��� �� ������
//������
function sayHi() {
    var a = arguments.shift(); // ������! ��� ������ ������!
}

sayHi(1);

///////////////////////////////[].slice.call(arguments)///////////////////////////

//[].slice.call(arguments) //������� ������ ������� �� arguments ��������� ������.

function printArgs() {
    var args = [].slice.call(arguments);
    alert( args.join(', ') ); // args - ����������� ������ �� ����������
}
printArgs('������', '���', '���'); // ������, ���, ���

////////////////////////////////////Function.prototype.apply()/////////////////////

//����� ������� ��� ������ func.apply �������� ���������� func.call, �� ��������� ������ ���������� ������ ������.
func.apply(context, [arg1, arg2]);
// ������
  //  ���� ��� ���������� ������������

    function Animal(name) {
        this.name = name;
        this.speed = 0;
    }

    function Rabbit(name) {
        this.name = name;
        this.speed = 0;
    }
  //  ����� ������ �� ������� ���������� ����� ����� ������������ �������  �� Animal   � Rabbit
    function Animal(name) {
        this.name = name;
        this.speed = 0;
    }

    function Rabbit(name) {
        Animal.apply(this, arguments);
    }
// ��� ������


var user = {
    firstName: "�������",
    surname: "������",
    patronym: "��������"
};

function showFullName(firstPart, lastPart) {
    alert( this[firstPart] + " " + this[lastPart] );
}

// f.call(��������, ��������1, ��������2, ...)
showFullName.apply(user, ['firstName', 'surname'])// "������� ������"


//� ���������, ��� ��� ������� ��������� ���������:
showFullName.call(user, 'firstName', 'surname');// "������� ������"
showFullName.apply(user, ['firstName', 'surname']);// "������� ������"

// �������� �������� �� ��������� arr
var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);
alert( Math.max.apply(null, arr) ); // 5
//� �������� ��������� this ��� ������� null.
//�� � ������ ������ � �������� ��������� ����� ���������� ��� ������, ���������
//� ����� ���������� ���������� ����� Math.max �� ���������� this.
//�������������, ����� this, ���� ����� ����� ���� ������� ������������ �� ����������?

///////////////////////////////////////////����������� try�catch////////////////////////////

try {
    // ��� ...
} catch (err) {
    // ��������� ������
}
// ����������� ��� ������ ����� try.
//���� � ��� ������ ���, �� ���� catch(err) ������������,
//�� ���� ���������� ������� �� ����� try � ����� ������� ����� catch.
//���� � ��� ��������� ������, �� ���������� try �� ��� �����������
//,� ���������� ������� � ������ ����� catch(err).

//������ ��� ������: ��� ������� ��������� alert (1) � (2):
try {
    alert('������ ����� try');  // (1) <--
    // .. ��� ��� ������
    alert('����� ����� try');   // (2) <--
} catch(e) {
    alert('���� catch �� ������� ����������, ��� ��� ��� ������'); // (3)
}
alert("����� ��� ��������� ����������...");


//������ � �������: ��� ������� ��������� (1) � (3):
try {
    alert('������ ����� try');  // (1) <--
    lalala; // ������, ���������� �� ����������!
    alert('����� ����� try');  // (2)
} catch(e) {
    alert('������ ' + e.name + ":" + e.message + "\n" + e.stack); // (3) <--
}
alert("����� ��� ��������� ����������...");

///////////////////////////////////����������� Error////////////////////////////////////

new Error //������ ������ ������.
//������, �� ������� ������ Error � ���������� ��������� ������
//� ������� ��������� ����� throw. �� ������ ���������� ������ � ������� ����������� try...catch:
try {
    throw new Error('����!');
} catch (e) {
    alert(e.name + ': ' + e.message);
}
e.name //��� ������.
e.message //��������� ��������� � ������� ������.
e.stack //�����, ����� IE8-, ���� ����� �������� stack, ������� �������� ������
//� ����������� � ������������������ �������, ������� ������� � ������.

//� JavaScript ������� ��� ������������� ��� ����������� ������: SyntaxError, ReferenceError, RangeError

///////////////////////////////////�������� throw//////////////////////////////////////////

//�������� throw ���������� ������.
var data = '{ "age": 30 }'; // ������ �������
try {

    var user = JSON.parse(data); // <-- ���������� ��� ������ (JSON.parse ������ �� ������ ������ JSON)
    if (!user.name) {
        throw new SyntaxError("������ �����������");
    }
    alert( user.name );
} catch (e) {
    alert( "��������, � ������ ������" );
}



///////////////////��������������� ������ ���������� ��������/////////////////

// � ���� ������� �������������� �������� ������ �����
String.prototype.ooo = function(){
        var na = ['0'];
            var index = this.indexOf(na[0]);
            if (index == 0) {
                return true;
        }
        return false;
    }
var ff = 'fdgwdf0xcvxcv0000er';
    for (var i = 0; i < ff.length; i++){
        var fsss = ff[i];
        if(fsss.ooo()){
            console.log(fsss);
        }
    }
/////////////////////////////////JSON////////////////////////////////////////
// json - js object nutrision
var user = {
    name: "frank",
    id: 54351,
    toJSON: function(){   // ���� ���� ��� �������� �� JSON.stringify ����������� �
                          // JSON ������� �� ��� ���������� toJSON
        return {
            name: this.name
        }
    }
}

var jsonDATA = JSON.stringify(user); //��������������� ������ � JSON

var objectDATA = JSON.parse(jsonDATA);//���������������(������������)JSON � ������

//////////////////////////////////Date///////////////////////////////////////////

var date = new Date();

var date = new Date(1990,3,1);

var date = new Date(1990,3,1,24,22,345);

data.getMilliseconds(); // �����������
date.getHours();        // ����
date.getMinutes();      // ������
date.getSeconds();      // �������
date.getDay();          // ���� ������
date.getDate();         //���� ������
date.getMonth();        // �����
date.getYear();         //���
date.getFullYear();     // ������ ���
date.getTime();         //��� ������� � 1970
date.toTimeString();    //������ �����
date.toDateString();    // ������ ����
Date.now();             // ����� � ��������

//////////////////////////////////���������� ���������/////////////////////////
//    /��/�����    //������ ������� ������������� � ������������� ��� �����
//    []            // ������� ����������� � ������
//    /gl           // ������ ������ ����� �� ���� ������ � �� ������� ������
//    [aoeluy]/gl   // ��� �������
//    [A-Z]         // ��� ��������� ����� ��������  ���  "-"
//    [^A-Z]        // ^ �����, �.�. ��������� ������ ��������� ����
//    [0-9] ��� \d     // ��� ���� � ����
//    [^0-9] ��� \D    // ��� ���� � ����
//    \w            // ��� ����� � �����
//    \s            // ������ �������
//    \S            // ��� �� ������ �������
//    \ban\b        // ���� ��������� �� ����� �������������� an
//    \Ban\b        // ���� �������������� an � �����
//    |             // ���
//    \ban\b|\band\b  // ������ an � and ��� ��������� �����
//    ?             // �������������� ������ ��� �������� ����������
//    a....e  ��� a.{4}e     // ������ ��� ����� ������� ���������� �� � � ������������� �,
                       // � �� �������� 4 �����

//   a.*?e ��� a.+?e          // * ��� ���������� �� 0 � ������ ���
//   \.$             // ���� ����� � ����� ������
/////////////////////////////RegExp////////////////////////////////////////////
var pattern = new RegExp("\w+","g"); // ������ �������� ��� "\w+", � ������ ����
var pattern2 = /\w+/g;
var pattern3 = /\w+/;
var str = "xvj sdfgn sdfl asewk"
condole.log(str.match(pattern2))  // ������� ������ [xvj, sdfgn, sdfl, asewk]
condole.log(str.match(pattern3))  // ������� xvj � ������
condole.log(str.search(pattern3)) // ������ ������ ����������� ���� ������
//////////////////////////�������������� � HTML///////////////////////////////

document.getElementById('');         // �� id
document.getElementsByClassName(''); // �� class
document.getElementsByName('');      //�� �������� ������ � ���� ����������, ��� ������� � ������������ ����
                                     // ������������ ������� name: ��� form, input, a, select, textarea
document.getElementsByTagName('');   // �� ����: p, img, div, ul, li � � �
document.querySelector('');          // ���� ����� ��� ���������� �������� ��� id ��� � class ��� ������
                                     // ������ � ������ ����� ������ ����� ��� ������� ������ querySelector('.page_canvas')
var a = document.getElementById('foo');
    a.setAttribute('class', 'ufa');   // ���������� ��� ������� ��������� ��������� HTML,
                                     // � ������ ������ �������� ����������� �����  ufa
var b = document.getElementById('faa');
    g = b.getAttribute('class');     // ������ �������� �������� ��������,
                                     // � ������ ������ ����� ����� � �������� faa
    b.removeAttribute('class');      // ������� �������

var image = document.getElementsByTagName('img');
    image.src = "bls.jpg";           // ��������� � ������� src ������ �� ����
    elem.getBoundingClientRect();   // ���������� ������ �������� � ��� ������� ������������ ����.

children                             // � ������ �������� ����-��������, �� ���� ��������������� �����.
firstElementChild, lastElementChild  //� ��������������, ������ � ��������� ����-��������.
previousElementSibling, nextElementSibling //� ������-��������.
    parentElement                    //� ��������-�������.
element.style                        // ���������� ������, ������� ���� ������ � ����� �������� �� ������ � ������.
var a = document.getElementById('foo');
a.style.width="5px".                 // ����� ���������� ������ � 5��
    // �������� css ��� ���� �������� � js ������������� �
elem.style.backgroundColor
elem.style.zIndex
elem.style.borderLeftWidth
offsetWidth                           //������� ������ ����� (�.�. �� ����� ��������� � ����������),
offsetHeight                         //  ������� ������ �����.
elem.innerHTML                        // �������� �����
var div = document.createElement('div'); // ������� ����� ������� � ��������� �����
div.className ="success";             // ����������� �����
div.appendChild(elem);                // ��������� elem � ����� �������� ��������� div
                                      // ������
var newLi = document.createElement('li');
newLi.innerHTML = '������, ���!';
list.appendChild(newLi);

div.insertBefore(elem, nextSibling)   // ��������� elem � ��������� ����� parentElem, ����� ��������� nextSibling.
                                      // ������
var newLi = document.createElement('li');
newLi.innerHTML = '������, ���!';
list.insertBefore(newLi, list.children[1]);

parentElem.insertBefore(elem, null);
// �� ��, ��� �:
parentElem.appendChild(elem)

div.querySelector('li')                // ���������� ������ ������ �������. ���� ����� ����� ������������,
  // ����� �� �������� �����, ��� ���������� ������� ������ ����, � ����� �������� � ���������� ����� ���.
parentElem.removeChild(elem)          // ��������� � ������������ ��������  parentElem, ������� elem
parentElem.replaceChild(newElem, elem)// ����� ����� parentElem ������� elem � ��������� �� ��� ����� newElem.
                                   // ����������� ������� �� ����� �����
    //<div>������</div
    // <div>������</div>
var first = document.body.children[0];
var last = document.body.children[1];
// ��� ������������� � ��������������� removeChild(last)
document.body.insertBefore(last, first) // �������� �������

//�����
//������ ��� �������� �����:
document.createElement(tag) // ������� �������
document.createTextNode(value) // ������� ��������� ����
elem.cloneNode(deep) // ��������� �������, ���� deep == true, �� �� ����� ���������, ���� false � ��� ��������.


// ������� � �������� �����:
parent.appendChild(elem)
parent.insertBefore(elem, nextSibling)
parent.removeChild(elem)
parent.replaceChild(newElem, elem)
elem.remove()   // - �������� �������� ��������
/////////////////////////////����������� �������////////////////////////////////

// ����� ����� �������� �������� �� .target � .id � �� �������� ������� blabla(����� eventObj)
var foo = document.getElementsByClassName('zero');
    for (var i = 0; i < foo.length; i++) {
        foo[i].onclick = function (eventObj) { // ��� ��������� �������
                                               // �������� ������� blabla(����� eventObj) �����������
            var img = eventObj.target,         // �������� target ���������� ����� ������� ������������ ������ �������
                name = img.id;                 // ���������� �������� id ��������
        };
    }
var button = document.getElementsByClassName('depo');
button.addEventListener('click', function(){}, false); // ��� ���� ������ ���������� ����������� �������
                                                       // �ddEventListener() �������� ��� �������(�� ������� ������ ������ on),
                                                       // ������� � ��������(false - ����� ��� ��� �������� ���� ������� - ������ �����)
button.removeEventListener('click', function(){})      // ��������  ����������� �������

function reblur(img){
    console.log('blabla');
}
setTimeout(reblur, 1000, img); // �������� � 1 �������, ����� ����������� �������, � �������
                               // ���������� �������� img(����� � ��� ����)
function ulo(){
    console.log('blabla');
}
/// � �����//
function animate() {
    for (i = 0; i <= 10; i++) {
        (function(m) {
            setTimeout(function() {
                document.write(m);
            }, 100 * (i + 1))
        })(i);
    };
}
animate();
//////////


setInterval(ulo, 1000);        // �������, ������� ����������� ������ ������ �������
// ������ ������� � ���������� 2 ���
var timerId = setInterval(function() {
    alert( "���" );
}, 2000);

// ����� 5 ��� ���������� �������
setTimeout(function() {
    clearInterval(timerId);
    alert( '����' );
}, 5000);

var t = this;
this.op = setInterval(function(){t.setIn()}, 1000); // setInterval � �������
clearInterval(this.op);                              // clearInterval � �������

//////////////////////////performance.now()///////////////////

Performance.now()  //�����������, ����������� � ��������

var t0 = performance.now();  //������������� ����� � ������������
doSomething();               //������ ���������
var t1 = performance.now();  //������������� ����� ����� � ������������
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")// ������� �� ��� ����� ���������

//////////////////requestAnimationFrame(step);/////////////////////////
requestAnimationFrame(step) // ��� ��������� setTimeout, setTimeout ����� ����������� �� ������� � ��
                            // �������� �������� �� ����������������� ��������, � requestAnimationFrame ����� ��� � ����
//������ ������������ �������

//������� ���������� ������� �������, ������� �� ����������, ����� ��������� ��������:

var step = function(){
    // ��������� ���� ���
}

setInterval(step, 100); // ��������� ��� ����� ������ 0.1�

//��� ���:


var step = function(){
    setTimeout(step, 100); // ���������� ��������� ���� ���� �� �����, ������� ������� ���� �� ����
    // ��������� ���� ��� ���
}
step(); // ��������� ��� � ������ ���

//������� ������

//������� ���������� � ��������� �������� 1000ms / 60(fps) = 16.7ms

//�.�.

setInterval(step, 17);

// � ��� requestAnimationFrame

function step() {
    requestAnimationFrame(step);
    // ��������� ���� ����������� ���
}
step();
//�� �� ������� ��������. ��� ����� ���� ���������� ���� �������? ��� ������� ��
// ������� ������ ������ �������� � ���������� (������ ��� 60 ������ � �������)

//��� ������� �� ������ �������� ��� ���� �������� � ����������� �������:
requestAnimationFrame(step, element);

///////////////////////��������������\\\\\\\\\\\\\\\\\\\\\\\\\\
var frr = document.getElementById('z��');
    frr.onmousemove = function(ooo) {
        var a = ooo.pageX, // �������� � �������� �� ������ ���� �������� ��������
            b = ooo.pageY; // �������� � �������� �� �������� ���� �������� ��������
        console.log(a + "," + b);
    }
// ��� ����, �� � �� �� ������������
 // offsetX offsetY - ������ ����
// clientX clientY - �������� � �������� �� ������ �������� ���� ���� ��������
// screenX screenY - �������� � �������� �� ������ �������� ���� ����������������� ������
offsetParent              // � ��������� �� ������ ���������� � ��������� ������ �������,
                         // body ��� ������������ ���������������� ��� ��������� �����������������
                         // ������� ��� ������ ����� ����������������.
offsetLeft/offsetTop     // � ������� � �������� ������ �������� ���� �����,
                         // ������������ ��� offsetParent.
offsetWidth/offsetHeight // � ��������� ������/������ �����, ������� �����.
clientLeft/clientTop      //� ������ ������� ����������� �� ������-�������� ���� ��������.
                         // ���� ������������ ������� ����������� ������������ ��������� ������,
                         // �� ����� ������� �����/������� �����, ���� �� �����,
                         // �� clientLeft �������� � ���� ���������.
clientWidth/clientHeight // � ������/������ ����������� ������ � ������ padding,
                         // �� ��� ������ ���������.
scrollWidth/scrollHeight //� ������/������ �����������, ������� �������������� �������.
                        // �������� � ���� padding � �� �������� ������ ���������.
scrollLeft/scrollTop    //� ������/������ ������������ ����� ���������, ���������
                        // �� �������� ������ ����.
var gInput = document.getElementById('InputText'),
    getIn = gInput.value;        // ����� �������� �� INPUT, TEXTAREA
var Inpu = document.getElementById('InputText'),
    gIn = Inpu.value,
    Pi = parseInt(gIn );         //  ��������� ������ � �������� ��������� � ���������� ����� �����

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//���������  //  �������������� HTML-�������� //      ��������                                            //
//�������    //                               //                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onClick	 //   ��� HTML-��������	          //      ��������� ������ (������ � �������� ������ ����)    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onAbort	 //  IMG	                      //      ���������� �������� �����������                     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onBlur	 //  A, AREA, BUTTON, INPUT, LABEL//                                                          //
//           //    SELECT, TEXTAREA	          //      ������ ������� ��������� ������, �.�.               //
//           //                               //      ������� � ������� ��������.                         //
//           //                               //      ��������� ��� ������ ����� ��� ��������             //
//           //                               //      ���� ������� ������� ���������                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onChange	 //   INPUT, SELECT, TEXTAREA	  //      ��������� �������� ��������� �����.                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onDblClick //	  ��� HTML-��������           //      ������� ������                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onError	 //   IMG, WINDOW	              //      ������������� ������ ���������� ��������            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onFocus	 //  A, AREA, BUTTON, INPUT,      //                                                          //
//           //   LABEL, SELECT, TEXTAREA     //      ��������� ��������� ������                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onKeyDown	 //    ��� HTML-��������          //      ������ ������� �� ����������                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onKeyPress //	��� HTML-��������	          //      ������ � �������� ������� �� ����������             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onKeyUp	 //   ��� HTML-��������	          //      �������� ������� �� ����������                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onLoad	 //   BODY, FRAMESET	          //      ��������� �������� ���������                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMouseDown//	��� HTML-��������	          //      ������ ������ ���� � �������� �������� ��������     //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMouseMove//	��� HTML-��������	          //      ����������� ������� ���� � �������� �������� �������//
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMouseOut //	� ��� HTML-��������           //  	  ������ ���� ������� �� ������� �������� ��������    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMouseOver//	 ��� HTML-��������            //      ������ ���� ������� �� ������� �������              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMouseUp	 //   ��� HTML-��������	          //      �������� ������ ���� � �������� �������� ��������   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onMove	 //  WINDOW	                      //      ����������� ����                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onReset	 //  FORM	                      //      ����� ������ ����� ( ������ �� ������               //
//           //                               //        <input type="reset"> )                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onResize	 // WINDOW	                      //      ��������� �������� ����                             //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onSelect	 // INPUT, TEXTAREA	              //      ��������� ������ � ������� ��������                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onSubmit	 // FORM	                      //      �������� ������ ����� ( ������ �� ������            //
//           //                               //       <input type="submit"> )                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//onUnload	 // BODY, FRAMESET	              //      ������� �������� ���� �������� � �������� ��������� //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////��� �������� ������//////////////////////////////////


//     accept
//������������� ������ �� ���� ������, ������� �� ������ ��������� ����� ���� �������� ������.
//    accesskey
//������� � �������� � ������� ���������� ������.
//    align
//���������� ������������ �����������.
//    alt
//�������������� ����� ��� ������ � ������������.
//    autocomplete
//�������� ��� ��������� ��������������.
//    autofocus
//������������� ����� � ���� �����.
//    border
//������� ����� ������ �����������.
//    checked
//�������������� �������������� ������������� ��� ������.
//    disabled
//��������� ������ � ��������� ��������.
//    form
//��������� ���� � ������ �� � ��������������.
//    formaction
//���������� ����� ����������� �����.
//    formenctype
//������������� ������ ����������� ������ ����� ��� �� �������� �� ������.
//    formmethod
//�������� �������� ����� ������� ������� ���������� ������ ����� �� ������.
//    formnovalidate
//�������� ���������� �������� ������ �� ������������.
//    formtarget
//���������� ���� ��� ����� � ������� ����� ����������� ���������, ������������ ������������ �����.
//    list
//��������� �� ������ ���������, ������� ����� �������� ��� ����� ������.
//    max
//������� �������� ��� ����� ����� ��� ����.
//    maxlength
//������������ ���������� �������� ����������� � ������.
//    min
//������ �������� ��� ����� ����� ��� ����.
//    multiple
//��������� ��������� ��������� ������ ������������.
//    name
//��� ����, ������������� ��� ����, ����� ���������� ����� ��� ��� ����������������.
//    pattern
//������������� ������ �����.
//    placeholder
//������� �������������� �����.
//    readonly
//�������������, ��� ���� �� ����� ���������� �������������.
//    required
//������������ ��� ���������� ����.
//    size
//������ ���������� ����.
//    src
//����� ������������ ����� ��� ���� � ������������.
//    step
//��� ���������� ��� �������� �����.
//    tabindex
//���������� ������� �������� ����� ���������� � ������� ������� Tab.
//    type
//�������� ��������, � ������ ���� ��������� ������� �����.
//    value
//�������� ��������.
/////////////////////��� ���� type//////////////////////////////////////
button	//������.
checkbox //������. ��������� ������� ����� ������ �������� �� ������������.
file	//���� ��� ����� ����� �����, ������� ������������ �� ������.
hidden	//������� ����. ��� ����� �� ������������ �� ���-��������.
image	//���� � ������������. ��� ������� �� ������� ������ �����
// ������������ �� ������.
password //������� ��������� ����, �� ����������
// �� ���� ���, ��� ��� ������� ������������ �����������.
// ������������� ��� ����, ����� ����� �� ��������� �������� ������.
radio	//�������������. ������������, ����� ������� ������� ����
// ������� �� ���������� ������������.
reset	//������ ��� ����������� ������ ����� � �������������� ��������.	��������
submit	//������ ��� �������� ������ ����� �� ������.	���������
text	//��������� ����. ������������� ��� ����� �������� � ������� ����������.

//////////////////////� HTML5 ��������� ����� ��������///////////////////////
color	//������ ��� ������ �����.
date	//���� ��� ������ ����������� ����.
datetime//	�������� ���� � �������.
datetime-local//	�������� ������� ���� � �������.
email	//��� ������� ����������� �����.
number	//���� �����.
range	//�������� ��� ������ ����� � ��������� ���������.
search	//���� ��� ������.
tel	     //��� ���������� �������.
time	//��� �������.
url	   //��� ���-�������.
month	//����� ������.
week	//����� ������.


/////////////////////////////CANVAS////////////////////////////////


var example = document.getElementById("example"),
    ctx     = example.getContext('2d');                // ��� ����������� ������, ����������� ������ ������ � ������
                                                      // � HTML ����������� ������
                                                      // <canvas height='320' width='480' id='example'>�������� �������</canvas>
/////////////////////////////��������������////////////////////////////////

strokeRect(x, y, ������, ������) // ������ �������������
fillRect(x, y, ������, ������)   // ������ ����������� �������������
clearRect(x, y, ������, ������)  // ������� ������� �� ������ ������ � ������������� ��������� �������
beginPath()                      //  ������������ ��� �� �������� ����� �������� ����������� ��������� ������.
closePath()                      //  �������� �� ������������ ��������� � �� ���� ��� �������� ��������� ���������
stroke()                         // ������� ������ �������
fill()                           // �������� ������ �������� ������

moveTo(x, y) // ���������� "������" � ������� x, y � ������ � �������
lineTo(x, y) // ���� ����� �� ������� ������� � ���������, � ������ � ����������� ��������� �������
arc(x, y, radius, startAngle, endAngle, anticlockwise) // ��������� ����, ��� x � y ����� ����������,
             // ����� ��������� � �������� ����, ��������� �������� ��������� �����������
//////////////////////////////////����//////////////////////////////////////
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI*2, false);// (����� �������� �, ����� �������� �, ������,��������� ���� ����������;
                                            // �������� ���� ����������;
                                            // ����������� ���������� (false � �� ������� �������) )
ctx.fill()

/////////////////////////////��������� ������////////////////////////////////
var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
example.height = 480;
example.width  = 640;
ctx.beginPath();
ctx.arc(80, 100, 56, 3/4 * Math.PI, 1/4 * Math.PI, true);
ctx.fill(); // *14
ctx.moveTo(40, 140);
ctx.lineTo(20, 40);
ctx.lineTo(60, 100);
ctx.lineTo(80, 20);
ctx.lineTo(100, 100);
ctx.lineTo(140, 40);
ctx.lineTo(120, 140);
ctx.stroke(); // *22
// � ������ 14 ���������� ������ ����, � ������ 22 ��������� ������ ����� ������.

fillStyle = color   // ���������� ���� �������
strokeStyle = color // ���� ����� ���� �������� ����� ��� �� ��� � css,
                    // �� ������� ��� ������ ������� ������� �����
ctx.fillStyle = "orange";
ctx.fillStyle = "#FFA500";
ctx.fillStyle = "rgb(255,165,0)";
ctx.fillStyle = "rgba(255,165,0,1)"

/////////////////////////////��������� ��������� �����////////////////////////////////

var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
ctx.beginPath();
example.height = 480;
example.width  = 640;
ctx.strokeStyle = '#B70A02'; // ������ ���� �����
ctx.strokeRect(15, 15, 266, 266); // ������� �����
ctx.strokeRect(18, 18, 260, 260); // ��������� �����
ctx.fillStyle = '#AF5200'; // ������ ���� ������
ctx.fillRect(20, 20, 256, 256); // �������� ������� ����� ��� �������� ������
for (i = 0; i < 8; i += 2)
    for (j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);

    }
///////////////////////������ ������� ����� ��������� � �� ��������������������////////
imgh.addEventListener('change', imgWH, false)

function imgWH(){
    canvas.width = canvas.width; /// - ��� ������
    ctx.drawImage(img, 0,0, imgw.value,imgh.value);
}
/////////////////////////////�����������////////////////////////////////

var example = document.getElementById("example"),
    ctx       = example.getContext('2d'),               // ��������
    pic       = new Image();                           // "������" �����������
pic.src    = 'http://habrahabr.ru/i/nocopypast.png';  // �������� �����������, �������������� �� �����
pic.onload = function() {                            // ������� onLoad, ��� ������� ���� ���������� �����������
    ctx.drawImage(pic, 0, 0);                       // ������ ����������� �� ����� � ������������ 0, 0
}
drawImage(image, x, y, width, height)  //  ��������� width, height ������ ������ � ������ �����������
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);// ������ �������� ��������� �� �����������
// sx, sy, sWidth, sHeight ��������� ��������� ��������� �� �����������-���������
// dx, dy, dWidth, dHeight ������������ �� ���������� ��������� ��������� �� ������
getImageData(sx, sy, sw, sh)// ����� ���������� ������ � ����� (RGB)
                            // � ������������ ���������� ������� ������.
                            //sx � sy � ���������� ������ �������� ���� ��������������;
                            //sw � ������ �������;
                            //sh � ������ �������.
//������ ��������� ���������� �������� �������� 4xswxsh, ���� ������� ����� �������� 4 �����
// (��������, �������, �������, �����-�������� ������������ )
// ������� ������ � ������ �������� �� 4, data.length, �� ���� ����� ����� �������� ��� �����
// ������� ���������� ����� ������� ����� � ����� � 4 ������:
var imgData = ctx.getImageData(0,0,800,480)// ����� �����
for(var i =0; i < imgData.data.length; i+=4){ // ����� ������ �������(������ �������� ���
                                             // ��� i+=4 ��� ��� � imgData.data.length ��� �����)
// ��� ��� ����������  �� �������
    for(var j = i; j< i+3; j++){
        imgData.data[j] = 255 - imgData.data[j]; // ������
    }
// ��� ��� ������������. ��������  �����-�������� ������������
    for(var i =3; i < imgData.data.length; i+=4) {
        imgData.data[i] =  imgData.data[i] - 50;
    }
}


putImageData // �������� �� ����� ������ imageData (�������� RGBA ����������).
//���������
putImageData(imageData, x, y , dX, dY, dWidth, dHeight)
imageData// � ������, ��������� � ������� ������ createImageData()
            // ��� ���������� � ������� getImageData().
    x,  y // � ���������� ������ �������� ���� ������������
         // �� ������ ������� ������������ ������;
dX, dY // � ���������� ������ �������� ���� ������������
       // ����������� � imageData, �� �������� ����� �������������� ������� �����������;
dWidth, dHeight //� ������� ������������ �������
                // (���������� ����� �����������, ������� �� ��������� � ��� �������).
createImageData //- ������� ������ imageData.
    //���������
    createImageData(width, height)
width, height // � ������� ������������ �������
//����������� ����� ������ imageData � RGBA = (0,0,0,0) � �������� width x height


//////////������:
var imgData = ctx.createImageData(50,50); // ������ ������� 50 x 50 ��������� ����������
for(var i=3;i<imgData.data.length;i+=4) {
    imgData.data[i] = 255; // ������ ��� �� ���������
}
ctx.putImageData(imgData, 20,20); // ������� �����������

/////////////////////////////text////////////////////////////////

ctx.fillText(text, x, y); // ������ (��������) ��������� ����� � �������� ������� (x, y).
                          // ���� ������ �������������� ��������� ��������, ����� �����
                          // ���������������� � ��������������� � ��������� ������������ ������� [, maxWidth]

fontSize = width/2;
ctx.font = fontSize + "px Arial"; // ����� ����������� �����������, ����� Arial
ctx.fillStyle = 'white';
ctx.textAlign = "center";
ctx.fillText(cell.value, cell.x + width / 2, cell.y + width / 2 + width/7);
/////////////////////////////gradient////////////////////////////////

// Create gradient
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Big smile!", 10, 90);



////////////////////////////////������ � ������� � JavaScript,///////////////////////////

//��� File ��������� � ������������ File API[1] � �������� ����������� �������������� �����. ������ ��������� File ����� ��������� ��������:
//name � ��� �����
//size � ������ ����� � ������
// type �  MIME ��� �����

// ������
var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () { // ����� ���������� ��������� ��������� ����������, ������ ��������� ����� �����
    var file = fileimg.files;
    console.log(file);
    console.log("Filename: " + file[0].name);
    console.log("Type: " + file[0].type);
    console.log("Size: " + file[0].size + " bytes");
}

// // ������
var fileimg  = document.getElementById("your-files");
fileimg.addEventListener("change", function(event) {
    // ����� ���������� ��������� ��������� ����������, ������ ��������� ����� �����
    var files = fileimg.files;


    for (var i=0; i < files.length; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }

}, false);


/////////////////////////////////////////////FileReader///////////////////////////




var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () {
    var file = fileimg.files[0];  //��� ��������� FileList, ������� ������������ ����� ��������� � ����
    //������� ��� ��������� FileList ���������� ������� ���� File ���
    // ������� ���������� ����� � ���� <input type="file">
    // +FileList
    //Filename: 2012-������� SQL.pdf
    // Type: application/pdf
    //Size: 16507347 bytes

    var reader = new FileReader();  //   FileReader ����� ������������ ������ �� �����,
    // ������ ������ ���� �����, ����� ���� ����������� ��� ������.
    // ������ �������������� � ������� ������ ������ �� ��������� �������:
    //readAsText()  � ���������� ���������� ����� ��� plain text
    //readAsArrayBuffer() � ���������� ���������� ����� ��� ArrayBuffer
    // (������ ��� �������� ������, ��������, �����������)
    //readAsDataURL() � ���������� ���������� ����� ��� data URL

    reader.onload = function (event) {
        var contents = event.target.result;  //��������� ������ ������ ������������ ��� event.target.result
        console.log("rrrr " + contents);
    };

    reader.onerror = function (event) {
        console.error(event.target.error.code);
    };
    reader.readAsText(file)
}
//////////////��� ������  and readAsText() //////////////

var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () {
    var file = fileimg.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var contents = event.target.result;
        console.log("rrrr " + contents);
    };
    reader.onerror = function (event) {
        console.error(event.target.error.code);
    };
    reader.readAsText(file)
}


//////////////readAsDataURL()//////////////////

var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () {
    var file = fileimg.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var dataUri = event.target.result,
            img = document.createElement("img");
        img.src = dataUri;
        //document.body.appendChild(img);
        console.log(img);
    };

    reader.onerror = function (event) {
        console.error("���� �� ����� ���� ��������! ��� " + event.target.error.code);
    };

    reader.readAsDataURL(file);

}
//////////////readAsDataURL()  canvas//////////////////
var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () {
    var file = fileimg.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var dataUri = event.target.result,
            context = document.getElementById("mycanvas").getContext("2d"),
            img = new Image();

        // �����, ���� ����������� �� ����� ��������� ����������
        img.onload = function () {
            context.drawImage(img, 100, 100);
        };
        img.src = dataUri;
    };

    reader.onerror = function (event) {
        console.error("���� �� ����� ���� ��������! ��� " + event.target.error.code);
    };

    reader.readAsDataURL(file);
}
///////////////���� ����� ������� ���������:////////

loadstart     //� ��������� ��� ������� �������� ������ �������.
              // ��� ������� ������ ����������� ������
progress      //� ����������� ��������� ��� �� ���� �������� ������,
// ���� ������ � ������������� ������
error         //�  ����������� ����� �������� ���������� ��������
abort        //� ����������� ����� �������� ������ ���� �������� ������� ������ abort()
             // (����� ����� ���� � � XMLHttpRequest).
load         //� ����������� ������ �����, ����� ��� ������ ���� ������� ���������
loadend      //� �����������, ����� ������ �������� �������� ������.
// ������ ����������� ����� error, abort ��� load.
////////////////progress �� �����////////////
//����� �� ������ ��������� �������� ������ ������,
// ����������� ������� progress. ������ event ������� �������� ���������� �����
// ������� �������� 3 ����, ��� �������� ������������ ������

lengthComputable //� ��� boolean ��������� ����� �� ������� ���������� ������ �����
loaded           //� ����� ������ ������� ��� ���������
total            //� ����� ���������� ������ ������� ����� ���������


// ������
var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function () {
    var file = fileimg.files[0];
    var reader = new FileReader();

    reader.onprogress = function(event) {
        if (event.lengthComputable) {
            console.log(event.total);
            console.log(event.loaded);
        }
    };

    reader.onloadend = function(event) {
        var contents = event.target.result,
            error = event.target.error;
        if (error != null) {
            console.error("File could not be read! Code " + error.code);
        } else {
            console.log("Contents: " + contents);
        }
    };

    reader.readAsText(file);
}

///////////////////��� ������ �������� �������� � ������//////////////
var fileimg = document.getElementById('header_option-file');
fileimg.onchange = function(){
    var file = fileimg.files[0],
        reader = new FileReader();
    reader.onprogress = function(e){
        if(e.lengthComputable) {
            console.log(e.loaded)
        }
    }
    reader.onload = function(e){
        var resalt = e.target.result,
            can = document.getElementById('canvas-font').getContext("2d"),
            img = new Image();
        img.onload = function (){
            can.drawImage(img, 0 ,0, 800, 480);
        }
        img.src = resalt;



    }
    reader.onerror = function(e){
        console.error("���� �� ����� ���� ��������! ��� " + event.target.error.code);
    }
    reader.readAsDataURL(file);

}
///////////////////��� ������ ���� ��������//////////////
var fileimg = document.getElementById('header_option-file'),
    arfile = [];

fileimg.addEventListener("change", function(event) {
    var reader = new FileReader(),
        file = fileimg.files,
        n = 0;
    reader.onload = function(e){
        var result = e.target.result;

        arfile.push(result);

    }
    function pop(){
        if(arfile.length >= 3){
            var filecan = document.getElementById('canvas-font').getContext('2d');
            var img = new Image();
            img.onload = function(){
                filecan.drawImage(img, 0, 0, 800, 480);
            }
            img.src = arfile[n];
            n++;
            if (n == 3) {
                n = 0;
            }

        }

    }
    setInterval(pop, 1500);
    reader.readAsDataURL(file[0]);
}, false);
////////////////////////////����������������� ������////////////////////////////
var fileimg = document.getElementById('header_option-file'),
    arfile = [],
    div = document.getElementById('page_canvas'),
    n = 0,
    t = 0;
fileimg.addEventListener("change", function(event) {
    var reader = new FileReader(),
        file = fileimg.files;
    reader.onload = function(e){
        if (div.children.length <= 2) {
            var result = e.target.result,
                can = document.createElement('canvas');
            can.width = 350;
            can.height = 200;
            can.setAttribute('class', 'ufa');
            can.setAttribute('id', 'ufa' + n);
            div.appendChild(can);
            arfile.push(result);
            var canufa =  document.getElementById('ufa' + n).getContext('2d'),
                img = new Image();
            img.onload = function(){
                canufa.drawImage(img, 0, 0, 350, 200)
            }
            img.src = arfile[n];
            n++;
            pop();
        }
    }
    function pop(){
        if(arfile.length > 2){
            var  headerfile = document.getElementById('header_option-file'),
                img = new Image(),
                can = document.createElement('canvas');
            headerfile.setAttribute('disabled', '0');

            for(var i = 0; i < 3; i++ ){
                (function(a){
                    setTimeout(function(){
                        var ufa =  document.getElementById('ufa' + a);
                        ufa.remove();
                        if(a == 2){
                            foo();
                        }
                    },1000 * (i + 1))
                })(i)
            }
            can.width = 1080;
            can.height = 600;
            can.setAttribute('id', 'canif');
            div.appendChild(can);
            function foo(){
                setInterval(function(){
                    canif = document.getElementById('canif').getContext('2d');
                    img.onload = function(){
                        canif.drawImage(img, 0, 0, 1080, 600);
                    }
                    img.src = arfile[t];
                    t++;
                    if (t == 3) {
                        t = 0;
                    }
                }, 1000);
            }
        }
    }
    reader.readAsDataURL(file[0]);
}, false);
/////////////////////////////////////�������������//////////////////////////////////////////
function handl(arr ,classNam){
    for(var i = 0; i<arr.length; i++) {
        arr[i].onmousedown = handeler(arr[i], classNam, arr);
    }
    function handeler(e,classNam, arr){
        return function() {
            for (var a = 0; a < arr.length; a++) {
                arr[a].removeAttribute('class');
            }
            e.setAttribute('class', classNam)
        }
    }
}


///////////////////// new Image();//////////////////////////////////////////////

img = new Image(); //  ��� ������ � ������������� � JavaScript ������������ ������ Image
img.src = "http://bezrulya.ru/images/catalog/12000/12697.jpg";
img.width = 100;
img.height = 100;

// ������
    var img = new Image(100, 200); // ����� ��� �������������� ���������: ������ � ������:
    img.src = 'picture.jpg';
    console.log(img);

// <img width="100" height="200" src="picture.jpg">


// ������
    var pictures = [];
    for (var i = 0; i < 3; i++) {
        pictures[i] = new Image()
        if (i == 0) pictures[i].src = "/pictures/it/javascript/3.gif"
        if (i == 1) pictures[i].src = "/pictures/it/javascript/2.gif"
        if (i == 2) pictures[i].src = "/pictures/it/javascript/1.gif"
    }
    var n = 0;

    function scroll_image() {
        document.images[0].src = pictures[n].src;
        n++;
        if (n == 3) {
            n = 0;
        }
    }
    setInterval(scroll_image, 1500);

////////////////////////��������� ����� ��������� �� JavaScript/////////////////////////

(function(window, undefined) {
    'use strict';               // �������� ������� �����
    var myPlugin = {};
        // ��� ���

    // ����������� �������������
        var oldGlobalVar = window.myPlugin;
    myPlugin.noConflict = function () {
        if (window.myPlugin === myPlugin) {
            window.myPlugin = oldGlobalVar;
        }
        return myPlugin;
    };
        // ���������� ���������� ����������
    window.myPlugin = myPlugin;
})(window);