"use strict";
//static property example
Object.defineProperty(exports, "__esModule", { value: true });
class Ride {
    customerName;
    startingLocation;
    dropofLocation;
    static currentRide = 0;
    constructor(customerName, startingLocation, dropofLocation) {
        this.customerName = customerName;
        this.startingLocation = startingLocation;
        this.dropofLocation = dropofLocation;
    }
    start() {
        Ride.currentRide += 1;
    }
}
const ride1 = new Ride("Charlie", "Location A", "Location B");
ride1.start();
console.log(Ride.currentRide);
const ride2 = new Ride("Dave", "Location C", "Location D");
ride2.start();
console.log(Ride.currentRide);
//# sourceMappingURL=ride.js.map