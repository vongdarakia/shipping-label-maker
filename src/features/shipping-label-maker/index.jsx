import React from 'react';
import Wizard from '../../core/components/wizard';
import Header from './header';
import GetSenderAddress from './get-sender-address-step';
import GetReceiverAddress from './get-receiver-address-step';
import GetWeight from './get-weight-step';
import GetShippingOption from './get-shipping-option-step';
import Confirm from './confirm-step';

import './index.css';

class ShippingLabelMaker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shippingInfo: {
                from: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: '',
                },
                to: {
                    name: '',
                    street: '',
                    city: '',
                    state: '',
                    zip: '',
                },
                weight: 0,
                shippingOption: 1,
            },
            steps: [
                GetSenderAddress,
                GetReceiverAddress,
                GetWeight,
                GetShippingOption,
                Confirm,
            ],
        };
    }

    updateShippingInfo = (shippingInfoUpdates) => {
        this.setState({
            shippingInfo: {
                ...this.state.shippingInfo,
                ...shippingInfoUpdates,
            },
        });
    };

    completeShippingLabel = () => {
        const { shippingInfo } = this.state;
        // Prints label
        console.log(shippingInfo);
    };

    render() {
        const { shippingInfo, steps } = this.state;
        return (
            <div className="shipping-label-maker">
                <Wizard
                    wizardContext={shippingInfo}
                    header={Header}
                    steps={steps}
                    onComplete={this.completeShippingLabel}
                    onChange={this.updateShippingInfo}
                />
            </div>
        );
    }
}

export default ShippingLabelMaker;
