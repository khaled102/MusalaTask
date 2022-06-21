import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '89%',
    marginTop: 16,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    marginLeft: 7,
    color: 'blue',
    alignSelf: 'flex-start',
    fontWeight: '600',
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    marginLeft: 7,
    marginRight: 2,
    color: '#000000',
    alignSelf: 'flex-start',
    fontWeight: 'normal',
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#9c9c9c',
    fontWeight: 'normal',
  },
});

export default styles;
