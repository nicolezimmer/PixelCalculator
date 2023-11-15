import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { myColors } from './src/components/styles/colores'
import Boton from './src/components/Boton'
import Teclado from './src/components/Teclado'
export default function App() {
  const [theme, setTheme] = useState('claro');
  const cambiarTema= () => setTheme(theme === 'claro' ? 'oscuro' : 'claro')
  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'claro' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <StatusBar style="auto" />
          <Teclado cambiarTema={cambiarTema}/>

      </View>
    </ThemeContext.Provider>

  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.claro,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
