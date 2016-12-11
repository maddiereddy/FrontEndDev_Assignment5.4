/**
 * Created by maddie on 12/8/16.
 */

/*
 A. Create a Parameter decorator, name it as MyParameterDecorator and
 define target function and display message once
 called with class MyParameterDecoratorExample for:
 Console following values:
 ● target,
 ● propertyKey,
 ● parameterIndex
 */


function myParameterDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`MyParameterDecorator called on: 
    target: ${target}, propertyKey : ${propertyKey}, parameterIndex : ${parameterIndex}`);
}

class MyParameterDecoratorExample {
    print(@myParameterDecorator param1: string, @myParameterDecorator param2: number) {
        console.log(`MyStaticMethodDecoratorExample.print(${param1}, ${param2}) called.`);
    }
}

var testObj = new MyParameterDecoratorExample();
testObj.print("test", 999);
