import {StyleSheet, Text, View, Pressable} from 'react-native';

const App = () => {
  return (
    <View>
      <Pressable
        onPres={() => {
          console.warn('escolhi musica');
        }}>
        <Text>Ouvir</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
