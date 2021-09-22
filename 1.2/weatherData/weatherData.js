import {Event} from '../event.js'
import {DataType} from '../dataType.js'

export class WeatherData {
    constructor(time,place,value,type,unit) {
        Object.assign(
            this,
            new Event(time,place),
            new DataType(type,unit)
        )
        this.value = value
    }

    getValue(){
        return this.value
    }

    setValue(value){
        this.value = value
    }
}

WeatherData.prototype.getTime = Event.prototype.getTime
WeatherData.prototype.getPlace = Event.prototype.getPlace
WeatherData.prototype.getType = DataType.prototype.getType
WeatherData.prototype.getUnit = DataType.prototype.getUnit
WeatherData.prototype.setUnit = DataType.prototype.setUnit



