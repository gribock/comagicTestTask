import React from 'react';
import '../styles/communications.css';

const CommunicationNumberList = (props) => {
    let communicationNumbers = props.numbers.filter((number) => {
        return number.communication_number !== null;
    });
    communicationNumbers = communicationNumbers.map((number, index) => {
        return <li key={index}>{number.communication_number}</li>;
    });
    if(communicationNumbers.length > 10) {
        communicationNumbers = communicationNumbers.slice(0, 10);
        communicationNumbers.push(<li key={communicationNumbers.length}>{"..."}</li>);
    }
    return (
        <div className="list">
            <ul>
                {communicationNumbers}
            </ul>
        </div>
    );
};

export default CommunicationNumberList;