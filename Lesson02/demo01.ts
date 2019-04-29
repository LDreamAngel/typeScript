//布尔值
    let isDone: boolean = false;
    //错误示例
    // let isBole: boolean = "字符创";

//数字
    let decLiteral: number = 6;//十进制
    let hexLiteral: number = 0xf00d;//十六进制——0x
    let binaryLiteral: number = 0b1010;//二进制——0b
    let octalLiteral: number = 0o744;//八进制——0o

/**
 * 字符串
 * 1.可以使用双引号（ "）或单引号（'）表示字符串;
 * 2.还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
 *  */

    //例一：
    let str: string = "bob";
    str = "smith";   

    //例二：
    let name: string = `LMQ`;
    let age: number = 18;
    let sentence: string = `Hello, my name is ${ name }.I'll be ${ age + 1 } years old next month. ${ age >18?'成年':'未成年'}`;
 
    console.log(sentence)

//数组