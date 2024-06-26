import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeatMap from './HeatMap';
import { Week } from '@/interfaces/Week';

// eslint-disable-next-line react/display-name
jest.mock('../ActivityIndicator/ActivityIndicator', () => ({ day, activity, color }: any) => (
    <div data-testid="activity-indicator" style={{ backgroundColor: color }}>
        {day}: {activity}
    </div>
));

describe('HeatMap Component', () => {
    const mockActivity: Week[] = [
        {
            week: 1609459200, // January 1, 2021 (in seconds since Unix epoch)
            days: [0, 1, 2, 3, 4, 5, 6],
            total: 100
        },
        {
            week: 1609977600, // January 8, 2021
            days: [0, 1, 2, 3, 4, 5, 6],
            total: 100
        }
    ];
    const maxActivityPerDay = 6;

    it('renders without crashing', () => {
        const { container } = render(<HeatMap activity={mockActivity} maxActivityPerDay={maxActivityPerDay} />);
        expect(container).toBeInTheDocument();
    });

    it('renders the correct number of weeks and days', () => {
        const { getAllByTestId } = render(<HeatMap activity={mockActivity} maxActivityPerDay={maxActivityPerDay} />);
        const activityIndicators = getAllByTestId('activity-indicator');

        // 2 weeks * 7 days = 14 activity indicators
        expect(activityIndicators.length).toBe(14);
    });

    it('does not render future dates', () => {
        const futureDate = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // One week in the future
        const futureActivity: Week[] = [
            {
                week: futureDate,
                days: [1, 2, 3, 4, 5, 6, 7],
                total: 100
            }
        ];

        const { queryByTestId } = render(<HeatMap activity={futureActivity} maxActivityPerDay={maxActivityPerDay} />);
        expect(queryByTestId('activity-indicator')).not.toBeInTheDocument();
    });
});
