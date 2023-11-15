import { StyleSheet } from "react-native";
import { myColors } from "./colores"; 
export const Styles = StyleSheet.create({
    fuente: {
        fontFamily: 'pixelmix',
      },
      imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
    btnVerde: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnOscuro: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnClaro: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGris: {
        width: 72,
        height: 72,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    textoChicoClaro: {
        fontSize: 32,
        color: myColors.blanco,
    },
    textoChicoOscuro: {
        fontSize: 32,
        color: myColors.negro,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    viewBottom: {
        // position: 'absolute',
        // bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gris,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gris,
        fontWeight: '200',
        alignSelf: "flex-end",

    },


})