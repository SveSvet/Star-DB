import React from "react";

import styles from "./header.module.css";

const Header = () => {
    const classes = `${styles["header"]} ${styles["d-flex"]}`;

    return(
        <div className={classes}>
            <h3>
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className={styles["d-flex"]}>
                <li><a href="#">Peaple</a></li>
                <li><a href="#">Planets</a></li>
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    )
};

export default Header;