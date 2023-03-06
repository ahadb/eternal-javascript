/**
 * @desc
 * Factory pattern provides a generic interface for creating objects
 * that don't necessarily need to be new'd or have a constructor
 *
 */

// 1. create object literals, this will be more complex in real life
// repeating these methods can lead to bugs as well as having
// to fix that in each object literal created

const Bmw = {
  make: "BMW",
  vinNumber: "1GNKVGED5CJ196120",
  year: 2022,
  checkOil: () => {
    console.log("Checking engine oil levels ...");
  },
  startEngine: () => {
    console.log("Revving engine ...");
  },
};

const Audi = {
  make: "Audi",
  vinNumber: "JF1SF63501H759113",
  year: 2019,
  checkOil: () => {
    console.log("Checking engine oil levels ...");
  },
  startEngine: () => {
    console.log("Revving engine ...");
  },
};

// 2. to clean this up we can use a factory which created objects
// this is more flexible and re-usable
function vehicleFactory(make, vinNumber, year) {
  return {
    make,
    vinNumber,
    year,
    checkOil: () => {
      console.log("Checking engine oil levels ...");
    },
    startEngine: () => {
      console.log("Revving engine ...");
    },
  };
}

// basic, but eliminates the repeated `new` operator
const bmwVehicle1 = vehicleFactory("BMW", "1GNKVGED5CJ196120", 2022);
// => { make: 'BMW', vinNumber: '1GNKVGED5CJ196120', year: 2022, startEngine: ƒ, drive: ƒ }

const audiVehicle1 = vehicleFactory("Audi", "JF1SF63501H759113", 2019);
// => { make: 'Audi', vinNumber: 'JF1SF63501H759113', year: 2019, startEngine: ƒ, drive: ƒ }

// 3. to get the most of factories our workflow involves dynamic factors and configuration
// this is easy to maintain, reusable and extendable (if we decide to extend the implementation)
class Coupe {
  constructor(options) {
    this.wheels = options.wheels || 4;
    this.doors = options.doors || 2;
    this.color = options.color || "blue";
  }
}

// can add more vehicle types here

class Truck {
  constructor(options) {
    this.wheels = options.wheels || 6;
    this.doors = options.doors || 2;
    this.color = options.color || "silver";
  }
}

class VehicleFactory {
  create = (options, vehicleType) => {
    if (!vehicleType) {
      throw new Error(
        "Unable to create vehicle, pls specify a vehicle type and try again."
      );
    }

    let vehicle;

    // if more vehicle types are added we can easily update our
    // implementation and return those objects
    if (vehicleType === "Coupe") {
      vehicle = new Car(options);
    } else if (vehicleType === "Truck") {
      vehicle = new Truck(options);
    }

    vehicle.vehicleType = vehicleType;

    vehicle.checkOil = () => {
      console.log("Checking engine oil levels ...");
    };

    vehicle.startEngine = () => {
      console.log("reving engine");
    };

    return vehicle;
  };
}

const vehicleFactory = new VehicleFactory();

const coupe = vehicleFactory.create({
  wheels: 4,
  doors: 2,
  color: "blue",
}, "Coupe");

const truck = vehicleFactory.create({
  wheels: 6,
  doors: 2,
  color: "silver",
}, "Truck");
