import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityIndicator from './ActivityIndicator';

describe('ActivityIndicator Component', () => {
    it('renders', () => {
        render(
            <ActivityIndicator activity={5} day="Monday" color="blue" />
        );
    });

    it('renders the correct activity number and day', () => {
        const { getByText } = render(
            <ActivityIndicator activity={10} day="Tuesday" color="green" />
        );

        const tooltipText = getByText('10 contributions on Tuesday');
        expect(tooltipText).toBeInTheDocument();
    });

    it('applies the correct styles based on props', () => {
        const { container } = render(
            <ActivityIndicator activity={15} day="Wednesday" color="red" />
        );

        const tooltipDiv = container.firstChild;
        expect(tooltipDiv).toHaveStyle({
            backgroundColor: 'red',
        });
    });

    it('contains the correct class name for styling', () => {
        const { container } = render(
            <ActivityIndicator activity={20} day="Thursday" color="purple" />
        );

        const tooltipDiv = container.firstChild;
        expect(tooltipDiv).toHaveClass('tooltip');
    });
});
