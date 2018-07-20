import React from 'react';

import {
    StyleSheet, Text, View, Image
} from 'react-native';

class HeroSpot extends React.Component {
    render() {
        return (
        <View style={{ flex: 9, justifyContent: "flex-end" }}>
            <Image
              style={{
                position: "absolute",
                left: -40,
                right: 0,
                top: -70,
                bottom: 0
              }}
              source={require("./../images/grak.png")}
            />
            <View style={{ flexDirection: "column" }}>
              <View
                style={[
                  styles.grid,
                  {
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 42,
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  {this.props.fort}
                </Text>
                <Text style={{ textAlign: "center" }}>Fort</Text>
              </View>
              <View
                style={[
                  styles.grid,
                  {
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 42,
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  {this.props.reflex}
                </Text>
                <Text style={{ textAlign: "center" }}>Reflex</Text>
              </View>
              <View
                style={[
                  styles.grid,
                  {
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.8)"
                  }
                ]}
              >
                <Text
                  style={{
                    fontSize: 42,
                    textAlign: "center",
                    fontWeight: "600"
                  }}
                >
                  {this.props.will}
                </Text>
                <Text style={{ textAlign: "center" }}>Will</Text>
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
export default HeroSpot;