import React, { ReactChild, memo } from "react";
import { KeyboardAvoidingView, Platform, ViewStyle } from "react-native";

import styles from "./styles";

interface Props {
  children: ReactChild;
  style?: ViewStyle;
}

const Component = ({ children, style }: Props) => (
  <KeyboardAvoidingView
    behavior="padding"
    style={style}
    enabled={Platform.OS === "ios"}
  >
    {children}
  </KeyboardAvoidingView>
);

Component.defaultProps = {
  style: styles.container,
};

export default memo(Component);
