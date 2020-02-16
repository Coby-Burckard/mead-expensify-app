//Object destructuring
const person = {
  name: "Coby",
  age: 25,
  location: {
    city: "Minneapolis",
    temp: 25
  }
};

const { name = "Anon", age } = person;

console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

//Array destructuring

const address = ["1 General Mills Blvd", "Golden Valley", "Minnesota", "55403"];
const [, shity, state] = address;

console.log(`You are in ${shity}, ${state}`);
