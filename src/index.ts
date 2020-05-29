class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const DH = new Human("DH", 29, "male");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, You are ${person.age}, and you are a ${person.gender}`;
};

console.log(sayHi(DH));

export {};
