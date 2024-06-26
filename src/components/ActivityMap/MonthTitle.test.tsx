import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthTitle from './MonthTitle';

describe('MonthTitle Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<MonthTitle month="Jan" multiplier={4} />);
        expect(container).toBeInTheDocument();
    });

    it('displays the correct month', () => {
        const { getByText } = render(<MonthTitle month="Jan" multiplier={4} />);
        expect(getByText('Jan')).toBeInTheDocument();
    });

    it('applies the correct width based on the multiplier', () => {
        const multiplier = 4;
        const { getByText } = render(<MonthTitle month="Jan" multiplier={multiplier} />);
        const monthElement = getByText('Jan');

        expect(monthElement).toHaveStyle(`width: ${14 * multiplier}px`);
    });

    it('handles different multipliers correctly', () => {
        const { getByText, rerender } = render(<MonthTitle month="Feb" multiplier={5} />);
        const monthElement = getByText('Feb');

        expect(monthElement).toHaveStyle(`width: ${14 * 5}px`);

        rerender(<MonthTitle month="Mar" multiplier={3} />);
        expect(getByText('Mar')).toHaveStyle(`width: ${14 * 3}px`);
    });

    it('renders correctly for different months', () => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr'];
        months.forEach((month) => {
            const { getByText } = render(<MonthTitle month={month} multiplier={4} />);
            expect(getByText(month)).toBeInTheDocument();
        });
    });
});
