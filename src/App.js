import Header from "./Components/Header";
import Lista from "./Components/Lista";
import Textoprincipal from "./Components/Textoprincipal";



function App() {
  return (
    <div>
      <Header/>
      <Textoprincipal/>
      <Lista  textos={["home","sobre","contato"]}/>
    </div>
  )
}

export default App;
