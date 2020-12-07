import React, { memo } from "react";
import { Image } from "react-native";

import { COLORS, ICONS, IconsType } from "../../configs";
import { scale } from "../../utils";

interface Props {
  size?: number;
  name: IconsType;
  color?: string;
}

const Component = ({ size, name, color }: Props) => (
  <Image
    source={ICONS[name]}
    style={{ width: size, height: size, tintColor: color }}
  />
);

Component.defaultProps = {
  size: scale(6),
  color: COLORS.black,
};

export default memo(Component);
