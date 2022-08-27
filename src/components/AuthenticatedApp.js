import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChatRoom from './ChatRoom.js';
import { Landing } from './Landing.js';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/room/:id" element={<ChatRoom/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default AuthenticatedApp
