import React, { Component } from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";

//Components
import Loader from "../loader";
import ErrorIndicator from "../error-indicator";

export default class ItemList extends Component {
    swapiService = new SwapiService();

    state = {
        peopleList: [],
        loading: true,
        error: false
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        this.swapiService
            .getAllPeople()
            .then(this.onPeopleListLoaded)
            .catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onPeopleListLoaded = (peopleList) => {
        this.setState({
            peopleList,
            loading: false
        });
    };

    renderItems(arr) {
        return arr.map((person) => {
            return (
                <span className="list-group-item"
                    key={person.id}
                    onClick ={() => this.props.onItemSelected(person.id)}
                >
                    {person.name}
                </span>
            )
        });
    }

    render() {
        const { peopleList, loading, error } = this.state;

        const errorMessage = error ? <ErrorIndicator /> : null;
        const loader = loading ? <Loader /> : null;

        const items = this.renderItems(peopleList);

        return (
                <div className="item-list list-group">
                    {loader}
                    {errorMessage}
                    {items}
                </div>
        );
  }
}
