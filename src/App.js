import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App p-10 font-pressStart bg-[#222222] h-screen w-screen">
      <h1 className="mt-4 text-3xl text-red-500 font-bold">Roll And Fix Dice Game!</h1>
      <Main />
    </div>
  );
}

export default App;
