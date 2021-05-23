import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import styles from './src/styles/playerStyles';

const App = () => {
  const [progress, setProgress] = useState(0);

  let timeout = setTimeout(() => {
    setProgress(progress + 0.1);
  }, 800);
  if (progress > 1) {
    clearTimeout(timeout);
    setProgress(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.item}>
            <Icon name="arrow-left" size={25} />
          </View>

          <View style={styles.item}>
            <Text>PlaylistName</Text>
          </View>

          <View style={styles.item}>
            <View style={styles.moreInfoContainer}>
              {/* <Text style={styles.moreInfoText}>...</Text> */}
              <Image
                source={require('./src/assets/images/mmlogo.png')}
                style={styles.logo}
              />
            </View>
          </View>
          <Icon />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.albumContainer}>
          <View style={styles.album}>
            <View style={styles.emptyCircle} />
            <Image
              source={require('./src/assets/images/defaultLogo.jpeg')}
              style={styles.albumImage}
            />
          </View>
        </View>
        <View stlye={styles.footer}>
          <Progress.Bar
            progress={progress}
            height={20}
            width={380}
            color="rgba(164, 145, 227, 1)"
          />

          <View style={styles.buttonsContainer}>
            <Icon name="step-forward" size={40} color="#000" />
            <Icon name="pause-circle" size={50} color="#000" />
            <Icon name="step-backward" size={40} color="#000" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;
