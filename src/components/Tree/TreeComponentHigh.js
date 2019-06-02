import React, {Component} from 'react';
import TreeComponentMidle from './TreeComponentMidle';

class TreeComponentHigh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: false
        }
    }
    render() {
        const campaignNames = this.props.data.campaign_names.map((name, index) => { 
            return (
                <TreeComponentMidle
                    key={index}
                    data={name}
                    handleToLowTree={this.props.handleToLowTree}
                />
            );
        })
        return (
            <li>
                <span onClick={() => {
                    this.setState({isShow: !this.state.isShow});
                }}>                    
                    {`${this.props.data.site_domain_name} ${this.props.data.campaign_names.reduce((acc, item) => {
                        return (acc + item.communication_types.reduce((acc2, item2) => {
                            return (acc2 + item2.communication_numbers.length);
                        }, 0));//.length); 
                    }, 0)} обращений.`}
                </span>
                {this.state.isShow && 
                    <ul>
                        {campaignNames}
                    </ul>
                }
            </li>
        );
    }
}


export default TreeComponentHigh;