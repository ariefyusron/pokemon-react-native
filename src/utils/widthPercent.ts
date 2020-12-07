import { Dimensions } from "react-native";

const width = (percent: number) =>
  (percent / 100) * Dimensions.get("window").width;

export default width;
