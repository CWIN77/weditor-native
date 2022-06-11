import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import * as React from 'react'
import { StatusBar } from 'react-native'
import { WebView } from 'react-native-webview'

const customUserAgent = 'customUserAgent';
export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor='#1A1A1A' barStyle='light-content' />
        <WebView
          source={{ uri: 'https://weditor-firebase.web.app/' }}
          // To avoid 403 disallowed useragent
          userAgent={customUserAgent}
          sharedCookiesEnabled={true}
          thirdPartyCookiesEnabled={true}
        />
      </>
    )
  }
}