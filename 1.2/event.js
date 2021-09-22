export class Event {
    constructor(time,place) {
        this.time = time
        this.place = place
    }

    getTime() {
        return this.time
    }

    getPlace(){
        return this.place
    }
}
