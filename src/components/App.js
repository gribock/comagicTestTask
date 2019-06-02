import React, { Component } from 'react';
import TreeComponentHigh from './Tree/TreeComponentHigh';
import DateRangeSelector from './DateRangeSelector';
import CommunicationNumberList from './CommunicationNumberList';
import '../styles/App.css';
import '../styles/tree.css';
import comapiRequest from '../comapiRequest';
import composeer from '../data_composer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isFetch: false,
      dateFrom: new Date(),
      dateTill: new Date(),
      numbersList: []
    };
  }

  handleDateFromChange = (date) => {
    this.setState({
      ...this.state,
      dateFrom: date
    });
  }

  handleDateTillChange = (date) => {
    this.setState({
      ...this.state,
      dateTill: date
    });
  }

  handleSetNumbersList = (list) => {
    this.setState({
      ...this.state,
      numbersList: list
    });
    console.log(this.state);
  }

  fetchToApi = () => {
    this.setState({
      ...this.state,
      isFetch: true
    });
    comapiRequest(this.state.dateFrom, this.state.dateTill)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('NetworkError');
      })
      .then((response) => {
        const data = response.result.data;
        this.setState({
          ...this.state,
          groupedData: composeer(data),
          isFetch: false
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log('AAAA');
        console.log(error);
      });
  }

  render() {
    let domains;
    if (this.state.groupedData) {
      domains = this.state.groupedData.map((domain, index) => {
        return (
          <TreeComponentHigh
            key={index}
            data={domain}
            handleToLowTree={this.handleSetNumbersList}
          />
        );
      });
    }
    return (
      <div className="App">
        <DateRangeSelector 
          dateFrom={this.state.dateFrom}
          dateTill={this.state.dateTill}
          handleClickFrom={this.handleDateFromChange}
          handleClickTill={this.handleDateTillChange}
          handleFetchClick={this.fetchToApi}
        />
        <div className="tree">
          {this.state.isFetch? "Данные обрабатываются..." : <ul>{domains}</ul>}          
        </div>
        <CommunicationNumberList 
          numbers={this.state.numbersList}
        />
      </div>
    );
  }
}

export default App;
