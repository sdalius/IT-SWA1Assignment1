export class WeatherForecast {
    constructor(data) {
        this.data = data
        this.place = null
        this.type = null
        this.periodFilter = null
    }

    getPlaceFilter(){
        return this.place
    }

    setPlaceFilter(place){
        this.place = place
    }

    clearPlaceFilter(){
        this.place = null
    }

    getTypeFilter(){
        return this.type
    }

    setTypeFilter(type){
        this.type = type
    }

    clearTypeFilter(){
        this.type = null
    }

    getPeriodFilter(){
        return this.periodFilter
    }

    setPeriodFilter(period){
        this.periodFilter = period
    }

    clearPeriodFilter(){
        this.periodFilter = null
    }

    convertToUSUnits(){
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].getUnit() == 'C')
            {
                this.data[i].convertToF()
            }
            if(this.data[i].getUnit() == 'MM')
            {
                this.data[i].convertToInches()
            }
            if(this.data[i].getUnit() == 'MS')
            {
                this.data[i].convertToMPH()
            }
        }
    }

    convertToInternationalUnits(){
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].getUnit() == 'F')
            {
                this.data[i].convertToC()
            }
            if(this.data[i].getUnit() == 'Inches')
            {
                this.data[i].convertToMM()
            }
            if(this.data[i].getUnit() == 'MPH')
            {
                this.data[i].convertToMS()
            }
        }
    }

    add(data2){
	for (let i = 0; i < data2.length; i++)
        {
            if ( WeatherData.prototype.isPrototypeOf(data2[i]))
            {
                this.data.push(data2[i])
            }
            else{
                console.log('This is not a weather data? But lets continue')
            }
        }
    }

    getFilteredPredictions(){
        let sortedArray = new Array()

        for (let i = 0; i < this.data.length; i++)
        {
            if (this.data[i].getType() === this.getTypeFilter())
            {
                if (this.data[i].getPlace() === this.getPlaceFilter())
                {
                    if (this.data[i].getTime() > this.periodFilter.getFrom() && this.data[i].getTime() < this.periodFilter.getTo())
                    {
                        sortedArray.push(this.data[i])
                    }
                }
            }
        }
        return sortedArray
    }
}