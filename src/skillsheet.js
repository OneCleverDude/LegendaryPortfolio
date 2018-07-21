import React from "react";
import Title from "./title.js";
import HeroSpot from "./herospot.js";
import StatBlock from "./statblock.js";
import CombatStats from "./combatstats.js";
import Skill from "./skills.js";

import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from "react-native";

class SkillSheet extends React.Component {
  renderSkills(skills) {
    const skillRows = [];
    for (var i = 0; i < skills.length; i++) {
      skillRows.push(
        <Skill
          key={"skill-" + skills[i].id}
          title={skills[i].id}
          mod={skills[i].mod}
          description={skills[i].description}
        />
      );
    }
    return skillRows;
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
          <HeroSpot
            fort={this.props.character.saves[0].value}
            reflex={this.props.character.saves[1].value}
            will={this.props.character.saves[2].value}
          />
          <StatBlock
            str={this.props.character.abilites[0].value}
            dex={this.props.character.abilites[1].value}
            con={this.props.character.abilites[2].value}
            int={this.props.character.abilites[3].value}
            wis={this.props.character.abilites[4].value}
            cha={this.props.character.abilites[5].value}
            strmod={Math.floor(
              (this.props.character.abilites[0].value - 10) / 2
            )}
            dexmod={Math.floor(
              (this.props.character.abilites[1].value - 10) / 2
            )}
            conmod={Math.floor(
              (this.props.character.abilites[2].value - 10) / 2
            )}
            intmod={Math.floor(
              (this.props.character.abilites[3].value - 10) / 2
            )}
            wismod={Math.floor(
              (this.props.character.abilites[4].value - 10) / 2
            )}
            chamod={Math.floor(
              (this.props.character.abilites[5].value - 10) / 2
            )}
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
            <Button
              onPress={() => {
                Alert.alert("HP change");
              }}
              title="Roll Initiative"
              style={{ fontSize: 24, textAlign: "center" }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>
              Take a note
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ fontSize: 24, textAlign: "center" }}>
              Pick Something for this?
            </Text>
          </View>
        </View>
        <View style={styles.dividerline}>
          <View style={{ flex: 1 }} />
        </View>
          <View style={{ flex: 1 }}>
            {this.renderSkills(this.props.character.skills)} 
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
export default SkillSheet;
