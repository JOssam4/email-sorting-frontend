import './styles/App.css'
import { Routes, Route } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen.tsx';
import EmailsPage from './components/EmailsPage.tsx';

function App() {
    return (
        <Routes>
            <Route index element={<WelcomeScreen />} />
            <Route path="/emails" element={<EmailsPage />} />
        </Routes>
    );
}

export default App
