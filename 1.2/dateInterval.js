export class DateInterval {
    constructor(from,to) {
        this.from = from
        this.to = to
    }

    getFrom(){
        return this.from
    }

    getTo(){
        return this.to
    }

    contains(d){
        let contains = false;
        let startDate = this.from
        for (let i = 0; i < this.getDifferenceInDays(this.from,this.to); i++) {
           if(startDate == d)
               contains = true
            startDate.setDate(new Date().getDate()+1)
        }

        return contains
    }

     getDifferenceInDays(date1, date2) {
        const diffInMs = Math.abs(date2 - date1);
        return diffInMs / (1000 * 60 * 60 * 24);
    }

}