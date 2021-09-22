import  {WeatherPrediction} from '../WeatherPrediction.js'

export class TemperaturePrediction extends WeatherPrediction{
    constructor(time,place,type,unit,max,min) {
        super(time,place,type,unit,max,min);
    }

    convertToF(){
        if(this.getUnit() == 'C'){
            this.setValue((this.getValue() * 9/5) + 32)
            this.setUnit('F')
        }
    }

    convertToC(){
        if(this.getUnit() == 'F'){
            this.setValue((this.getValue() - 32) * 5/9)
            this.setUnit('C')
        }
    }

}