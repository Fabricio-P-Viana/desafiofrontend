import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/globals';
import { theme } from '../styles/theme';
import { Provider } from 'react-redux';
import store from '../store/index';
import QuestionsList from '@/components/QuestionsList';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <QuestionsList/>
            </ThemeProvider>
        </Provider>
    )
}

export default App;