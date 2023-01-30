import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HomePage, QuestDetailPage, QuestListPage, SignUpPage } from "./pages";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/quest-list" element={<QuestListPage />} />
                    <Route path="/signup" element={<SignUpPage />} />
                    <Route path="/quest" element={<QuestDetailPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
