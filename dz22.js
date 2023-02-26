class Human {
    name = null;
    age = undefined;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`Hi, my name: ${this.name} , my age: ${this.age}.`);
    }

    setName(name) {
        this.name = name;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }
}

class Auto {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
    }
    setBrand(brand) {
        this.brand = brand;
        return this
    }
    setModel(model) {
        this.model = model;
        return this
    }
    setYear(year) {
        this.year = year;
        return this;
    }
    setLicensePlate(licensePlate) {
        this.licensePlate = licensePlate;
        return this;
    }
    setOwner(owner){
        if(!owner instanceof Human){
            throw new Error('Указан неправильный класс, класс должен быть Human!')
        }
        this.owner = owner;
        return this;
    }

    printInfo() {
        console.log(`------------------------------------------------------------`);
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`License plate: ${this.licensePlate}`);

        if (this.owner) {
            console.log("Owner:");
            this.owner.printInfo();
        } else {
            console.log("No owner assigned yet.");
        }
    }
}

let humans = {
    male: new Human().setName('Oleg').setAge(26),
    female: new Human().setName('Marta').setAge(45)
}

let autos = {
    auto: new Auto('Audi', 'Q7', '2007', 'AA456').setOwner(humans.male),
    auto1: new Auto()
        .setOwner(humans.female)
        .setBrand('BMW')
        .setModel('X5')
        .setYear('2012')
        .setLicensePlate('SD785')
}
//auto printing aii objects
for(let i in autos) {
    autos[i].printInfo();
}