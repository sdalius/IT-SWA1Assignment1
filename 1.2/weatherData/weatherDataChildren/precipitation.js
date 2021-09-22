import  {WeatherData} from '../weatherData.js'

export class Precipitation  extends WeatherData{
    constructor(time,place,value,type,unit,precType) {
        super(time,place,value,type,unit);
        this.precType = precType
    }

    getPrecipitationType(){
        return this.precType
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