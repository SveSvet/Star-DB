import React, { Component } from 'react';

import styles from './item-list.module.css';

export default class ItemList extends Component {

    render() {
        const classes = `${styles["item-list"]} ${styles["list-group"]}`

        return (
            <ul className={classes}>
                <li className={styles["list-group-item"]}>
                    Luke Skywalker
                </li>
                <li className={styles["list-group-item"]}>
                    Darth Vader
                </li>
                <li className={styles["list-group-item"]}>
                    R2-D2
                </li>
            </ul>
        );
    }
}