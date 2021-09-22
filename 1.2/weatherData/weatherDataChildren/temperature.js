import  {WeatherData} from '../weatherData.js'

export class Temperature extends WeatherData {
   constructor(time,place,value,type,unit) {
       super(time,place,value,type,unit);

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