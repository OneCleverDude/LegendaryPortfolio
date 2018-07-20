import React from 'react';

import {
    StyleSheet, Text, View, Image
} from 'react-native';

class CombatStats extends React.Component {
    render() {
        return (
            <View style={{ flex: 12 }}>
            <View style={{ height: 100, flexDirection: "row" }}>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/heart.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 38,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    46
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Max: 47
                  </Text>
                </View>
              </View>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/shield.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    AC:16
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Touch: 12
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Flat: 16
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    CMD: 20
                  </Text>
                </View>
              </View>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/boot.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    40' Move
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    10' Climb (+5)
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    10' Swim (+3)
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/swords.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    +4 Base
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    +8 CMB
                  </Text>
                </View>
              </View>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/init.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 24,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    +2 Init
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    +9 Perception
                  </Text>
                </View>
              </View>
              <View style={[{ height: 100, width: 100 }]}>
                <View style={{ position: "absolute" }}>
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Image
                      style={{ alignSelf: "center" }}
                      source={require("./../images/torch.png")}
                      resizeMode="center"
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      textAlign: "center",
                      fontWeight: "600"
                    }}
                  >
                    Normal Vision
                  </Text>
                  <Text style={{ fontSize: 12, textAlign: "center" }}>
                    Darkvision 60'
                  </Text>
                </View>
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
export default CombatStats;