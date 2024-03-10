import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Footer/Copyright";
import Logo from "./Components/Header/Logo";
function App() {
  return (
    <div className="App">
      <Header>
          <Logo/>
      </Header>
        <Content/>
        <Footer year={2024}>
            <Copyright copyright="CodersLab"/>
        </Footer>
    </div>
  );
}

export default App;
