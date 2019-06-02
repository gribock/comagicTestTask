import React, {Component} from 'react';
import TreeComponentLow from './TreeComponentLow';

class TreeComponentMidle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    render() {
        const communicationTypes = this.props.data.communication_types.map((type, index) => {
            return (
                <TreeComponentLow
                    key={index}
                    data={type}
                    handleNumberList={this.props.handleToLowTree}
                />
            );
        })
    
        return (
            <li>
                <span onClick={() => {
                    this.setState({isShow: !this.state.isShow});
                }}>
                    {`${this.props.data.campaign_name} ${this.props.data.communication_types.reduce((acc, item) => {
                        return (acc + item.communication_numbers.length);
                    }, 0)} обращений.`}
                </span>
                {this.state.isShow &&
                    <ul>
                        {communicationTypes}
                    </ul>
                }
            </li>
        );
    }
}




export default TreeComponentMidle;