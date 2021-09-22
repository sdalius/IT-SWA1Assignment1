import { Precipitation} from "../exc1.2/weatherData/weatherDataChildren/precipitation.js";
import { Temperature } from "../exc1.2/weatherData/weatherDataChildren/Temperature.js";
import {WeatherHistory} from "../exc1.2/WeatherHistory.js";
import { DateInterval } from "../exc1.2/dateInterval.js"

import { PrecipitationPrediction} from "../exc1.2/weatherPrediction/weatherPredictionChildren/precipitationPrediction.js";
import { TemperaturePrediction} from "../exc1.2/weatherPrediction/weatherPredictionChildren/TemperaturePrediction.js";
import {WeatherForecast} from "../exc1.2/WeatherForecast.js";


let precipitation = new Precipitation(new Date(2003,0,10),'Wembley','45','Precip','Inches','hail')
let temp = new Temperature(new Date(2003,4,3),'Horsens','49','temp','F')

precipitation.convertToMM()
// console.log(precipitation.getValue())
// console.log(precipitation.getUnit())

temp.convertToC()
// console.log(temp.getValue())
// console.log(temp.getUnit())


let data = [precipitation,temp]
let from = new Date(2002,11,23)
let to = new Date(2003,11,23)

let d = new DateInterval(from,to)


let wh = new WeatherHistory(data)
wh.setPeriodFilter(d)
wh.setTypeFilter('temp')
wh.setPlaceFilter('Horsens')
wh.convertToInternationalUnits()

console.log(wh.getFilteredData())

let p2 = new Precipitation(new Date(2003,10,3),'Dominicana',10,'Precip','Inches','snow')
let t2 = new Temperature(new Date(2005,3,3),'Horsens',54,'temp','F')

let data2 = [p2,t2]
wh.add(data2)

console.log(wh.getFilteredData())


