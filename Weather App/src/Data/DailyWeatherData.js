import DailyWeather from "../Entities/DailyWeather";


const dailyWeatherData = {
    temprature: [32, 33, 34, 35, 36, 37, 38],
    day: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    weatherCondition: ['Sunny', 'Rainy', 'Cloudy', 'Windy', 'Sunny', 'Sunny', 'Rainy']

}

const dailyWeather = new DailyWeather(dailyWeatherData);
export default dailyWeather;