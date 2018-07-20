import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

class StatBlock extends React.Component {
  render() {
    return (
      <View style={{ flex: 7, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "flex-end" }]}>
            <Text style={{ textAlign: "right" }}>Ability </Text>
          </View>
          <View style={[{ flex: 1, justifyContent: "flex-end" }]}>
            <Text style={{ textAlign: "center" }}>Score</Text>
          </View>
          <View style={[{ flex: 1, justifyContent: "flex-end" }]}>
            <Text style={{ textAlign: "center" }}>Mod</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Strength </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.str}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.strmod}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Dexterity </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.dex}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.dexmod}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Constitution </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.con}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.conmod}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Intelligence </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.int}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.intmod}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Wisdom </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.wis}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.wismod}</Text>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={[{ flex: 2, justifyContent: "center" }]}>
            <Text style={{ textAlign: "right" }}>Charisma </Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.cha}</Text>
          </View>
          <View style={[styles.grid, { flex: 1, justifyContent: "center" }]}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>{this.props.chamod}</Text>
          </View>
        </View>
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
export default StatBlock;
