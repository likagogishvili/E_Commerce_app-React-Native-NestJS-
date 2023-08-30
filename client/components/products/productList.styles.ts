import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  containerProd: {
    alignItems: "center",
    paddingTop: 100,
    paddingLeft: SIZES.small / 2,
    backgroundColor: COLORS.black,
  },
  separator: {
    height: 16,
  },
});
export default styles;
