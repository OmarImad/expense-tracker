import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import Income from './components/Income';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container"></div>
     <Balance/>
     <Income/>
     <TransactionList/>
     <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
