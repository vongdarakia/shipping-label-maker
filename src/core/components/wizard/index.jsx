import React from 'react';
import PropTypes from 'prop-types';
import { WizardAction } from './wizard-action';

class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
        };
    }

    onAction = (action) => {
        const { steps, onComplete } = this.props;
        const { currentStep } = this.state;

        switch (action) {
            case WizardAction.prev:
                if (currentStep > 0) {
                    this.setState({ currentStep: currentStep - 1 });
                }
                break;
            case WizardAction.next:
                if (currentStep < steps.length - 1) {
                    this.setState({ currentStep: currentStep + 1 });
                }
                break;
            case WizardAction.end:
                onComplete();
                break;
            default:
                console.error('Bad action', action);
        }
    };

    render() {
        const { header: Header, steps, wizardContext, onChange } = this.props;
        const { currentStep } = this.state;
        const Step = steps[currentStep];

        return (
            <div>
                <Header progress={(currentStep + 1) / steps.length} />
                {Step && (
                    <div className="container-step">
                        <Step
                            wizardContext={wizardContext}
                            onAction={this.onAction}
                            onChange={onChange}
                        />
                    </div>
                )}
            </div>
        );
    }
}

Wizard.propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired,
};

export default Wizard;
