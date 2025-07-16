// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called", target, propertyKey, descriptor);
//   };
// }
//
// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called", target, propertyKey, descriptor);
//   };
// }
//
// class ExampleClass {
//   @first()
//   @second()
//   method() {}
// }
//
//
// console.log('HERE');
// const example = new ExampleClass();
//  example.method();
//
//
