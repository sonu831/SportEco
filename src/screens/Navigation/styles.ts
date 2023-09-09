import {bottomNavigationHeight} from './../../constants/index';
import {Colors} from './../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.orange,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: bottomNavigationHeight,
  },
});
