const userClient = {
  name: 'Luiz',
  surname: 'Miranda',
  age: 25,

  say() {
    console.log(`${this.name} ${this.surname} está falando!`);
  },
};

console.log(userClient.name);
userClient.say();

// Function example
function createUser(name, surname, age) {
  return {
    name,
    surname,
    age,

    incrementAge() {
      this.age++;
    }
  };
}

const userOne = createUser('Enzo', 'Evangelista', 18);
console.log(userOne.age);

userOne.incrementAge();
userOne.incrementAge();
userOne.incrementAge();

console.log(userOne.age);