import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  header: {
    height: 50,
    backgroundColor: 'rgba(164, 145, 227, 1)',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    //justifyContent: 'space-around',
  },
  item: {
    width: Dimensions.get('window').width / 3,
    paddingHorizontal: 20,
  },
  content: {
    flexGrow: 1,
    marginHorizontal: 16,
    marginVertical: 16,
    justifyContent: 'space-evenly',
  },
  moreInfoContainer: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  moreInfoText: {
    fontSize: 20,
    color: '#000',
    fontWeight: '300',
  },
  albumContainer: {
    height: 600,
    backgroundColor: 'rgba(0,0,0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCircle: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 100,
    position: 'absolute',
    elevation: 10,
    shadowColor: '#000', //poderia mudar de acordo com a cor principal da image
  },
  album: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350,
    borderRadius: 250,
    overflow: 'hidden',
  },
  albumImage: {
    // resizeMode: 'contain',
    // // flexWrap: 'wrap',
    // // flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
export default styles;
