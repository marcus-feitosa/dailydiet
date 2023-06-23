import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Home } from './src/screens/Home';

import { ActivityIndicator } from 'react-native';
import theme from './src/theme';

export default function App() {

  const [fontsLoaded] = useFonts ({NunitoSans_400Regular, NunitoSans_700Bold});


  return (
    <ThemeProvider theme={theme}>
       {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}


