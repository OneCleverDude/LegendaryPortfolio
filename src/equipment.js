import React from "react";
import Title from "./title.js";
import EquipmentOverlay from "./equipmentOverlay.js";
import EquipmentItems from "./equipmentItems.js";

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator
} from "react-native";

class Equipment extends React.Component {
  renderEquiped(equippedgear) {
    const equippedItems = [];
    for (var i = 0; i < equippedgear.length; i++) {
      equippedItems.push(
        <EquipmentOverlay
          key={"gear-" + equippedgear[i].id}
          left={equippedgear[i].left}
          top={equippedgear[i].top}
          title={equippedgear[i].equip}
          gear={equippedgear[i].name}
        />
      );
    }
    return equippedItems;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 20, width: 20 }} />
        <Title
          charname={this.props.character.charname}
          race={this.props.character.race}
          class={this.props.character.classes[0].class}
          gender={this.props.character.gender}
          level={this.props.character.classes[0].level}
        />

        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 24,
              textAlign: "left",
              fontWeight: "600"
            }}
          >
            Equipment
          </Text>
        </View>
        <View style={{ flex: 10, justifyContent: "center" }}>
          <Image
            style={{ alignSelf: "center" }}
            source={require("./../images/grak.png")}
          />
          <EquipmentOverlay left="300" top="-70" title="Head" gear="" />
          {this.renderEquiped(this.props.character.equippedgear)}
        </View>
        <View style={styles.dividerline}>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ flex: 10, justifyContent: "flex-start" }}>
          <EquipmentItems gear="Bardiche" />
          <EquipmentItems gear="Light Crossbow" />
          <EquipmentItems gear="Silvered Dagger" />
          <EquipmentItems gear="Silvered Short Sword" />
          <EquipmentItems gear="Stonewood Dagger" />
          <EquipmentItems gear="Studded Leather Armor" />
          <EquipmentItems gear="Tanglefoot Bag" />
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
export default Equipment;
