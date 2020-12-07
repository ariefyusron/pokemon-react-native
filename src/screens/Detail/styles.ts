import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";
import { scale } from "../../utils";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: scale(4),
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
  },
  wrapTitle: {
    flexDirection: "row",
  },
  marginLeft: {
    marginLeft: scale(4),
  },
  wrapTypeName: {
    flex: 1,
    marginRight: scale(2),
    borderRadius: scale(2),
    backgroundColor: COLORS.black01,
    alignItems: "center",
    paddingVertical: scale(1),
    marginTop: scale(2),
  },
  wrapImage: {
    backgroundColor: COLORS.white06,
    width: scale(16),
    height: scale(16),
    borderRadius: scale(16) / 2,
    marginLeft: scale(2),
  },
  image: {
    width: "120%",
    height: "120%",
  },
  body: {
    paddingHorizontal: scale(4),
    marginTop: scale(4),
  },
  card: {
    backgroundColor: COLORS.white,
    padding: scale(4),
    borderRadius: scale(4),
    width: "100%",
    marginTop: scale(2),
  },
  wrapCard: {
    alignItems: "center",
  },
  wrapItemStats: {
    flexDirection: "row",
    marginVertical: scale(2),
    alignItems: "center",
  },
  wrapSizeStats: {
    height: scale(6),
    width: "53%",
    flexDirection: "row",
  },
  sizeStats: {
    borderTopRightRadius: scale(2),
    borderBottomRightRadius: scale(2),
    height: "100%",
  },
});

export default styles;
