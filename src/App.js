import logo from './logo.svg';
import './App.css';
import Page  from "./components/page"

function Dowload() {
  const page = document.getElementById("page");
  const opt = {
    margin: [-30, -20, 0, 0],
    filename: "myCV.pdf",
    jsPDF: {unit: 'mm', format: 'b4', orientation: 'portrait'},
  }
  window.html2pdf().from(page).set(opt).save();
}

function App() {
  return (
    <div className="App" id="App">
      <header className="App-header">

      </header>
      <div>
        <Page></Page>
      </div>
      <footer>
        <button onClick={() => {Dowload()}}>Download</button>
      </footer>
    </div>
  );
}

export default App;
