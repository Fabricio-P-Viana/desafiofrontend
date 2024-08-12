import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globals';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store/index';
import Home from './Home';
import 'toastr/build/toastr.min.css'; 
import Head from 'next/head';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Head>
                    <title>NPS</title>
                </Head>
                <Home/>
            </ThemeProvider>
        </Provider>
    )
}

export default App;