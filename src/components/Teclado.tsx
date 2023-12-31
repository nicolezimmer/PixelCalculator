import * as React from "react";
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image } from "react-native";
import { Styles } from "./styles/estilosGlobales";
import { myColors } from "./styles/colores";
import * as Font from 'expo-font'
import Boton from "./Boton";

export default function Teclado({cambiarTema}) {
  const [primerNumero, setPrimerNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");
  const [operacion, setOperacion] = React.useState("");
  const [resultado, setResultado] = React.useState<Number | null>(null);
  const [numGif, setNumGif] = React.useState(1)
  const [numGif2, seNumGif2] = React.useState('1.gif')

  const [fontsLoaded, setFontsLoaded] = useState(false)
  const cambiarGif = () => {
    setNumGif((numGif % 5) + 1);
  };
  useEffect(() => {
    if (!fontsLoaded) {
      loadFonts()
    }
  }, [])

  const loadFonts = async () => {
    await Font.loadAsync({
      'pixelmix': require('../../assets/pixelmix.ttf')
    })
    setFontsLoaded(true)
  }

  const handlePresionarNumero = (valorBoton: string) => {
    if (primerNumero.length < 10) {
      setPrimerNumero(primerNumero + valorBoton);
    }
  };

  const handlePresionarOperacion = (valorBoton: string) => {
    if (resultado !== null) {
      setSegundoNumero(resultado.toString());
      setPrimerNumero("");
      setResultado(null);
    } else {
      setSegundoNumero(primerNumero);
      setPrimerNumero("");
    }
    setOperacion(valorBoton);
  };

  const limpiar = () => {
    setPrimerNumero("");
    setSegundoNumero("");
    setOperacion("");
    setResultado(null);
  };

  const getResult = () => {
    switch (operacion) {
      case "+":
        setResultado(
          parseFloat(segundoNumero) + parseFloat(primerNumero)
        );
        break;
      case "-":
        setResultado(
          parseFloat(segundoNumero) - parseFloat(primerNumero)
        );
        break;
      case "*":
        setResultado(
          parseFloat(segundoNumero) * parseFloat(primerNumero)
        );
        break;
      case "/":
        setResultado(
          parseFloat(segundoNumero) / parseFloat(primerNumero)
        );
        break;
      default:
        setResultado(0);
        break;
    }
  };

  const pantallaPrimerNumero = () => {
    if (resultado !== null) {
      return (
        <Text
          style={
            resultado < 99999
              ? [Styles.screenFirstNumber, styles.fuente, { color: myColors.resultado }]
              : [Styles.screenFirstNumber, styles.fuente, { fontSize: 50, color: myColors.resultado }]
          }
        >
          {resultado?.toString()}
        </Text>
      );
    }
    if (primerNumero && primerNumero.length < 6) {
      return <Text style={[Styles.screenFirstNumber, styles.fuente]}>{primerNumero}</Text>;
    }
    if (primerNumero === "") {
      return <Text style={[Styles.screenFirstNumber, styles.fuente]}>{"0"}</Text>;
    }
    if (primerNumero.length > 5 && primerNumero.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, styles.fuente, { fontSize: 70 }]}>
          {primerNumero}
        </Text>
      );
    }
    if (primerNumero.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, styles.fuente, { fontSize: 50 }]}>
          {primerNumero}
        </Text>
      );
    }
  };

  return (
    <>
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={[Styles.screenSecondNumber, styles.fuente]}>
          {segundoNumero}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500", fontFamily: 'pixelmix' }}>
            {operacion}
          </Text>
        </Text>
        {pantallaPrimerNumero()}
      </View>

      <View style={Styles.row}>
        <Boton titulo="C" esGris alPresionar={limpiar} />
        <Boton titulo=" ☯︎  " esGris alPresionar={cambiarTema}/>
        <Boton titulo=" ⚙︎  " esGris alPresionar={cambiarGif} />
        <Boton titulo="÷" esVerde alPresionar={() => handlePresionarOperacion("/")} />
      </View>
      <View style={Styles.row}>
        <Boton titulo="7" alPresionar={() => handlePresionarNumero("7")} />
        <Boton titulo="8" alPresionar={() => handlePresionarNumero("8")} />
        <Boton titulo="9" alPresionar={() => handlePresionarNumero("9")} />
        <Boton titulo="×" esVerde alPresionar={() => handlePresionarOperacion("*")} />
      </View>
      <View style={Styles.row}>
        <Boton titulo="4" alPresionar={() => handlePresionarNumero("4")} />
        <Boton titulo="5" alPresionar={() => handlePresionarNumero("5")} />
        <Boton titulo="6" alPresionar={() => handlePresionarNumero("6")} />
        <Boton titulo="-" esVerde alPresionar={() => handlePresionarOperacion("-")} />
      </View>
      <View style={Styles.row}>
        <Boton titulo="1" alPresionar={() => handlePresionarNumero("1")} />
        <Boton titulo="2" alPresionar={() => handlePresionarNumero("2")} />
        <Boton titulo="3" alPresionar={() => handlePresionarNumero("3")} />
        <Boton titulo="+" esVerde alPresionar={() => handlePresionarOperacion("+")} />
      </View>
      <View style={Styles.row}>
        <Boton titulo="." alPresionar={() => handlePresionarNumero(".")} />
        <Boton titulo="0" alPresionar={() => handlePresionarNumero("0")} />
        <Boton
          titulo="<-"
          alPresionar={() => setPrimerNumero(primerNumero.slice(0, -1))}
        />
        <Boton titulo="=" esVerde alPresionar={() => getResult()} />
      </View>

    </View>
          <View style={styles.gifContainer}>
          <Image
            source={require(`../../assets/gif/${numGif}.gif`)}
            style={styles.gifImage}
          />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  fuente: {
    fontFamily: 'pixelmix',
  },
  gifContainer: {

    width: 100,
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
