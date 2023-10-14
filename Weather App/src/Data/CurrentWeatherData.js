import CurrWeather from '../Entities/CurrWeather';


const currWeatherData = {
        city: 'Karachi',
        day: 'Thurs',
        temprature: '33',
        weatherCondition: 'Sunny',
}

const weather = new CurrWeather(currWeatherData);
export default weather;

// export const currCity = "Karachi";
// export const currTemprature = '33';
// export const currDay = 'Thurs';
// export const currWeather = 'Sunny';