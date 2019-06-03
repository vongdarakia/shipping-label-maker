import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShippingLabelMaker from '.';

Enzyme.configure({ adapter: new Adapter() });

const fillSenderAddressAndGoNext = (shippingLabelMaker) => {
    shippingLabelMaker
        .find('#sender-name')
        .simulate('change', { target: { value: 'John Smith' } });
    shippingLabelMaker
        .find('#sender-street')
        .simulate('change', { target: { value: '131 Dartmouth St' } });
    shippingLabelMaker
        .find('#sender-city')
        .simulate('change', { target: { value: 'Boston' } });
    shippingLabelMaker
        .find('#sender-state')
        .simulate('change', { target: { value: 'MA' } });
    shippingLabelMaker
        .find('#sender-zip')
        .simulate('change', { target: { value: '02116' } });
    shippingLabelMaker.find('#btn-next').simulate('click');
};

const fillReceiverAddressAndGoNext = (shippingLabelMaker) => {
    shippingLabelMaker
        .find('#receiver-name')
        .simulate('change', { target: { value: 'Linda Jackson' } });
    shippingLabelMaker
        .find('#receiver-street')
        .simulate('change', { target: { value: '40 Fulton St' } });
    shippingLabelMaker
        .find('#receiver-city')
        .simulate('change', { target: { value: 'New York' } });
    shippingLabelMaker
        .find('#receiver-state')
        .simulate('change', { target: { value: 'NY' } });
    shippingLabelMaker
        .find('#receiver-zip')
        .simulate('change', { target: { value: '10038' } });
    shippingLabelMaker.find('#btn-next').simulate('click');
};

const fillWeightAndGoNext = (shippingLabelMaker) => {
    shippingLabelMaker
        .find('#shipping-weight')
        .simulate('change', { target: { value: 2 } });
    shippingLabelMaker.find('#btn-next').simulate('click');
};

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ShippingLabelMaker />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe("Test get sender's address click next", () => {
    it('Test click next button without user input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);
        shippingLabelMaker.find('#btn-next').simulate('click');
        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });

    it('Test click next button with all inputs filled', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-name')
            .simulate('change', { target: { value: 'John Smith' } });
        shippingLabelMaker
            .find('#sender-street')
            .simulate('change', { target: { value: '131 Dartmouth St' } });
        shippingLabelMaker
            .find('#sender-city')
            .simulate('change', { target: { value: 'Boston' } });
        shippingLabelMaker
            .find('#sender-state')
            .simulate('change', { target: { value: 'MA' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '02116' } });
        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad name input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-street')
            .simulate('change', { target: { value: '131 Dartmouth St' } });
        shippingLabelMaker
            .find('#sender-city')
            .simulate('change', { target: { value: 'Boston' } });
        shippingLabelMaker
            .find('#sender-state')
            .simulate('change', { target: { value: 'MA' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '02116' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad street input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-name')
            .simulate('change', { target: { value: 'John Smith' } });
        shippingLabelMaker
            .find('#sender-city')
            .simulate('change', { target: { value: 'Boston' } });
        shippingLabelMaker
            .find('#sender-state')
            .simulate('change', { target: { value: 'MA' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '02116' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad city input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-name')
            .simulate('change', { target: { value: 'John Smith' } });
        shippingLabelMaker
            .find('#sender-street')
            .simulate('change', { target: { value: '131 Dartmouth St' } });
        shippingLabelMaker
            .find('#sender-state')
            .simulate('change', { target: { value: 'MA' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '02116' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad state input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-name')
            .simulate('change', { target: { value: 'John Smith' } });
        shippingLabelMaker
            .find('#sender-street')
            .simulate('change', { target: { value: '131 Dartmouth St' } });
        shippingLabelMaker
            .find('#sender-city')
            .simulate('change', { target: { value: 'Boston' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '02116' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad zip input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        shippingLabelMaker
            .find('#sender-name')
            .simulate('change', { target: { value: 'John Smith' } });
        shippingLabelMaker
            .find('#sender-street')
            .simulate('change', { target: { value: '131 Dartmouth St' } });
        shippingLabelMaker
            .find('#sender-city')
            .simulate('change', { target: { value: 'Boston' } });
        shippingLabelMaker
            .find('#sender-state')
            .simulate('change', { target: { value: 'MA' } });
        shippingLabelMaker
            .find('#sender-zip')
            .simulate('change', { target: { value: '323' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
    });
});

describe("Test get receiver's address click next", () => {
    it('Test click next button without user input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);
        fillSenderAddressAndGoNext(shippingLabelMaker);

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with all inputs filled', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-name')
            .simulate('change', { target: { value: 'Linda Jackson' } });
        shippingLabelMaker
            .find('#receiver-street')
            .simulate('change', { target: { value: '40 Fulton St' } });
        shippingLabelMaker
            .find('#receiver-city')
            .simulate('change', { target: { value: 'New York' } });
        shippingLabelMaker
            .find('#receiver-state')
            .simulate('change', { target: { value: 'NY' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '10038' } });
        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Enter the shipment weight:'),
        ).toBe(true);
    });

    it('Test click next button with bad name input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-street')
            .simulate('change', { target: { value: '40 Fulton St' } });
        shippingLabelMaker
            .find('#receiver-city')
            .simulate('change', { target: { value: 'New York' } });
        shippingLabelMaker
            .find('#receiver-state')
            .simulate('change', { target: { value: 'NY' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '10038' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad street input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-name')
            .simulate('change', { target: { value: 'Linda Jackson' } });
        shippingLabelMaker
            .find('#receiver-city')
            .simulate('change', { target: { value: 'New York' } });
        shippingLabelMaker
            .find('#receiver-state')
            .simulate('change', { target: { value: 'NY' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '10038' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad city input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-name')
            .simulate('change', { target: { value: 'Linda Jackson' } });
        shippingLabelMaker
            .find('#receiver-street')
            .simulate('change', { target: { value: '40 Fulton St' } });
        shippingLabelMaker
            .find('#receiver-state')
            .simulate('change', { target: { value: 'NY' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '10038' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad state input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-name')
            .simulate('change', { target: { value: 'Linda Jackson' } });
        shippingLabelMaker
            .find('#receiver-street')
            .simulate('change', { target: { value: '40 Fulton St' } });
        shippingLabelMaker
            .find('#receiver-city')
            .simulate('change', { target: { value: 'New York' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '10038' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });

    it('Test click next button with bad zip input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#receiver-name')
            .simulate('change', { target: { value: 'Linda Jackson' } });
        shippingLabelMaker
            .find('#receiver-street')
            .simulate('change', { target: { value: '40 Fulton St' } });
        shippingLabelMaker
            .find('#receiver-city')
            .simulate('change', { target: { value: 'New York' } });
        shippingLabelMaker
            .find('#receiver-state')
            .simulate('change', { target: { value: 'NY' } });
        shippingLabelMaker
            .find('#receiver-zip')
            .simulate('change', { target: { value: '323' } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
    });
});

describe('Test get weight click next', () => {
    it('Test click next button without user input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);
        fillReceiverAddressAndGoNext(shippingLabelMaker);
        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Enter the shipment weight:'),
        ).toBe(true);
    });

    it('Test click next button with weight as 0', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);
        fillReceiverAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#shipping-weight')
            .simulate('change', { target: { value: 0 } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Enter the shipment weight:'),
        ).toBe(true);
    });

    it('Test click next button with weight as a positive number', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);
        fillReceiverAddressAndGoNext(shippingLabelMaker);

        shippingLabelMaker
            .find('#shipping-weight')
            .simulate('change', { target: { value: 1 } });

        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Select a shipping option:'),
        ).toBe(true);
    });
});

describe('Test get shipping option click next', () => {
    it('Test click next button without user input', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);
        fillReceiverAddressAndGoNext(shippingLabelMaker);
        fillWeightAndGoNext(shippingLabelMaker);
        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Confirmation'),
        ).toBe(true);
    });
});

describe('Test click prev button', () => {
    it('Test all prev buttons', () => {
        const shippingLabelMaker = mount(<ShippingLabelMaker />);

        fillSenderAddressAndGoNext(shippingLabelMaker);
        shippingLabelMaker.find('#btn-prev').simulate('click');
        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the sender's address:"),
        ).toBe(true);
        shippingLabelMaker.find('#btn-next').simulate('click');

        fillReceiverAddressAndGoNext(shippingLabelMaker);
        shippingLabelMaker.find('#btn-prev').simulate('click');
        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes("Enter the receiver's address:"),
        ).toBe(true);
        shippingLabelMaker.find('#btn-next').simulate('click');

        fillWeightAndGoNext(shippingLabelMaker);
        shippingLabelMaker.find('#btn-prev').simulate('click');
        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Enter the shipment weight:'),
        ).toBe(true);
        shippingLabelMaker.find('#btn-next').simulate('click');

        shippingLabelMaker.find('#btn-next').simulate('click');
        shippingLabelMaker.find('#btn-prev').simulate('click');
        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Select a shipping option:'),
        ).toBe(true);
        shippingLabelMaker.find('#btn-next').simulate('click');

        expect(
            shippingLabelMaker
                .find('.prompt')
                .text()
                .includes('Confirmation'),
        ).toBe(true);
    });
});
