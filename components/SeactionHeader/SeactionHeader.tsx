import React from "react";
import { StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
  desc?: string;
};

const SeactionHeader = ({ title, desc = "Show All" }: SectionHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        marginTop: 24,
        marginBottom: 16,
        alignItems: "flex-end",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 500 }}>{title}</Text>
      <Text style={{ fontSize: 13, color: "rgba(44, 100, 137, 1)", fontWeight: 500 }}>
        {desc}
      </Text>
    </View>
  );
};

export default SeactionHeader;

const styles = StyleSheet.create({});
