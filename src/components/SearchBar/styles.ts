import {Colors} from '../../constants/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray1,
    height: 46,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.white,
    marginBottom: 36,
  },
  searchIcon: {
    marginRight: 13,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: Colors.gray1,
  },
});
