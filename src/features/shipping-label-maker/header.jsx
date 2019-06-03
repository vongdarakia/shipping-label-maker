import React from 'react';

const Header = (props) => {
    const { progress } = props;

    return (
        <div className="shipping-label-maker-header">
            <h4>Shipping Label Maker</h4>

            <div className="progress">
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${progress * 100}%` }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                />
            </div>
        </div>
    );
};

export default Header;
