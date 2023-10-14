import React from 'react';
import classes from './DailyWeather.module.css';

function DailyWeather({ temprature, day, weather }) {

    return <>
        <div className={classes.dailyWeather}>
            <div className={classes.dayweather}>
                {day.map((days, index) => (
                    <div className={classes.perdayweather} key={days}>
                        <h2 className={classes.day}>{days}</h2>
                        <h2 className={classes.temprature}>{temprature[index]}°C</h2>
                        <h2 className={classes.weather}>{weather[index]}</h2>
                    </div>
                ))}
            </div>
        </div>
    </>


}

export default DailyWeather;