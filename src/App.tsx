import './styles/App.css'
import { Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/WelcomeScreen.tsx';
import EmailsPage from './components/EmailsPage.tsx';
import DisplayPage from './components/DisplayPage.tsx';
import Priority from "./types/Priority.ts";

function App() {
    return (
        <Routes>
            <Route index element={<WelcomeScreen />} />
            <Route path="/emails" element={<EmailsPage />} />
            <Route path="/emails/priority/low" element={<DisplayPage priority={Priority.LOW} />} />
            <Route path="/emails/priority/medium" element={<DisplayPage priority={Priority.MEDIUM} />} />
            <Route path="/emails/priority/high" element={<DisplayPage priority={Priority.HIGH} />} />
        </Routes>
    );
}

export default App
