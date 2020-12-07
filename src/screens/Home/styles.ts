import { StyleSheet } from "react-native";

import { COLORS } from "../../configs";
import { scale } from "../../utils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  wrapLoading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    paddingHorizontal: scale(4),
  },
  card: {
    width: "100%",
    borderRadius: scale(4),
    padding: scale(4),
    marginVertical: scale(2),
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
  wrapFooter: {
    width: "100%",
    paddingVertical: scale(10),
  },
  wrapHeader: {
    backgroundColor: COLORS.background,
    height: scale(16),
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: scale(4),
    elevation: 1,
  },
  textHeader: {
    fontSize: 24,
  },
  wrapType: {
    height: scale(10),
    marginVertical: scale(2),
  },
  buttonType: {
    backgroundColor: COLORS.black01,
    alignItems: "center",
    justifyContent: "center",
    width: scale(28),
    borderRadius: scale(2),
    marginHorizontal: scale(2),
  },
  wrapLoadingType: {
    height: scale(20),
  },
});

export default styles;
