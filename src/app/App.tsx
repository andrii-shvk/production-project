import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: true}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}
 


export default App;