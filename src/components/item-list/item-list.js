import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";

//Components
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

//HOC-helper
import GetData from "../hoc-helper/get-data";

const { getAllPeople } = new SwapiService();

const ItemList = ({data, onItemSelected, children: renderItems}) => {

    const items = data.map((item) => {
            const { id } = item;
            const label = renderItems(item);

            return (
                <span className="list-group-item"
                    key={id}
                    onClick ={() => onItemSelected(id)}
                >
                    {label}
                </span>
            )
        });

    return (
        <div className="item-list list-group">
            {items}
        </div>
    );
};

export default GetData(ItemList, getAllPeople);
