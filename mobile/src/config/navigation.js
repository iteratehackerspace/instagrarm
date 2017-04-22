
import {StackNavigator, TabNavigator} from 'react-navigation'



import Main from '../screens/main'
export default ScreenStack = new StackNavigator({
  MainScreen: {
    screen: Main,
    navigationOptions:  {
      title: 'instagrarm',
      headerStyle:  {
        elevation: 0,
        shadowOpacity: 0,
        height: 50,
        backgroundColor: '#59ABE3',
      },
      footerOptions: {
        visible: true
      }
    },
  }
})
