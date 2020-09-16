import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";

import './person-details.css';
import Loader from "../loader";
import Grid from "../grid";

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
  }

  componentDidMount() {
    this.updateItem();
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;

    if (itemId === null) {
      return;
    }

    getData(itemId)
        .then((item) => {
          this.setState({
            item,
            image: getImageUrl(item),
          })
        })
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
      this.setState({
        item: 'loading',
      })
    }
  }

  render() {

    if (!this.state.item) {
      return <span>Select a item from a list, please</span>;
    }

    if (this.state.item === 'loading') {
      return (
          <div className="person-details card">
            <Loader />
          </div>)
    }

    const { item, image } = this.state;

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image}
          alt="character"
        />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
              {
                React.Children.map(this.props.children, (child) => {
                  return React.cloneElement(child, { item });
                })
              }
          </ul>
        </div>
      </div>
    )
  }
}
