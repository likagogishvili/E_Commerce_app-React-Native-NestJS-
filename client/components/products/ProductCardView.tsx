import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./productCardView.styles";
import * as img from "../../constants/images";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { ProductCardViewProps } from "../../types/dataTypes";

function ProductCardView({ item }: ProductCardViewProps) {
  const navigation = useNavigation();
  return (
    // @ts-expect-error
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", { item })}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageURL }} style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.supplier}>{item.supplier}</Text>
          <Text style={styles.price}>$100</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default ProductCardView;
