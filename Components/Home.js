import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from 'expo-constants';
import { Icon } from "react-native-elements";

const DATA = [
  {
        id: 0,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸುಪ್ರಭಾತ",
      },
      {
        id: 1,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಕವಚಂ",
      },
      {
        id: 2,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ದಂಡಕಂ",
      },
      {
        id: 3,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ತಾರಾವಳಿ",
      },
      {
        id: 4,
        title: "ಶ್ರೀ ವೀರಭದ್ರಾಷ್ಟಕಂ",
      },
      {
        id: 5,
        title: "ಶ್ರೀ ಭದ್ರ ಕವಚಂ",
      },
      {
        id: 6,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮಸ್ತೋತ್ರ",
      },
      {
        id: 7,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಹಸ್ರನಾಮವಳಿ",
      },
      {
        id: 8,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ ಸ್ತೋತ್ರ",
      },
      {
        id: 9,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಅಷ್ಟೋತ್ತರ ಶತನಾಮಾವಳಿ",
      },
      {
        id: 10,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ವಡಪುಗಳು",
      },
      {
        id: 11,
        title: "ಗುಗ್ಗುಳದ ಬಗ್ಗೆ ಮಾಹಿತಿ",
      },
      {
        id: 12,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ",
      },
      {
        id: 13,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಆಚರಣೆಗಳು",
      },
      {
        id: 14,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಪ್ರಾರ್ಥನೆ",
      },
      {
        id: 15,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ ಶ್ಲೋಕ",
      },
      {
        id: 16,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಶತಕ",
      },
      {
        id: 17,
        title: "ಶ್ರೀ ವೀರಭದ್ರೇಶ್ವರ ಮಂಗಳ",
      },
      {
        id: 18,
        title: "ದ್ವಾತ್ರಿಂಶದ್ಭುಜ ಶ್ರೀ ವೀರಭದ್ರ ಧ್ಯಾನಂ",
      },
      {
        id: 19,
        title: "ಶ್ರೀ ಶರಭ ಹೃದಯ ಸ್ತೋತ್ರ",
      },
      {
        id: 20,
        title: "ಶ್ರೀ ಶರಭೋಪನಿಷತ್ತು",
      },
];

function Item({ id, title, selected, onSelect }) {
  return (
    <TouchableOpacity
      onPress={() => alert(title)}
      style={[
        styles.item,
        { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Icon name="chevron-right" type="entypo" color="#C2185B" />
    </TouchableOpacity>
  );
}

export default function App() {
  const [selected, setSelected] = React.useState(new Map());

  const onSelect = React.useCallback(
    id => {
      const newSelected = new Map(selected);
      newSelected.set(id, !selected.get(id));

      setSelected(newSelected);
    },
    [selected],
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            selected={!!selected.get(item.id)}
            onSelect={onSelect}
          />
        )}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
  },
});