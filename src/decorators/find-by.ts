type Constructor = { new (...args: any[]): any };

function toString<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    toString() {
      return JSON.stringify(this);
    }
  };
}

function findById(value: Record<string, any> | any) {
  return (target?: unknown, propertyKey?: string, descriptor?: PropertyDescriptor) => {
    console.log('params: ', value, 'ARGS: ',  ...arguments, target, propertyKey, descriptor);
  }
  if (this.propertyKey) {
    this[propertyKey] = value;
  }
  // const original = descriptor.value;
  //
  // descriptor.value = function (...args: unknown[]) {
  //   console.log('params: ', ...args);
  //   const result = original.call(this, ...args);
  //   console.log('result: ', result);
  //   return result;
  // }
}

@toString
class C {
  @findById({id: "element-id", link: 'test'})
  public foo = "foo";

  @findById("element-id-num")
  public num = 24;
}

const val = new C();

console.log(val.toString())
// -> {"foo":"foo","num":24}

val.foo = "bar";
console.log(val.toString());


// function findById(value: string) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     descriptor.set(value);
//   };
// }
//
//
// export class LoginPage {
//   @findBy("elementId")
//   private element: any;
//
//   public navigate() {
//     console.log("navigate", this.element);
//   }
// }
//
//
// const loginPage = new LoginPage();
//
// loginPage.navigate();
