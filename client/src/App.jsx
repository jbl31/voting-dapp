import { EthProvider } from "./contexts/EthContext";
import Header from "./components/Header";
import Status from "./components/Voting/Status";
import Dashboard from "./components/Voting/Dashboard";
import ProposalSection from "./components/Voting/ProposalSection";
import Footer from "./components/Footer";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/fontawesome-svg-icons';
// import { faEthereum, faCoffee } from '@fortawesome/free-solid-svg-icons';
import "./App.css";

// library.add(fab, faCoffee, faEthereum);

function App() {
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <Header />
          <hr />
          <Status />
          <hr />
          <Dashboard />
          <hr />
          <ProposalSection />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
