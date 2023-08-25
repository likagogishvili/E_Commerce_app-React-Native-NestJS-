import React from "react";
import { StyleSheet, View } from "react-native";
//@ts-expect-error
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";
import * as images from "../../constants/images";

function Carousel() {
  const slides = [
    images.slide1,
    images.slide2,
    images.slide3,
    images.slide4,
    images.slide5,
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageCocomponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTom: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
}

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
