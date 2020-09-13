import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";

//Components
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
    state = {
        itemList: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then(this.onItemListLoaded)
            .catch(this.onError);

    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onItemListLoaded = (itemList) => {
        this.setState({
            itemList,
            loading: false
        });
    };

    renderItems(arr) {
        return arr.map((item) => {

            const { id } = item;
            const label = this.props.children(item);

            return (
                <span className="list-group-item"
                    key={id}
                    onClick ={() => this.props.onItemSelected(id)}
                >
                    {label}
                </span>
            )
        });
    }

    render() {
        const { itemList, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = loading ? <Loader /> : null;

        const items = this.renderItems(itemList);

        return (
                <div className="item-list list-group">
                    {loader}
                    {errorMessage}
                    {items}
                </div>
        );
  }
}
