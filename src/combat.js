import React from "react";
import Title from "./title.js";
import HeroSpot from "./herospot.js";
import StatBlock from "./statblock.js";
import CombatStats from "./combatstats.js";
import Action from "./actions.js";

import {Alert, Button, StyleSheet, Text, View, ScrollView, Image, ActivityIndicator } from "react-native";

class Combat extends React.Component {
  

  renderActions(actions) {
    const actionItems = [];
    for (var i = 0; i < actions.length; i++) {
      actionItems.push(
        <Action
          key={"action" + actions[i].id}
          title={actions[i].title}
          icon={actions[i].icon}
          wpn={actions[i].wpn}
          tohit={actions[i].tohit}
          damage={actions[i].damage}
        />
      );
    }
    return actionItems;
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
        <View style={styles.line2}>
        <HeroSpot fort={this.props.character.saves[0].value} reflex={this.props.character.saves[1].value} will={this.props.character.saves[2].value} />
          <StatBlock
            str={this.props.character.abilites[0].value}
            dex={this.props.character.abilites[1].value}
            con={this.props.character.abilites[2].value}
            int={this.props.character.abilites[3].value}
            wis={this.props.character.abilites[4].value}
            cha={this.props.character.abilites[5].value}
            strmod={Math.floor((this.props.character.abilites[0].value-10)/2)}
            dexmod={Math.floor((this.props.character.abilites[1].value-10)/2)}
            conmod={Math.floor((this.props.character.abilites[2].value-10)/2)}
            intmod={Math.floor((this.props.character.abilites[3].value-10)/2)}
            wismod={Math.floor((this.props.character.abilites[4].value-10)/2)}
            chamod={Math.floor((this.props.character.abilites[5].value-10)/2)}
          />
          <View style={{ flex: 1 }} />
          <CombatStats />
        </View>
        <View style={styles.dividerline}>
          <View style={{ flex: 1 }} />
        </View>
        <View
          style={[
            styles.line3,
            { backgroundColor: "rgba(255, 255, 255, 0.8)" }
          ]}
        >
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Button onPress={() => { Alert.alert('HP change');}}
            title = "Heal/Damage"
            style={{ fontSize: 24, textAlign: "center" }}              
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>
              Add Condition
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>
              Add Buff/DeBuff
            </Text>
          </View>
        </View>
        <View style={styles.dividerline}>
          <View style={{ flex: 1 }} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 9 }}>
            {this.renderActions(this.props.character.actions)}
          </View>
          <View style={{ flex: 4, alignItems: "flex-start" }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, backgroundColor: "red" }}>
                Prone:
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                You are lying on the ground. -4 penalty on melee attack rolls
                and cannot use ranged weapons (except crossbow). Gain +4 AC
                bonus against ranged attacks, but take a -4 AC penalty against
                melee attacks.
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, backgroundColor: "green" }}>
                Bull's Strength: (3 rounds)
              </Text>
              <Text style={{ fontSize: 12, color: "grey" }}>
                grants a +4 enhancement bonus to Strength, adding the usual
                benefits to melee attack rolls (+2), melee damage rolls (+2, +3
                two handed), and other uses of the Strength modifier.
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
export default Combat;