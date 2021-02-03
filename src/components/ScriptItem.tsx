import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Script } from "../type/script"
type Props = {
    script: Script;
    onPress: () => void
}

export const ScriptItem: React.FC<Props> = ({ script, onPress }: Props) =>{
    const { name, drip_type } = script;
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{name}</Text>
            <Text>{drip_type}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});