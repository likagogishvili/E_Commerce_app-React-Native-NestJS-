import { ActivityIndicator, FlatList, Text, View } from "react-native";
import styles from "./productList.styles";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
import UseFetch from "../../hook/useFetch";
import { ProductCardViewProps } from "../../types/dataTypes";
function ProductList() {
  const { furniture, isLoading, error } = UseFetch();
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.containerProd}>
      <FlatList
        data={furniture}
        numColumns={2}
        renderItem={({ item }) => <ProductCardView item={item} />}
        contentContainerStyle={styles.containerProd}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

export default ProductList;
