import React from 'react';
import { render } from '@testing-library/react-native';
import TableScreen from './index';

describe('TableScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TableScreen />);
    expect(getByText('Table')).toBeTruthy();
  });
});
