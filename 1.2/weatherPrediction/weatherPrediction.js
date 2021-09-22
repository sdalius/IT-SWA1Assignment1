import {Event} from '../event.js'
import {DataType} from '../dataType.js'


export class WeatherPrediction {
    constructor(time,place,type,unit,max,min) {
        Object.assign(
            this,
            new Event(time,place),
            new DataType(type,unit)
        )
        this.max = max
        this.min = min
        this.value = Math.floor(Math.random() * (max - min) + min)
    }

    matches(data){
        return (data.getValue() == this.value) ? true : false
    }

    getValue(){
        return this.value
    }

    setValue(value){
        this.value = value
    }

    getMax(){
        return this.max
    }

    getMin(){
        return this.min
    }
}

WeatherPrediction.prototype.getTime = Event.prototype.getTime
WeatherPrediction.prototype.getPlace = Event.prototype.getPlace
WeatherPrediction.prototype.getType = DataType.prototype.getType
WeatherPrediction.prototype.getUnit = DataType.prototype.getUnit
WeatherPrediction.prototype.setUnit = DataType.prototype.setUnit
