import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from "../../services/swapi-service";
import Loader from "../loader";
import ViewPlanet from "./view-planet";

export default class RandomPlanet extends Component {

  swapiSerwice = new SwapiService();

  state = {
    planet: {},
    loading: true
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

  updatePlanet() {
    const id = Math.floor(Math.random() * 25);
    this.swapiSerwice
        .getPlanet(id)
        .then(this.onPlanetLoaded);
  };


  render() {

    const { planet, loading } = this.state;
    const loader = loading ? <Loader /> : null;
    const content = !loading ? <ViewPlanet planet={planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        { loader }
        { content }
      </div>
    );
  }
}
