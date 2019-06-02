import React from 'react';

const TreeComponentLow = (props) => {
    return (
        <li>
            <span
                onClick={() => props.handleNumberList(props.data.communication_numbers)}
            >
                {`${props.data.communication_type} ${props.data.communication_numbers.length} обращений.`}
            </span>
        </li>
    );
};

export default TreeComponentLow;