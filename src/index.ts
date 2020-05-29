interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "DH",
  age: 29,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, You are ${person.age}, and you are a ${person.gender}`;
};

console.log(sayHi(person));

export {};
