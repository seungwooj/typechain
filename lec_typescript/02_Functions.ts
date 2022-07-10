type Name = string;
type Age = number;

type Player = {
  name: Name;
  age?: Age;
};

// Signatures
type PlayerMaker = (name: Name, age?: Age) => Player;

const playerMaker: PlayerMaker = (name) => ({ name });

const aaron = playerMaker("aaron");
aaron.age = 33;

console.log(aaron);

let a: unknown;
let b = typeof a === "number" ? a + 1 : null;

// type: never
const nameOrAge = (name: string | number) => {
  if (typeof name === "string") {
    name += "_name@air-closet.com";
    return name;
  } else if (typeof name === "number") {
    let newName = name.toString();
    newName = newName + "_number@air-closet.com";
    return newName;
  } else {
    throw Error;
  }
};

// callSignature : typesof arguments & typesof return 를 알려줌
// -> 함수가 어떤 type을 받고 어떤 type을 리턴하는지 를 보여줄 수 있음
// -> 프로그램을 디자인할 때, type기반으로 생각하고, 이것을 코드에 반영할 수 있는 점이 멋지다.
type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

// Overloading: type에 복수의 call signature가 있을 경우, 앞의 call signature가 업데이트 된다.
// -> 패키지 또는 라이브러리 를 디자인 할 때 많이 사용됨
// signature의 parameter수가 다를 때에는 메쏘드에서 type을 적어줘야 한다.
const add: Add = (a, b, c?: number) => {
  if (c) return a + b + c;
  else return a + b;
};

// generic: <~~~> generate 'type'
// <T> <V> 같은 형태로 많이 사용 (TypePlaceholder / ValuePlaceholder)
// generic type을 사용하면, typescript가 타입을 유추하여 보여준다.
// (call signature 안에 들어올 타입이 무엇인지 모를때(not concrete) 사용)
// generic을 사용해서 다양한 call signature 구현이 가능 -> polymorphism의 구현이 가능.
type SuperPrint = {
  <T, V>(arr: T[], val: V): T;
};

const printItems: SuperPrint = (arr) => arr[0];

const alpha = printItems([1, 2, 3, 4], "");
const beta = printItems([true, false, 1, 2], "x");
const gamma = printItems(["alpha", "beta", true, false, 1, 3], "y");

// 실제로 generic을 사용하게 되는 경우
// - type의 생성 및 확장 (any를 쓰는 대신 사용해줄 수 있다)

type Unit<E> = {
  name: string;
  extraInfo: E;
};

type UnitExtra = {
  attack: number;
  armor: number;
};

type Marine = Unit<UnitExtra>;

const raynor: Marine = {
  name: "raynor",
  extraInfo: {
    attack: 8,
    armor: 2,
  },
};
