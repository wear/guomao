import React from 'react';
import { Dimensions, StyleSheet, ScrollView, View, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default class App extends React.Component {
  render() {
    return (
      <ImageZoom
        cropWidth={Dimensions.get('window').width}
        cropHeight={Dimensions.get('window').height}
        imageWidth={950}
        imageHeight={1280}
        enableCenterFocus={false}>
        <Image source={require('./timetable.jpg')} style={styles.imageStyle} />
      </ImageZoom>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  scrollViewStyle:{
  },
  imageStyle: {
    width: 950,
    height: 1280
  }
});