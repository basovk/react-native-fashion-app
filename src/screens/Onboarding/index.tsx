import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

// custom
import Slide, {SLIDE_HEIGHT} from './Slide';

const {width} = Dimensions.get('window');

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}>
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Excentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <View style={styles.overlay} />
        <View style={styles.content} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: 75,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 75,
  },
  footer: {
    flex: 1,
  },
});

export default OnboardingScreen;
