import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "./productRow.style";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import UseFetch from "../../hook/useFetch";
import { FurnitureData } from "../../types/dataTypes";
function ProductRow() {
  const { furniture, isLoading, error } = UseFetch();
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={furniture}
          keyExtractor={(item: FurnitureData) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
}

export default ProductRow;
