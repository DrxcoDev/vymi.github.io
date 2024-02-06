import logo from './logo.svg';
import './App.css';
import './static/Ensenar.js'

function App() {
  return (
    
    <div>
      <nav class="navbar bg-success-subtle fixed-top border-bottom border-body text-light" data-bs-theme="dark">
        <h3 class="center text-light px-3">Vymi</h3>
      </nav>

      <br></br><br></br><br></br>
      <ul class="list-group bg-succes-subtle p-2 text-light" id="panelleft">
      <p class="fs-6 border-bottom">Files & Folders</p>
      <button type="button" onclick="EnsenarEnDestop()" class="btn text-start d-flex">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" ></img>
        <div class="p-2 name-file" id="name-file">main</div>
        <div class="p-2 ms-10 name-file flex-row-reverse" id="extension-py">.py</div>
        </button>

      </ul>

      <ul class="list-group bg-succes-subtle p-2 text-light" id="panelright">
        <p class="fs-6 border-bottom" id="actually-file"></p>
        <textarea id="texto" oninput="highlightWord()" class="form-control bg-transparent border-success" aria-label="With textarea"></textarea>
      </ul>

    </div>
    
  );
}

export default App;
