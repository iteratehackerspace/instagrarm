import React, {Component} from 'react'

import {
  View,
  Image,
  Text
} from  'react-native'
import FooterTabs  from  '../components/mainFooter'

export default class Main extends Component {
  render()  {
    return(
      <View>
        <Text>
          Hello
        </Text>
        <FooterTabs/>
      </View>
    )
  }
}
