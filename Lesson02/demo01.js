//布尔值
var isDone = false;
//错误示例
// let isBole: boolean = "字符创";
//数字
var decLiteral = 6; //十进制
var hexLiteral = 0xf00d; //十六进制——0x
var binaryLiteral = 10; //二进制——0b
var octalLiteral = 484; //八进制——0o
/**
 * 字符串
 * 1.可以使用双引号（ "）或单引号（'）表示字符串;
 * 2.还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
 *  */
//例一：
var str = "bob";
str = "smith";
//例二：
var name = "LMQ";
var age = 18;
var sentence = "Hello, my name is " + name + ".I'll be " + (age + 1) + " years old next month. " + (age > 18 ? '成年' : '未成年');
console.log(sentence);
//数组:里面的数据类型必须一致
var list1 = [1, 2, 'str']; //允许数组里面放置任何类型
var list2 = [1, 2, 3];
var list3 = [1, 2, 3];
//元组 Tuple:允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
var x;
x = ['hello', 10]; // OK
// x = [10, 'hello']; // Error
console.log(x[0]);
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型
console.log(x[3]);
//枚举:类似于数组，可以手动改变索引
// enum Color {Red, Green, Blue}
// console.log(Color)
// console.log(Color.Blue)
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
console.log(Color);
console.log(Color.Blue);
//Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
var list4 = [1, true, "free"];
list4[1] = 100;
/*Void:
   * 1.当一个函数没有返回值时，其返回值类型是 void;
   * 2.只能为它赋予undefined和null;
   * 3.默认情况下null和undefined是所有类型的子类型(然而，当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。);
*/
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
//Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//Object:除number，string，boolean，symbol，null或undefined之外的类型
//示例一：
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength, 222);
//示例二：报错Uncaught ReferenceError: string is not defined
// let someValue1: any = "this is a string";
// let strLength1: number = (someValue1 as string).length;
// console.log(strLength1,111) 
