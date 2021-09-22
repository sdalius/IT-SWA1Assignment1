import  {WeatherPrediction} from '../WeatherPrediction.js'


export class CloudCoveragePrediction extends WeatherPrediction{
    constructor(time,place,type,unit,max,min) {
        super(time,place,type,unit,max,min);
    }
}