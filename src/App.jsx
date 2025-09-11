import "./App.css";
import Home from "./pages/Math"
import Trivia from "./pages/Trivia"
import DateFact from "./pages/DateFact"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {  

  return (
    <>
      <Header />
        <Routes>
        {/* <Route path='/' element={<Home conteudo={conteudo} />} /> - no caso de passar conteudo como parametro*/}
        <Route path='/' element={<Home/>}/>
        <Route path='/trivia' element={<Trivia/>}/>
        <Route path='/date' element={<DateFact/>}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
