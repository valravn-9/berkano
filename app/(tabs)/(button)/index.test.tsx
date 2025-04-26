import React from 'react';
import { render } from '@testing-library/react-native';
import ButtonScreen from './index';

describe('ButtonScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ButtonScreen />);
    expect(getByText('Sizes')).toBeTruthy();
    expect(getByText('Variants')).toBeTruthy();
  });
});
