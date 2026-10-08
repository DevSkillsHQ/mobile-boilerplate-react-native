/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: NavigatorScreenParams<TabOneParamList> | undefined;
  TabTwo: NavigatorScreenParams<TabTwoParamList> | undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
