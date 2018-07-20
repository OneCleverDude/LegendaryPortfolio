import React from 'react';

import {
    StyleSheet, Text, View, Image
} from 'react-native';

class Title extends React.Component {
    render() {
        return (
        <View style={styles.topline}>
          <View style={{ flex: 1 }}>
            <Text
              style={[
                { fontWeight: "bold", fontSize: 42, textAlign: "right" },
                styles.charname
              ]}
            >
              {this.props.charname}
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 14,
                textAlign: "right",
                color: "white"
              }}
            >
              {this.props.race} {this.props.gender} {this.props.class} {this.props.level}
            </Text>
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
export default Title;