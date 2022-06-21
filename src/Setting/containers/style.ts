import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  itemCard: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.2,
    borderColor: '#000',
    height: 80,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  toggleCard: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0.2,
    borderColor: '#000',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingItem: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
