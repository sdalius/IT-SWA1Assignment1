import  {WeatherData} from '../weatherData.js'

export class Wind extends WeatherData{
    constructor(time,place,value,type,unit,direction) {
        super(time,place,value,type,unit);
        this.direction = direction
    }

    getDirection(){
        return this.direction
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
