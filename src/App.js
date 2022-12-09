import logo from './logo.svg';
import './App.css';
import HomeContainer from './Containers/HomeContainer';
import Header from './Componetns/Header';
import HeaderContainer from './Containers/HeaderContainer';

function App() {
  return (
    <div className="App">
        <HeaderContainer />
        <HomeContainer />
    </div>
  );
}

export default App;
