import React from 'react';

// Components
import ErrorIndicator from "../error-indicator";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../row';

// Service
import SwapiService from "../../services/swapi-service";

// Styles
import './people-page.css';


export default class PeoplePage extends React.Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ hasError: true })
    }

    onPersonSelected = (id) => {
        this.setState( {
            selectedPerson: id
        })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                //рендер-функция
                >
                {(i) => (`${i.name} (${i.gender})`)}
            </ItemList>
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        )

        return (
           <Row left={itemList} right={personDetails}/>
        );
    }
};

