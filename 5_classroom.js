const car = {
    make : " Rolls Royce",
    model : " Ghost"
}

// We can not add a new key and value pair but we can change or opdate existing values.
Object.seal(car)

// We can not add a new key and value pair also and can not change or update existing value.
Object.freeze(car);

car.model = "Phantom";
car.color = "Black and white"
console.log(car)