import  {WeatherData} from '../weatherData.js'

export class CloudCoverage extends WeatherData{
    constructor(time,place,value,type,unit) {
        super(time,place,value,type,unit);
    }
}