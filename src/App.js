import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import HowReactWorks from './components/HowReactWorks/HowReactWorks';
import StateVsProps from './components/StateVsProps/StateVsProps';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <HowReactWorks></HowReactWorks>
      <StateVsProps></StateVsProps>
    </div>
  );
}

export default App;
