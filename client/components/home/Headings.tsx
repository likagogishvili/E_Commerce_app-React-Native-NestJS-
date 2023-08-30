import { Text, View, TouchableOpacity } from "react-native";
import styles from "./headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
function Headings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        {/* @ts-ignore */}
        <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Headings;
