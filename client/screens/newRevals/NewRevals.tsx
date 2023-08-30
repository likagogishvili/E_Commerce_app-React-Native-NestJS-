import { Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "./newRevals.style";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../constants";
import { ProductList } from "../../components";

function NewRevals() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
}

export default NewRevals;
