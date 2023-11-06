import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "./styles/estilosGlobales";

interface PropsBoton {
    alPresionar : () => void;
    titulo: string;
    esVerde?: boolean;
    esGris?: boolean;
}

export default function Boton({ titulo, alPresionar, esVerde, esGris }: PropsBoton) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity 
            style={
                esVerde 
                ? Styles.btnVerde 
                : esGris 
                ? Styles.btnGris 
                : theme === "claro" 
                ? Styles.btnClaro 
                : Styles.btnOscuro
            } 
            onPress={alPresionar}>
            <Text 
               style={
                   esVerde || esGris 
                   ? Styles.textoChicoClaro
                   : theme === "oscuro" 
                   ? Styles.textoChicoClaro 
                   : Styles.textoChicoOscuro 
                }
            >
                {titulo}
            </Text>
        </TouchableOpacity>
    );
}