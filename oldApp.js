import React from "react";
import Title from "./src/title.js";
import HeroSpot from "./src/herospot.js";
import StatBlock from "./src/statblock.js";
import CombatStats from "./src/combatstats.js";
import Action from "./src/actions.js";

import {Alert, Button, StyleSheet, Text, View, Image, ActivityIndicator } from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    //return fetch('https://facebook.github.io/react-native/movies.json')
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
      })
      .catch(error => {
        console.error(error);
      });
  }

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
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{ height: 20, width: 20 }} />
        <Title
          charname={this.state.dataSource.charname}
          race={this.state.dataSource.race}
          class={this.state.dataSource.classes[0].class}
          gender={this.state.dataSource.gender}
          level={this.state.dataSource.classes[0].level}
        />
        <View style={styles.line2}>
          <HeroSpot fort="9" reflex="9" will="9" />
          <StatBlock
            str="18"
            dex="17"
            con="16"
            int="15"
            wis="14"
            cha="13"
            strmod="+8"
            dexmod="+7"
            conmod="+6"
            intmod="+5"
            wismod="+4"
            chamod="+3"
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
            {this.renderActions(this.state.dataSource.actions)}
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
