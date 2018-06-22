class person {
    eyes: number;
    hands: number;
    name: string;
    occupation: string;
    constructor() {
        this.eyes = 2;
        this.hands = 2;
        this.name = "pavan";
        this.occupation = "SE";
    }

    printPerson() {
        console.log(this.eyes + "  eyes " + this.hands + " hands " + this.name + " name " + this.occupation);
    }
}