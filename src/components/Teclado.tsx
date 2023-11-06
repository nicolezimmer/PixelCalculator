import * as React from "react";
import Boton from "./Boton";
import { View, Text } from "react-native";
import { Styles } from "./styles/estilosGlobales";
import { myColors } from "./styles/colores";

export default function MyKeyboard() {
  const [primerNumero, setPrimerNumero] = React.useState("");
  const [segundoNumero, setSegundoNumero] = React.useState("");
  const [operacion, setOperacion] = React.useState("");
  const [resultado, setResultado] = React.useState<Number | null>(null);

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
              ? [Styles.screenFirstNumber, { color: myColors.resultado }]
              : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.resultado }]
          }
        >
          {resultado?.toString()}
        </Text>
      );
    }
    if (primerNumero && primerNumero.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{primerNumero}</Text>;
    }
    if (primerNumero === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (primerNumero.length > 5 && primerNumero.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {primerNumero}
        </Text>
      );
    }
    if (primerNumero.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {primerNumero}
        </Text>
      );
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {segundoNumero}
          <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
            {operacion}
          </Text>
        </Text>
        {pantallaPrimerNumero()}
      </View>
      <View style={Styles.row}>
        <Boton titulo="C" esGris alPresionar={limpiar} />
        <Boton
          titulo="+/-"
          esGris
          alPresionar={() => handlePresionarOperacion("+/-")}
        />
        <Boton
          titulo="％"
          esGris
          alPresionar={() => handlePresionarOperacion("％")}
        />
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
          titulo="⌫"
          alPresionar={() => setPrimerNumero(primerNumero.slice(0, -1))}
        />
        <Boton titulo="=" esVerde alPresionar={() => getResult()} />
      </View>
    </View>
  );
}
