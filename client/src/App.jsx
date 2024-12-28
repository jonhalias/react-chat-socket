import {Routes, Route} from "react-router-dom";
import VirtualChat from "./components/Virtual-Chat";
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<VirtualChat />} />
    </Routes>
    </>
  )
}

export default App
