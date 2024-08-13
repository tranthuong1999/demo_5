import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoList from './components/TodoList';
import TrustByPage from './components/TrustBy';
import IntroducePage from './components/Introduce';
import MarketPage from './components/Market';
import FooterPage from './components/Footer';
import { NavBarPage } from './components/NavBar';

const App: React.FC = () => (
    <Provider store={store}>
        {/* <TodoList /> */}
        <NavBarPage />
        <TrustByPage />
        <IntroducePage />
        <MarketPage />
        <FooterPage />
    </Provider>
);

export default App;
