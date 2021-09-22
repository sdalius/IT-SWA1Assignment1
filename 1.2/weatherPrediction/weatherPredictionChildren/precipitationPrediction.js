import  {WeatherPrediction} from '../WeatherPrediction.js'

export class PrecipitationPrediction extends WeatherPrediction{

    constructor(time,place,type,unit,max,min,expectedTypes) {
        super(time,place,type,unit,max,min);
        this.expectedTypes = expectedTypes
    }

    getExpectedTypes(){
        return this.expectedTypes
    }

    matches(data) {
        return super.matches(data);
    }

    convertToInches(){
        if(this.getUnit() == 'MM'){
            this.setValue(this.getValue() / 25.4)
            this.setUnit('Inches')
        }
    }

    convertToMM(){
        if(this.getUnit() == 'Inches'){
            this.setValue(this.getValue() * 25.4)
            this.setUnit('MM')
        }
    }

}