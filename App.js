import React from "react";
import Combat from "./src/combat.js";

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      "https://s3-us-west-2.amazonaws.com/infinitegoblin/json/grak.json"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return <Combat character={this.state.dataSource}/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
    //alignItems: "center",
    //justifyContent: "center"
  },
  topline: {
    height: 70,
    backgroundColor: "orange"
    //alignItems: "center",
    //justifyContent: "center"
  },
  charname: {
    textShadowColor: "#fff",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3
  },

  grid: {
    borderWidth: 1,
    borderColor: "orange"
  },
  line2: {
    height: 300,
    backgroundColor: "white",
    flexDirection: "row"
  },
  line3: {
    height: 40,
    backgroundColor: "white",
    flexDirection: "row"
  },
  dividerline: {
    height: 10,
    backgroundColor: "orange"
    //alignItems: "center",
    //justifyContent: "right"
  }
});
