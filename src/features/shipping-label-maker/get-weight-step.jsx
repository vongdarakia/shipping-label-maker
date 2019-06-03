import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from '../../core/components/wizard/wizard-action';

class GetWeight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modifiedFields: {},
        };
    }

    updateWeight = (e) => {
        const { onChange } = this.props;
        const { modifiedFields } = this.state;
        let weight;

        try {
            weight = parseInt(e.target.value);

            if (Number.isNaN(weight)) {
                weight = 0;
            }
        } catch (error) {
            weight = 0;
        }

        onChange({ weight });
        this.setState({
            modifiedFields: {
                ...modifiedFields,
                weight: true,
            },
        });
    };

    goNext = () => {
        const {
            onAction,
            wizardContext: { weight },
        } = this.props;

        const hasInvalidFields =
            document.getElementsByClassName('is-invalid').length > 0;

        if (!hasInvalidFields && weight > 0) {
            onAction(WizardAction.next);
        }
    };

    goPrev = () => {
        const { onAction } = this.props;
        onAction(WizardAction.prev);
    };

    preventSubmit = (e) => {
        e.preventDefault();
        return false;
    };

    render() {
        const {
            wizardContext: { weight },
        } = this.props;
        const { modifiedFields } = this.state;

        return (
            <div className="container-get-weight">
                <form className="section-form" onSubmit={this.preventSubmit}>
                    <h4 className="prompt">Enter the shipment weight:</h4>
                    <div className="form-row">
                        <div className="form-group horizontal">
                            <label
                                htmlFor="shipping-weight"
                                className="form-label"
                            >
                                Weight:
                            </label>
                            <input
                                id="shipping-weight"
                                className={`form-control ${
                                    modifiedFields.weight && weight === 0
                                        ? 'is-invalid'
                                        : ''
                                }`}
                                value={weight}
                                name="weight"
                                onChange={this.updateWeight}
                            />
                        </div>
                        {modifiedFields.weight && weight === 0 && (
                            <div className="text-danger">
                                Weight must be greater that 0
                            </div>
                        )}
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
