import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TrustByPage from './components/TrustBy';
import IntroducePage from './components/Introduce';
import MarketPage from './components/Market';
import FooterPage from './components/Footer';
import { NavBarPage } from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';


type LayoutProps = {
    children: ReactNode;
};

const App = () => {
    const MainLayout: React.FC<LayoutProps> = ({ children }) => {
        return (
            <>
                <NavBarPage />
                {children}
                <FooterPage />
            </>
        );
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <NavBarPage />
                            <TrustByPage />
                            <IntroducePage />
                            <MarketPage />
                            <FooterPage />
                        </>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <MainLayout>
                            <LoginPage />
                        </MainLayout>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <MainLayout>
                            <RegisterPage />
                        </MainLayout>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App;
