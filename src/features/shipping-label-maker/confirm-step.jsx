import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-action';
import ShippingOption from './shipping-options';

class Confirm extends React.Component {
    confirm = () => {
        const { onAction } = this.props;
        onAction(WizardAction.end);
    };

    goPrev = () => {
        const { onAction } = this.props;
        onAction(WizardAction.prev);
    };

    render() {
        const {
            wizardContext: { to, from, weight, shippingOption },
        } = this.props;
        const shippingRate = 0.4;
        const shippingCost =
            weight *
            shippingRate *
            (shippingOption === ShippingOption.ground ? 1 : 1.5);

        return (
            <div>
                <div className="section-form">
                    <h4 className="prompt">Confirmation</h4>
                    <div className="addresses">
                        <div className="card">
                            <div className="card-header">Sender's address</div>
                            <div className="card-body">
                                <div>{from.name}</div>
                                <div>{from.street}</div>
                                <div>{`${from.city}, ${from.state} ${
                                    from.zip
                                }`}</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                Receiver's address
                            </div>
                            <div className="card-body">
                                <div>{to.name}</div>
                                <div>{to.street}</div>
                                <div>{`${to.city}, ${to.state} ${to.zip}`}</div>
                            </div>
                        </div>
                    </div>
                    <div className="shipping-cost text-monospace">
                        <div className="line-item">
                            <div className="name">Shipping rate:</div>
                            <div className="value">$0.40</div>
                        </div>

                        <div className="line-item">
                            <div className="name">Shipping option:</div>
                            <div className="value">
                                {shippingOption === ShippingOption.priority
                                    ? '(priority) x 1.5'
                                    : '(ground) x 1.0'}
                            </div>
                        </div>

                        <div className="line-item">
                            <div className="name">Weight:</div>
                            <div className="value">x {weight.toFixed(1)}</div>
                        </div>

                        <hr />
                        <div className="line-item">
                            <div className="name">Total:</div>
                            <div className="value">
                                ${shippingCost.toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section-actions">
                    <button
                        id="btn-prev"
                        className="btn btn-primary"
                        onClick={this.goPrev}
                    >
                        Prev
                    </button>
                    <button
                        id="btn-next"
                        className="btn btn-success"
                        onClick={this.confirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        );
    }
}

Confirm.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Confirm;
