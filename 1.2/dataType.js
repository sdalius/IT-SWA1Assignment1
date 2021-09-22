export class DataType {
    constructor(type,unit) {
        this.type = type
        this.unit = unit
    }

    setUnit(unit){
        this.unit = unit
    }

    getType(){
      return  this.type
    }

    getUnit(){
        return this.unit
    }
}