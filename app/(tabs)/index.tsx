import Checkbox from 'expo-checkbox';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

import { View } from '../../components/Themed';

type TShape = null | "square" | "triangle" | "circle";

export default function TabOneScreen() {
  const [shape, setShape] = React.useState<TShape>(null);
  const [isClicked, setIsClicked] = React.useState(false);
  const [areaClicked, setAreaClicked] = React.useState(false);
  const [perimeterClicked, setPerimeterClicked] = React.useState(false);

  const [output, setOutput] = React.useState({});

  return (
    <View style={styles.container}>
      <View className="flex flex-row w-16">
        <Checkbox
          value={areaClicked}
          onChange={() => setAreaClicked((prev) => !prev)}
        />
        <Text>Площа</Text>
      </View>
      <View className="flex flex-row w-16">
        <Checkbox
          value={perimeterClicked}
          onChange={() => setPerimeterClicked((prev) => !prev)}
        />
        <Text>Периметр</Text>
      </View>
      <View className="flex flex-col">
        <View className="flex flex-row items-center">
          <RadioButton
            onPress={() => setShape("square")}
            value="square"
            status={shape === "square" ? "checked" : "unchecked"}
          />
          <Text>Квадрат</Text>
        </View>
        <View className="flex flex-row items-center">
          <RadioButton
            onPress={() => setShape("triangle")}
            value="triangle"
            status={shape === "triangle" ? "checked" : "unchecked"}
          />
          <Text>Трикутник</Text>
        </View>
        <View className="flex flex-row items-center">
          <RadioButton
            onPress={() => setShape("circle")}
            value="circle"
            status={shape === "circle" ? "checked" : "unchecked"}
          />
          <Text>Круг</Text>
        </View>
      </View>
      <View
        onTouchEnd={() => setIsClicked(true)}
        className="w-16 h-8 border-black border-2 flex items-center justify-center"
      >
        <Text>OK</Text>
      </View>
      {isClicked && (
        <>
          {areaClicked && <Text>Площа</Text>}
          {perimeterClicked && <Text>Периметр</Text>}
          {shape && <Text>{shape}</Text>}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
