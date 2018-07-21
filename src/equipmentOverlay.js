import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

class EquipmentOverlay extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.grid,
          {
            position: "absolute",
            left: parseInt(this.props.left),
            top: parseInt(this.props.top),
            width: 200,
            height: 50,
            backgroundColor: "rgba(255, 255, 255, 0.8)"
          }
        ]}
      >
        <Text
          style={{
            color: "orange",
            textAlign: "center"
          }}
        >
          {this.props.title}
        </Text>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
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
export default EquipmentOverlay;
