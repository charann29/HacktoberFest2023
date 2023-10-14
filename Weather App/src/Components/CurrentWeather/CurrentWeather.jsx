import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import classes from "./CurrentWeather.module.css";

function CurrentWeather({ city, temprature, day, weatherCondition }) {

    return <>
        <div className={classes.currWeatherContainer}>


            <div className={classes.weather}>
                <div className={classes.city}>
                    <h1>{city}</h1>
                </div>
                <div className={classes.temprature}>
                    {temprature}°C
                </div>

                <div className={classes.day}>
                    <h2>{day}</h2>
                </div>
                <div className={classes.weather}>
                    <h3>{weatherCondition}</h3>
                </div>

            </div>

        </div>

    </>

}

export default CurrentWeather;