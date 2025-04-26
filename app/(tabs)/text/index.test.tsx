import React from 'react';
import { render } from '@testing-library/react-native';
import TextScreen from './index';

describe('TextScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<TextScreen />);
    expect(getByText('Text')).toBeTruthy();
  });
});
