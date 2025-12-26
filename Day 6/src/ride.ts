//static property example

class Ride {
    static currentRide: number = 0;
    constructor(
        public customerName: string,
        public startingLocation: string,
        public dropofLocation: string,
    ) {}
    start(){
        Ride.currentRide += 1;
    }
}
const ride1 = new Ride("Charlie", "Location A", "Location B");
ride1.start();
console.log(Ride.currentRide);
const ride2 = new Ride("Dave", "Location C", "Location D");
ride2.start();
console.log(Ride.currentRide);