import React from "react";
import { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "./styles/estilosGlobales";
import * as Font from 'expo-font';

interface PropsBoton {
  alPresionar: () => void;
  titulo: string;
  esVerde?: boolean;
  esGris?: boolean;
}

export default function Boton({ titulo, alPresionar, esVerde, esGris }: PropsBoton) {
  const theme = useContext(ThemeContext);

  const getButtonStyle = () => {
    if (esVerde) return [Styles.btnVerde, Styles.fuente];
    if (esGris) return [Styles.btnGris, Styles.fuente];
    if (theme === "claro") return [Styles.btnClaro, Styles.fuente];
    return [Styles.btnOscuro, Styles.fuente];
  };

  const getTextStyle = () => {
    if (esVerde || esGris) return [Styles.textoChicoClaro, Styles.fuente];
    if (theme === "oscuro") return [Styles.textoChicoClaro, Styles.fuente];
    return [Styles.textoChicoOscuro, Styles.fuente];
  };

  const getImageSource = () => {
    if (esVerde || esGris) {
        return require('../../assets/Botones/3.png'); // Usa 3.png para esVerde o esGris
      } else {
        return theme === "oscuro" ? require('../../assets/Botones/2.png') : require('../../assets/Botones/1.png');
      }  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={alPresionar}
    >
      <ImageBackground
        source={getImageSource()} // Utiliza la función para determinar la fuente de la imagen
        style={Styles.imageBackground}
      >
        <Text style={getTextStyle()}>
          {titulo}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
