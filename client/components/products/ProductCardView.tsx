import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./productCardView.styles";
import * as img from "../../constants/images";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
function ProductCardView() {
  const navigation = useNavigation();
  return (
    // @ts-expect-error
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={img.slide1} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.supplier}>supplier</Text>
          <Text style={styles.price}>$121</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCardView;
