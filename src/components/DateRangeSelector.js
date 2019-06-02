import React, {Component} from 'react';
import Calendar from 'react-calendar';
import '../styles/dateselector.css';

class DateRangeSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="dateSelector">
                <div>
                    <p>Дата от</p>
                    <Calendar 
                        onChange={this.props.handleClickFrom}
                        value={this.props.dateFrom}
                    />
                </div>
                <div>
                    <p>Дата до</p>
                    <Calendar 
                        onChange={this.props.handleClickTill}
                        value={this.props.dateTill}
                    />
                </div>
                <span>Плучить отчет от {this.props.dateFrom.toDateString()} до {this.props.dateTill.toDateString()}.</span><br/>
                <button onClick={this.props.handleFetchClick}>Получить</button>
            </div>
        );
    }
}

export default DateRangeSelector;