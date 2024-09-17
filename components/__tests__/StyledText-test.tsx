import { render } from '@testing-library/react-native';

import { MonoText } from '../StyledText';

describe('<MonoText>', () => {
  test('Text renders correctly on HomeScreen', () => {
    const tree = render(<MonoText>Snapshot Test!</MonoText>);

    expect(tree).toMatchSnapshot();
  });
});