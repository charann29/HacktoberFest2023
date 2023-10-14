import React from "react";
import classes from "./SearchBar.module.css";

function SearchBar({ input_field_name }) {

    return <>
        <div className={classes.searchBar}>
            <input type="text" placeholder={input_field_name} />
        </div>
    </>
}

export default SearchBar;