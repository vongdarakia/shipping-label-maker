import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-action';
import ShippingOption from './shipping-options';

class GetWeight extends React.Component {
    updateShippingOption = (e) => {
        const { onChange } = this.props;
        const shippingOption = parseInt(e.target.value);

        onChange({ shippingOption });
    };

    goNext = () => {
        const {
            onAction,
            wizardContext: { shippingOption },
        } = this.props;

        if (
            shippingOption === ShippingOption.ground ||
            shippingOption === ShippingOption.priority
        ) {
            onAction(WizardAction.next);
        }
    };

    goPrev = () => {
        const { onAction } = this.props;
        onAction(WizardAction.prev);
    };

    render() {
        const {
            wizardContext: { shippingOption },
        } = this.props;

        return (
            <div className="container-get-shipping-option">
                <form className="section-form">
                    <h4 className="prompt">Select a shipping option:</h4>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="shipping-option"
                            id="option-ground"
                            value={ShippingOption.ground}
                            onChange={this.updateShippingOption}
                            checked={shippingOption === ShippingOption.ground}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="option-ground"
                        >
                            Ground
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="shipping-option"
                            id="option-priority"
                            value={ShippingOption.priority}
                            onChange={this.updateShippingOption}
                            checked={shippingOption === ShippingOption.priority}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="option-priority"
                        >
                            Priority
                        </label>
                    </div>
                </form>
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
                        className="btn btn-primary"
                        onClick={this.goNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default GetWeight;
