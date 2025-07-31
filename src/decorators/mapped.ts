type Constructor = { new (...args: any[]): any };

function mapped<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    mapObject() {
      return JSON.stringify(this);
    }
  };
}

@mapped
interface DtoInterface {
  id: string;
  intId: number;
}

const val = new C();

console.log(val.toString())
// -> {"foo":"foo","num":24}

val.foo = "bar";
console.log(val.toString());

console.log('call val.doSomething', val.doSomething());
