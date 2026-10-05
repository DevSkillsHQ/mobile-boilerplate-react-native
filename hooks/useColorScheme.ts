import { useColorScheme as _useColorScheme } from 'react-native';

// React Native reports 'light', 'dark' or 'unspecified' (null on older versions), but the
// theme only defines light and dark colors, so anything that is not dark is treated as light.
export default function useColorScheme(): 'light' | 'dark' {
  return _useColorScheme() === 'dark' ? 'dark' : 'light';
}
