function Events(state){
    function getTime(){
        return state.time
    }
    function getPlace(){
        return state.place
    }
    return {getPlace, getTime}
}

function DataType(state){
    function getType(){
        return state.type
    }
    function getUnit(){
        return state.unit
    }
    return {getType, getUnit}
}

function WeatherData(state) {
    const EventsNature = Events(state)
    const DataTypeNature = DataType(state)
    function getValue() { return state.value }
    return { ...EventsNature, ...DataTypeNature, getValue }
}

function Temperature(time, place, unit, value){
    const state = {time, place, type: 'Temperature', unit, value}
    const WeatherDataNature = WeatherData(state)
    function convertToF(){
        if (state.unit === 'C' && state.type === 'Temperature') {
            state.value = Number((state.value * 1.8) + 32).toFixed(2)
            state.unit = 'F'
        } else {
            console.log('You can not convert this value to Fahrenheit')
        }
    }
    function convertToC(){
        if(state.unit === 'F' && state.type === 'Temperature'){
            state.value = Number((state.value - 32) * (5/9)).toFixed(2)
            state.unit = 'C'
        } else {
            console.log('You can not convert this value to Celsius')
        }
    }
    return {...WeatherDataNature, convertToF, convertToC}
}
 
function Precipitation(time, place, unit, value, precipitationType)
{
    const state = {time, place, type: 'Precipitation', unit, value, precipitationType}
    const WeatherDataNature = WeatherData(state)
    function getPrecipitationType(){
        return state.precipitationType
    }
    function convertToInches(){
        if (state.unit === 'MM' && state.type === 'Precipitation'){
            state.value = Number((state.value) / 2.54).toFixed(2)
            state.unit = 'IN'
        } else {
            console.log('You can not convert this type to Inches')
        }
    }
    function convertToMM(){
        if (state.unit === 'IN' && state.type === 'Precipitation'){
            state.value = Number((state.value) * 2.54).toFixed(2)
            state.unit = 'MM'
        } else {
            console.log('You can not convert this type to Inches')
        }
    }
    return {...WeatherDataNature, getPrecipitationType, convertToInches, convertToMM}
}


function Wind(time, place, unit, value, direction)
{
    const state = {time, place, type: 'Wind', unit, value, direction}
    const WeatherDataNature = WeatherData(state)
    function getDirection(){
        return state.direction
    }
    function convertToMPH()
    {
        if (state.unit === 'MS' && state.type === 'Wind') {
            state.value = Number((state.value) * 2.237).toFixed(2)
            state.unit = 'MPH'
        } else {
            console.log('You can not convert this type to MPH')
        }
    }
    function convertToMS()
    {
        if (state.unit == 'MPH' && state.type === 'Wind'){
            state.value = Number((state.value) / 2.237).toFixed(2)
            state.unit = 'MS'
        } else {
            console.log('You can not convert this type to MS')
        }
    }
    return {...WeatherDataNature, getDirection, convertToMPH, convertToMS}
}

function CloudCoverage(time, place, value) {
    const State = {time, place, type: 'Cloud Coverage', unit:'Percentage', value}
    const WeatherDataNature = WeatherData(State)
    return {...WeatherDataNature}
}

function WeatherHistory(){
    let placeFilter, typeFilter, periodFilter, weatherData = new Array()
    function WeatherHistory(data){
        for (let i = 0; i < data.length; i++)
        {
            try{
                if ( data[i].getType() === ('Precipitation' || 'Wind' || 'Temperature' || 'CloudCoverage') )
                {
                    weatherData.push(data[i])
                }
            }
            catch{
                console.log('Object was not valid type')
            }
        }
    }
    function getPlaceFilter(){
        return placeFilter
    }
    function setPlaceFilter(setPlace){
        placeFilter = setPlace
    }
    function clearPlaceFilter(){
        placeFilter = ""
    }
    function getTypeFilter(){
        return typeFilter
    }
    function setTypeFilter(settypeFilter){
        typeFilter = settypeFilter
    }
    function clearTypeFilter(){
        typeFilter = ""
    }
    function getPeriodFilter(){
        return periodFilter
    }
    function setPeriodFilter(setPeriodFilter){
        try
        {
            if (setPeriodFilter.getFrom() && setPeriodFilter.getTo() != null)
            {
                periodFilter = setPeriodFilter
            }
        }
        catch
        {
            console.log("It is not a DateInterval object")
        }
    }
    function clearPeriodFilter(){
        periodFilter = null
    }
    function convertToUSUnits(){
        for (let i = 0; i < weatherData.length; i++)
        {
            if ( weatherData[i].getType() === 'Temperature' )
            {
                weatherData[i].convertToF()
            }
            else if ( weatherData[i].getType() === 'Precipitation' )
            {
                weatherData[i].convertToInches()
            }
            else if ( weatherData[i].getType() === 'Wind')
            {
                weatherData[i].convertToMPH()
            }
            continue;
        }
    }
    function convertToInternationalUnits(){
        for (let i = 0; i < weatherData.length; i++)
        {
            if ( weatherData[i].getType() === 'Temperature')
            {
                weatherData[i].convertToC()
            }
            else if (weatherData[i].getType() === 'Precipitation')
            {
                weatherData[i].convertToMM()
            }
            else if (weatherData[i].getType() === 'Wind')
            {
                weatherData[i].convertToMS()
            }
            continue;
        }
    }
    function add(data){
        for (let i = 0; i < data.length; i++)
        {
            try{
                if ( data[i].getType() === ('Precipitation' || 'Wind' || 'Temperature' || 'CloudCoverage') )
                {
                    weatherData.push(data[i])
                }
            }
            catch{
                console.log('Object was not valid type')
            }
        }
    }

    function getFilteredData()
    {
        let sortedArray = new Array()

        if (placeFilter === "" || typeFilter === "" || periodFilter === null)
        {
            console.log("One of the filters are missing")
        }
        for (let i = 0; i < weatherData.length; i++)
        {
            if (weatherData[i].getType() === typeFilter)
            {
                if (weatherData[i].getPlace() === placeFilter)
                {
                    if (weatherData[i].getTime() > periodFilter.getFrom() && weatherData[i].getTime() < periodFilter.getTo())
                    {
                        sortedArray.push(weatherData[i])
                    }
                }
            }
        }
        return sortedArray
    }
    return {WeatherHistory, getPlaceFilter, setPlaceFilter, clearPlaceFilter, getTypeFilter, setTypeFilter, clearTypeFilter, 
        getPeriodFilter, setPeriodFilter, clearPeriodFilter, convertToUSUnits, convertToInternationalUnits, add, getFilteredData} 
}

function DateInterval(from, to)
{
    const dates = {from, to}

    function getFrom(){
        return dates.from
    }
    function getTo(){
        return dates.to
    }
    function contains(d){
        if ( d instanceof Date )
            return true
        return false
    }
    return {getFrom, getTo, contains}
}

// ------------------------- Weather Data ---------------------------//

function WeatherPrediction(state) {
    const WeatherDataNature = WeatherData(state)
    function getMin() {
        if (state.minValue){
            return state.minValue 
        }
        console.log("Prediction minimum number was not declared.")
    }
    function getMax() { 
        if (state.maxValue){
            return state.maxValue
        }
        console.log("Prediction maximum number was not declared.")
    }
    return { ...WeatherDataNature, getMin, getMax }
}

function TemperaturePrediction(time, place, unit, minValue, maxValue){
    const state = {time, place, type: 'Temperature', unit, value: Number(Math.random() * (maxValue - minValue) + minValue).toFixed(2), minValue, maxValue}
    const WeatherPredictionNature = WeatherPrediction(state)
    function convertToF(){
        if (state.unit === 'C' && state.type === 'Temperature') {
            state.value = Number((state.value * 1.8) + 32).toFixed(2)
            state.unit = 'F'
        } else {
            console.log('You can not convert this value to Fahrenheit')
        }
    }
    function convertToC(){
        if(state.unit === 'F' && state.type === 'Temperature'){
            state.value = Number((state.value - 32) * (5/9)).toFixed(2)
            state.unit = 'C'
        } else {
            console.log('You can not convert this value to Celsius')
        }
    }
    return {...WeatherPredictionNature, convertToF, convertToC}
}

function PrecipitationPrediction(time, place, unit, minValue, maxValue)
{
    const state = {time, place, type: 'Precipitation', unit, value: Number(Math.random() * (maxValue - minValue) + minValue).toFixed(2), minValue, maxValue}
    const WeatherPredictionNature = WeatherPrediction(state)
    function getPrecipitationTypes(){
        return ["Drizzle", "Rain", "Sleet", "Snow", "Graupel", "Hail"]
    }
    function matches(data){
        if (state.type === data.type && state.unit === data.unit && state.value === data.value) {
            return true
        }
        return false
    }
    function convertToInches(){
        if (state.unit === 'MM' && state.type === 'Precipitation'){
            state.value = Number((state.value) / 2.54).toFixed(2)
            state.unit = 'IN'
        } else {
            console.log('You can not convert this type to Inches')
        }
    }
    function convertToMM(){
        if (state.unit === 'IN' && state.type === 'Precipitation'){
            state.value = Number((state.value) * 2.54).toFixed(2)
            state.unit = 'MM'
        } else {
            console.log('You can not convert this type to Inches')
        }
    }
    return {...WeatherPredictionNature, getPrecipitationTypes, convertToInches, convertToMM, matches}
}

function WindPrediction(time, place, unit, minValue, maxValue)
{
    const state = {time, place, type: 'Wind', unit, value: Number(Math.random() * (maxValue - minValue) + minValue).toFixed(2), minValue, maxValue}
    const WeatherPredictionNature = WeatherPrediction(state)
    function getExpectedDirections(){
        return ['North', 'East', 'South', 'West']
    }
    function convertToMPH()
    {
        if (state.unit === 'MS' && state.type === 'Wind') {
            state.value = Number((state.value) * 2.237).toFixed(2)
            state.unit = 'MPH'
        } else {
            console.log('You can not convert this type to MPH')
        }
    }
    function convertToMS()
    {
        if (state.unit == 'MPH' && state.type === 'Wind'){
            state.value = Number((state.value) / 2.237).toFixed(2)
            state.unit = 'MS'
        } else {
            console.log('You can not convert this type to MS')
        }
    }
    return {...WeatherPredictionNature, getExpectedDirections, convertToMPH, convertToMS}
}

function CloudCoveragePrediction(time, place, minValue, maxValue) {
    const State = {time, place, type: 'Cloud Coverage', unit: 'Percentage', value: Number(Math.random() * (maxValue - minValue) + minValue).toFixed(2), minValue, maxValue}
    const WeatherPredictionNature = WeatherPrediction(State)
    return {...WeatherPredictionNature}
}

function WeatherForecast(){
    let placeFilter, typeFilter, periodFilter, weatherPrediction = new Array()

    function WeatherForecast(data){
        for (let i = 0; i < data.length; i++)
        {
            try
            {
                if ( data[i].getType() === ('Precipitation' || 'Wind' || 'Temperature' || 'CloudCoverage') )
                {
                    weatherPrediction.push(data[i])
                }
            }
            catch
            {
                console.log('Object was not valid type')
            }
        }
    }
    function getPlaceFilter(){
        return placeFilter
    }
    function setPlaceFilter(setPlace){
        placeFilter = setPlace
    }
    function clearPlaceFilter(){
        placeFilter = ""
    }
    function getTypeFilter(){
        return typeFilter
    }
    function setTypeFilter(settypeFilter){
        typeFilter = settypeFilter
    }
    function clearTypeFilter(){
        typeFilter = ""
    }
    function getPeriodFilter(){
        return periodFilter
    }
    function setPeriodFilter(setPeriodFilter){
        try{
            if (setPeriodFilter.getFrom() && setPeriodFilter.getTo() != null)
            {
                periodFilter = setPeriodFilter
            }
        }catch{
                console.log("It is not a DateInterval object")
        }
    }
    function clearPeriodFilter(){
        periodFilter = null
    }
    function convertToUSUnits(){
        for (let i = 0; i < weatherPrediction.length; i++)
        {
            if ( weatherPrediction[i].getType() === 'Temperature' )
            {
                weatherPrediction[i].convertToF()
            }
            else if ( weatherPrediction[i].getType() === 'Precipitation' )
            {
                weatherPrediction[i].convertToInches()
            }
            else if ( weatherPrediction[i].getType() === 'Wind')
            {
                weatherPrediction[i].convertToMPH()
            }
            continue;
        }
    }
    function convertToInternationalUnits(){
        for (let i = 0; i < weatherPrediction.length; i++)
        {
            if ( weatherPrediction[i].getType() === 'Temperature')
            {
                weatherPrediction[i].convertToC()
            }
            else if (weatherPrediction[i].getType() === 'Precipitation')
            {
                weatherPrediction[i].convertToMM()
            }
            else if (weatherPrediction[i].getType() === 'Wind')
            {
                weatherPrediction[i].convertToMS()
            }
            continue;
        }
    }
    function add(data){
        for (let i = 0; i < data.length; i++)
        {
            try{
                if ( data[i].getType() === ('Precipitation' || 'Wind' || 'Temperature' || 'CloudCoverage') )
                {
                    weatherPrediction.push(data[i])
                }
            }
            catch{
                console.log('Object was not valid type')
            }
        }
    }

    function getFilteredPredictions()
    {
        let sortedArray = new Array()

        if (placeFilter === "" || typeFilter === "" || periodFilter === null)
        {
            console.log("One of the filters are missing")
        }
        for (let i = 0; i < weatherPrediction.length; i++)
        {
            if (weatherPrediction[i].getType() === typeFilter)
            {
                if (weatherPrediction[i].getPlace() === placeFilter)
                {
                    if (weatherPrediction[i].getTime() > periodFilter.getFrom() && weatherPrediction[i].getTime() < periodFilter.getTo())
                    {
                        sortedArray.push(weatherPrediction[i])
                    }
                }
            }
        }
        return sortedArray
    }
    return {WeatherForecast, getPlaceFilter, setPlaceFilter, clearPlaceFilter, getTypeFilter, setTypeFilter, clearTypeFilter, 
        getPeriodFilter, setPeriodFilter, clearPeriodFilter, convertToUSUnits, convertToInternationalUnits, add, getFilteredPredictions} 
}