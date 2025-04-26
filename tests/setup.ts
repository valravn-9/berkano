import '../i18n/test-i18n';

jest.mock('@expo/vector-icons', () => {
  const mockReact = require('react');
  const MockIcon = (props: any) => {
    return mockReact.createElement('svg', props, null);
  };
  return {
    FontAwesome6: MockIcon,
  };
});
