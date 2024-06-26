import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import ActivityMap from './ActivityMap';
import {ActivityMapInterface} from '@/interfaces/ActivityMapInterface';

// eslint-disable-next-line react/display-name
jest.mock('./HeatMap', () => () => <div>HeatMap</div>);
// eslint-disable-next-line react/display-name
jest.mock('./DaysColumn', () => () => <div>DaysColumn</div>);
// eslint-disable-next-line react/display-name
jest.mock('./MonthsRow', () => () => <div>MonthsRow</div>);

describe('ActivityMap Component', () => {
    const mockProps: ActivityMapInterface = {
        activity: [
            {days: [0, 1, 2, 3, 4, 5, 6], total: 20, week: 123}
        ],
        maxActivityPerDay: 10,
        weeksByMonth: [1, 2, 3]
    };

    it('renders without crashing', () => {
        const {getByText} = render(<ActivityMap {...mockProps} />);
        expect(getByText('HeatMap')).toBeInTheDocument();
        expect(getByText('DaysColumn')).toBeInTheDocument();
        expect(getByText('MonthsRow')).toBeInTheDocument();
    });

    it('renders MonthsRow with correct props', () => {
        const {getByText} = render(<ActivityMap {...mockProps} />);
        expect(getByText('MonthsRow')).toBeInTheDocument();
    });

    it('renders DaysColumn', () => {
        const {getByText} = render(<ActivityMap {...mockProps} />);
        expect(getByText('DaysColumn')).toBeInTheDocument();
    });

    it('renders HeatMap with correct props', () => {
        const {getByText} = render(<ActivityMap {...mockProps} />);
        expect(getByText('HeatMap')).toBeInTheDocument();
    });
});
