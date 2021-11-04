import { NativeSelect, FormControl } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCounties] = useState([]);
  useEffect(() => {
    const countryAPI = async () => {
      setFetchedCounties(await fetchCountries());
    };
    countryAPI();
  }, []);
  // console.log(fetchedCountries);
  return (
    <FormControl className={styles.container}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
