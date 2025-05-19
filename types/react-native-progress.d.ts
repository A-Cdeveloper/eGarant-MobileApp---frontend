declare module "react-native-progress/Bar" {
  import { Component } from "react";
  import { ViewStyle } from "react-native";

  export interface ProgressBarProps {
    progress?: number;
    indeterminate?: boolean;
    width?: number;
    height?: number;
    color?: string;
    unfilledColor?: string;
    borderColor?: string;
    borderRadius?: number;
    borderWidth?: number;
    animationType?: "decay" | "spring" | "timing";
    useNativeDriver?: boolean;
    style?: ViewStyle;
  }

  export default class ProgressBar extends Component<ProgressBarProps> {}
}
