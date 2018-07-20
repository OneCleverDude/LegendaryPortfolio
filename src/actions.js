import React from 'react';

import {
    StyleSheet, Text, View, Image
} from 'react-native';

class Action extends React.Component {
    render() {
        return (
        <View
              style={{
                height: 60,
                flexDirection: "row",
                backgroundColor: "rgba(255, 255, 255, 0.8)"
              }}
            >
              <View style={{ height: 60, width: 60 }}>
                
                <Image
                  style={{ alignSelf: "center" }}
                  source={{uri:String(this.props.icon)}}
                  resizeMode="center"
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{ fontSize: 18, textAlign: "left", fontWeight: "600" }}
                >
                  {this.props.title} with {this.props.wpn} at {this.props.tohit} for {this.props.damage}
                </Text>
                <Text>Two Handed, Range 60', Piercing, Crit(x3) 20</Text>
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
    export default Action;