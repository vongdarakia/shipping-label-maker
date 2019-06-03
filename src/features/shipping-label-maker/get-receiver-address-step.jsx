import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-action';
import isValidZip from '../../utils/is-valid-zip';

class GetReceiverAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modifiedFields: {},
        };
    }

    updateName = (e) => {
        const {
            onChange,
            wizardContext: { to },
        } = this.props;
        const { modifiedFields } = this.state;
        const name = e.target.value;

        onChange({ to: { ...to, name } });
        this.setState({
            modifiedFields: {
                ...modifiedFields,
                name: true,
            },
        });
    };

    updateStreet = (e) => {
        const {
            onChange,
            wizardContext: { to },
        } = this.props;
        const { modifiedFields } = this.state;
        const street = e.target.value;

        onChange({ to: { ...to, street } });
        this.setState({
            modifiedFields: {
                ...modifiedFields,
                street: true,
            },
        });
    };

    updateCity = (e) => {
        const {
            onChange,
            wizardContext: { to },
        } = this.props;
        const { modifiedFields } = this.state;
        const city = e.target.value;

        onChange({ to: { ...to, city } });
        this.setState({
            modifiedFields: {
                ...modifiedFields,
                city: true,
            },
        });
    };

    updateState = (e) => {
        const {
            onChange,
            wizardContext: { to },
        } = this.props;
        const { modifiedFields } = this.state;
        const state = e.target.value;

        onChange({ to: { ...to, state } });
        this.setState({
            modifiedFields: {
                ...modifiedFields,
                state: true,
            },
        });
    };

    updateZip = (e) => {
        const {
            onChange,
            wizardContext: { to },
        } = this.props;
        const { modifiedFields } = this.state;
        let zip = e.target.value;

        if (zip.match(/^[0-9-]*$/) || zip === '') {
            onChange({ to: { ...to, zip } });
            this.setState({
                modifiedFields: {
                    ...modifiedFields,
                    zip: true,
                },
            });
        }
    };

    isValidFields = () => {
        const {
            wizardContext: {
                to: { name, street, city, state, zip },
            },
        } = this.props;
        return name && street && city && state && isValidZip(zip);
    };

    goNext = () => {
        const { onAction } = this.props;
        const hasInvalidFields =
            document.getElementsByClassName('is-invalid').length > 0;

        if (this.isValidFields() && !hasInvalidFields) {
            onAction(WizardAction.next);
        } else {
            this.setState({
                modifiedFields: {
                    name: true,
                    street: true,
                    city: true,
                    state: true,
                    zip: true,
                },
            });
        }
    };

    goPrev = () => {
        const { onAction } = this.props;
        onAction(WizardAction.prev);
    };

    render() {
        const {
            wizardContext: {
                to: { name, street, city, state, zip },
            },
        } = this.props;
        const { modifiedFields } = this.state;

        return (
            <div className="container-get-receiver-address">
                <form className="section-form" id="form-receiver-address">
                    <h4 className="prompt">Enter the receiver's address:</h4>
                    <div className="form-row">
                        <div className="form-group horizontal">
                            <label
                                htmlFor="receiver-name"
                                className="form-label"
                            >
                                Name:
                            </label>
                            <input
                                id="receiver-name"
                                className={`form-control ${
                                    !name && modifiedFields.name
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={name}
                                name="name"
                                onChange={this.updateName}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group horizontal">
                            <label
                                htmlFor="receiver-street"
                                className="form-label"
                            >
                                Street:
                            </label>
                            <input
                                id="receiver-street"
                                className={`form-control ${
                                    !street && modifiedFields.street
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={street}
                                name="street"
                                onChange={this.updateStreet}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-row other-address-detail">
                        <div className="form-group horizontal form-group-city">
                            <label
                                htmlFor="receiver-city"
                                className="form-label"
                            >
                                City:
                            </label>
                            <input
                                id="receiver-city"
                                className={`form-control ${
                                    !city && modifiedFields.city
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={city}
                                name="city"
                                onChange={this.updateCity}
                                required
                            />
                        </div>
                        <div className="form-group horizontal form-group-state">
                            <label
                                htmlFor="receiver-state"
                                className="form-label"
                            >
                                State:
                            </label>
                            <input
                                id="receiver-state"
                                className={`form-control ${
                                    !state && modifiedFields.state
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={state}
                                name="state"
                                onChange={this.updateState}
                                required
                            />
                        </div>
                        <div className="form-group horizontal form-group-zip">
                            <label
                                htmlFor="receiver-zip"
                                className="form-label"
                            >
                                Zip:
                            </label>
                            <input
                                id="receiver-zip"
                                className={`form-control ${
                                    !isValidZip(zip) && modifiedFields.zip
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={zip}
                                name="zip"
                                onChange={this.updateZip}
                                required
                            />
                        </div>
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

GetReceiverAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default GetReceiverAddress;
