import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import MonthsRow from './MonthsRow';
import { ActivityMapInterface } from '@/interfaces/ActivityMapInterface';
import {Week} from "@/interfaces/Week";

// eslint-disable-next-line react/display-name
jest.mock('./MonthTitle', () => ({ month, multiplier }: any) => (
    <div data-testid="month-title">
        {month}: {multiplier}
    </div>
));

describe('MonthsRow Component', () => {
    const mockWeek: Week = {
        week: 1609459200, // January 1, 2021 (in seconds since Unix epoch)
        days: [0, 1, 2, 3, 4, 5, 6],
        total: 100
    };
    const mockWeeksByMonth = [4, 4, 4, 4, 5, 4, 4, 4, 4, 5, 4, 4]; // Example weeks per month

    it('renders without crashing', () => {
        const { container } = render(<MonthsRow week={mockWeek} weeksByMonth={mockWeeksByMonth} />);
        expect(container).toBeInTheDocument();
    });

    it('renders 12 MonthTitle components', () => {
        const { getAllByTestId } = render(<MonthsRow week={mockWeek} weeksByMonth={mockWeeksByMonth} />);
        const monthTitles = getAllByTestId('month-title');

        expect(monthTitles.length).toBe(12);
    });
});
