import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Home } from './src/screens/Home';


import { Loading } from './src/components/Loading';

import theme from './src/theme';
import { StatusBar } from 'react-native';

export default function App() {

  const [fontsLoaded] = useFonts ({NunitoSans_400Regular, NunitoSans_700Bold});


  return (
    <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
       {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}


