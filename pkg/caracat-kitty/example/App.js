// export { default } from './src/App';

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
  // 'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  'Inter-SemiBoldItalic':
    'https://cdn.rawgit.com/h-ibaldo/Raleway_Fixed_Numerals/master/font/rawline-100.ttf',
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Inter-Black', fontSize: 30 }}>
          Inter Black
        </Text>
        <Text style={{ fontFamily: 'Inter-SemiBoldItalic', fontSize: 30 }}>
          Inter SemiBoldItalic
        </Text>
        <Text style={{ fontSize: 30 }}>Platform Default</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
