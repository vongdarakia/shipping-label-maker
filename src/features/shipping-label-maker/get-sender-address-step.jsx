import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-action';
import isValidZip from '../../utils/is-valid-zip';

class GetSenderAddress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modifiedFields: {},
        };
    }
    updateName = (e) => {
        const {
            onChange,
            wizardContext: { from },
        } = this.props;
        const { modifiedFields } = this.state;
        const name = e.target.value;

        onChange({ from: { ...from, name } });
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
            wizardContext: { from },
        } = this.props;
        const { modifiedFields } = this.state;
        const street = e.target.value;

        onChange({ from: { ...from, street } });
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
            wizardContext: { from },
        } = this.props;
        const { modifiedFields } = this.state;
        const city = e.target.value;

        onChange({ from: { ...from, city } });
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
            wizardContext: { from },
        } = this.props;
        const { modifiedFields } = this.state;
        const state = e.target.value;

        onChange({ from: { ...from, state } });
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
            wizardContext: { from },
        } = this.props;
        const { modifiedFields } = this.state;
        let zip = e.target.value;

        if (zip.match(/^[0-9-]*$/) || zip === '') {
            onChange({ from: { ...from, zip } });
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
                from: { name, street, city, state, zip },
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

    render() {
        const {
            wizardContext: {
                from: { name, street, city, state, zip },
            },
        } = this.props;
        const { modifiedFields } = this.state;

        return (
            <div className="container-get-sender-address">
                <form className="section-form" id="form-sender-address">
                    <h4 className="prompt">Enter the sender's address:</h4>
                    <div className="form-row">
                        <div className="form-group horizontal">
                            <label htmlFor="sender-name" className="form-label">
                                Name:
                            </label>
                            <input
                                id="sender-name"
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
                                htmlFor="sender-street"
                                className="form-label"
                            >
                                Street:
                            </label>
                            <input
                                id="sender-street"
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
                            <label htmlFor="sender-city" className="form-label">
                                City:
                            </label>
                            <input
                                id="sender-city"
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
                                htmlFor="sender-state"
                                className="form-label"
                            >
                                State:
                            </label>
                            <input
                                id="sender-state"
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
                            <label htmlFor="sender-zip" className="form-label">
                                Zip:
                            </label>
                            <input
                                id="sender-zip"
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

GetSenderAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default GetSenderAddress;
