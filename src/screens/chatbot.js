import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Chatbot extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default Chatbot;