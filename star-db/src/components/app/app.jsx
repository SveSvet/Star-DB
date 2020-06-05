import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import styles from "./app.module.css";

const App = () => {
    const classes = `${styles["row"]} ${styles["mb2"]}`;
    console.log('hello');

    return (
        <div>
            <Header />
            <RandomPlanet />

            <div className={classes}>
                <div className={styles["col-md-6"]}>
                    <ItemList />
                </div>
                <div className={styles["col-md-6"]}>
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
};

export default App;