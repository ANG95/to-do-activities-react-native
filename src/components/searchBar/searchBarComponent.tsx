import React from "react";
import { TextInput, View, Keyboard, TouchableOpacity, Text, TouchableWithoutFeedback } from "react-native";
import { color } from "../../../theme/color.theme";
import { SvgIcon } from "../svgIcon/svgIconComponent";
import { styles } from "./styles";

interface SearchBarProps {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: (params?: string | boolean) => void;
  setClicked: (params?: string | boolean) => void;
}
export const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setClicked }: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View
        style={
          clicked
            ? styles.searchBarClicked
            : styles.searchBarUnClicked
        }
      >
        <SvgIcon
          icon="search"
          width={30}
          height={30}
          color={color.palette.leadLight}
        />
        <TextInput
          style={styles.input}
          placeholder="Buscar Actividades"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <TouchableOpacity onPress={() => setSearchPhrase("")}>
            <SvgIcon
              icon="close"
              color={color.palette.leadLight}
              width={20}
              height={20}
            />
          </TouchableOpacity>
        )}
      </View>
      {clicked && (
          <TouchableWithoutFeedback
            accessible={false}
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          >
            <Text>Cancelar</Text>
          </TouchableWithoutFeedback>
      )}
    </View>
  );
};