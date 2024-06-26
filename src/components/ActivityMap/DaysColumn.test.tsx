import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import DaysColumn from './DaysColumn';
import styles from './DaysColumn.module.css';

describe('DaysColumn Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<DaysColumn />);
        expect(container).toBeInTheDocument();
    });

    it('renders the correct days', () => {
        const { getByText } = render(<DaysColumn />);

        expect(getByText('Mon')).toBeInTheDocument();
        expect(getByText('Wed')).toBeInTheDocument();
        expect(getByText('Fri')).toBeInTheDocument();
    });

    it('applies the correct class name for styling', () => {
        const { container } = render(<DaysColumn />);
        const daysColumnDiv = container.firstChild;

        expect(daysColumnDiv).toHaveClass(styles.daysColumn);
    });

    it('renders the correct number of days', () => {
        const { container } = render(<DaysColumn />);
        const paragraphs = container.querySelectorAll('p');

        expect(paragraphs.length).toBe(3);
    });

    it('renders days in the correct order', () => {
        const { container } = render(<DaysColumn />);
        const paragraphs = container.querySelectorAll('p');

        const days = ['Mon', 'Wed', 'Fri'];
        paragraphs.forEach((paragraph, index) => {
            expect(paragraph).toHaveTextContent(days[index]);
        });
    });
});
