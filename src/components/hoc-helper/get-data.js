import React, { Component } from 'react';
import ErrorIndicator from "../error-indicator";
import Loader from "../loader";

const GetData = (SomeComponent, getData) => {
    return class extends Component {
        state = {
            data: null,
        };

        componentDidMount() {
            getData()
                .then(this.onItemListLoaded)
        };

        onItemListLoaded = (data) => {
            this.setState({
                data,
            });
        };


        render() {
            const { data } = this.state;

            if (!data) {
                return <Loader />
            }

            // const errorMessage = error ? <ErrorIndicator /> : null;
            // const loader = loading ? <Loader /> : null;

            return <SomeComponent {...this.props} data={data}/>;
        }
    };
};

export default GetData;
