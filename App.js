import React from "react";
import Roleplay from "./src/roleplay.js";
import Combat from "./src/combat.js";
import Equipment from "./src/equipment.js";
import SkillSheet from "./src/skillsheet.js";

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator
} from "react-native";
import Swiper from "react-native-swiper";
import SkillSheet from "./src/skillsheet.js";

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
        //console.warn(responseJson);
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
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
          <Equipment character={this.state.dataSource} />
        <View>
          <ScrollView>
            <Roleplay character={this.state.dataSource} />
          </ScrollView>
        </View>
        <View>
          <ScrollView>
            <SkillSheet character={this.state.dataSource} />
          </ScrollView>
        </View>
        <View>
          <Combat character={this.state.dataSource} />
        </View>

        <View style={styles.slide3}>
          <Text>Party View (Coming)</Text>
        </View>
      </Swiper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
});
