import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 25,
    resizeMode: 'contain',
  },

  contactButton: {
    display: 'flex',
    width: 100,
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'black',
    borderRadius: 5,
  },

  contactButtonText: {
    color: 'white',
    fontSize: 12,
  },

  contactButtonIcon: {
    width: 10,
    height: 10,
    marginLeft: 5,
    tintColor: 'white',
  },
  comingSoon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  comingText: {
    fontSize: 12,
    fontWeight: '500',
  },
  divider: {
    width: 20,
    marginEnd: 5,
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  title: {
    fontSize: 36,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: '900',
    fontFamily: 'Inter-Bold',
  },
  storeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeImage: {
    width: 120,
    resizeMode: 'contain',
  },
  landingImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  textInputContainer: {
    flexDirection: 'row',
    width: '95%',
    height: 45,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
  },
  textInput: {
    height: 45,
    width: '70%',
    backgroundColor: 'transparent',
    padding: 15,
  },
  notifyButton: {
    display: 'flex',
    width: 90,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
  },
  notifyButtonText: { color: 'white', fontSize: 12 },
  flatListItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  bottomDivider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 20,
  },
  footer: { textAlign: 'center', paddingBottom: 10, fontSize: 12 },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});
