import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

class EquipmentItem extends React.Component {
  render() {
    return (
        <View
        style={[
          styles.grid,
          {
            width: 200,
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.8)"
          }
        ]}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "left"
          }}
        >
          {this.props.gear}
        </Text>
      </View>
    );
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
export default EquipmentItem;
