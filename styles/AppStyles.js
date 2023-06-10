import { StyleSheet } from 'react-native';
import Colors from './Colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infos: {
    fontSize: 20,
    fontFamily: 'Allan_700Bold',
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Bangers_400Regular',
    padding: 10,
  },
  profileImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    margin: 10,
  },
  profileItem: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
