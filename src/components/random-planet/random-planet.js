import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";
import ViewPlanet from "./view-planet";
import ErrorIndicator from "../error-indicator";

export default class RandomPlanet extends Component {

  swapiSerwice = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
};

  updatePlanet() {
    const id = 122;
    this.swapiSerwice
        .getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);
  };


  render() {
    const { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const loader = loading ? <Loader /> : null;
    const content = hasData ? <ViewPlanet planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { errorMessage }
        { loader }
        { content }
      </div>
    );
  }
}
