import './App.css'
import Header from './Components/Header/Header'
import CurrentWeather from './Components/CurrentWeather/CurrentWeather'
import DailyWeather from './Components/DailyWeather/DailyWeather'
import weather from './Data/CurrentWeatherData';
import dailyWeather from './Data/DailyWeatherData';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

    return <>
        <Header />
        <div className='app'>
            <div className='curr-weather-search-bar-container'>
                <CurrentWeather
                    city={weather.city}
                    temprature={weather.temprature}
                    day={weather.day}
                    weatherCondition={weather.weatherCondition}
                />
                <div className='searchBar'>
                    <SearchBar input_field_name={'Search City'} />
                </div>
            </div>
            <DailyWeather
                temprature={dailyWeather.temprature}
                day={dailyWeather.day}
                weather={dailyWeather.weatherCondition}
            />
        </div>
    </>
}

export default App
