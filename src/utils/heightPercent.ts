import { Dimensions } from "react-native";

const height = (percent: number) =>
  (percent / 100) * Dimensions.get("window").height;

export default height;
