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
    const objectId: string | null = typeof value === 'string' ? value : value?.id || null;

    // console.log('params: ', value, 'ARGS: ', ...arguments, target, propertyKey, descriptor);


    // console.log('target: ', target);
    // console.log('propertyKey: ', propertyKey);
    console.log('descriptor: ', descriptor);
    // console.log('objectId: ', objectId);
    // if (this.propertyKey) {
    //   this[propertyKey] = value;
    // }
    if (descriptor?.value) {
    const originalMethod = descriptor.value;

      descriptor.value = function (...args: unknown[]) {
        const result = `${objectId} ---> ${originalMethod.apply(this, ...args)}`;
        return result;
      }
    }

    return descriptor;
  }
}

@toString
class C {
  // @findById({id: "element-id", link: 'test', replace: 'value'})
  public foo: string = "foo";

  // @findById("element-id-num")
  public num = 24;

  @findById({id: "do-something-id", link: '??', replace: 'value'})
  doSomething() {
    return 'doSomething';
  }
}

const val = new C();

console.log(val.toString())
// -> {"foo":"foo","num":24}

val.foo = "bar";
console.log(val.toString());

console.log('call val.doSomething', val.doSomething());
