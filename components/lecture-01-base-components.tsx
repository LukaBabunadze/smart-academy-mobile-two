import { Image } from "expo-image";
import { useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [numOfLines, setNumOfLines] = useState<number | undefined>(5);

  const handleReadMorePress = () => {
    if (numOfLines === 5) {
      return setNumOfLines(undefined);
    }
    setNumOfLines(5);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <Text
        style={styles.text}
        numberOfLines={numOfLines}
        ellipsizeMode="tail"
        onPress={() => {
          console.log("text pressed");
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
      <View style={styles.buttonWrapper}>
        <Button
          title={numOfLines === 5 ? "read more" : "read less"}
          // onPress={() => Alert.alert("Button Pressed!")}
          onPress={handleReadMorePress}
        />
      </View>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          console.log("Pressable");
        }}
      >
        <Text style={[styles.text, styles.buttonText]}>Pressable</Text>
      </Pressable>
      <TouchableOpacity style={styles.pressable} activeOpacity={0.8}>
        <Text style={[styles.text, styles.buttonText]}>Touchable Opacity</Text>
      </TouchableOpacity>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        contentFit="cover"
      />
      <TextInput
        placeholder="placeholder"
        placeholderTextColor="gray"
        style={styles.input}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(14, 12, 12, 1)",
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 56,
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textTransform: "lowercase",
    fontWeight: 300,
    textAlign: "justify",
  },
  buttonWrapper: {
    marginTop: 16,
  },
  pressable: {
    width: "100%",
    backgroundColor: "white",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "black",
    fontWeight: 600,
    textTransform: "uppercase",
  },
  image: {
    height: 300,
    marginVertical: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "white",
  },
  input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 8,
    color: "white",
  },
});
