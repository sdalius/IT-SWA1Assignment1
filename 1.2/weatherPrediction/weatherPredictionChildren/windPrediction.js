import  {WeatherPrediction} from '../WeatherPrediction.js'

export class WindPrediction extends WeatherPrediction{
    constructor(time,place,type,unit,max,min,expectedDirections) {
        super(time,place,type,unit,max,min);
        this.expectedDirections = expectedDirections
    }

    getExpectedDirections(){
        return this.expectedDirections
    }

    matches(data) {
        return super.matches(data);
    }

    convertToMPH(){
        if(this.getUnit() == 'MS'){
            this.setValue(this.getValue() * 2237)
            this.setUnit('MPH')
        }
    }

    convertToMS(){
        if(this.getUnit() == 'MPH'){
            this.setValue(this.getValue() / 2237)
            this.setUnit('MS')
        }
    }
}