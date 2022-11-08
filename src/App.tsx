import { useState } from 'react';
import './App.css';
import Directories from './Components/Directories/Directories';

const files = {
  name: 'root',
  isFolder: true,
  children: [
    {
      name: 'src',
      isFolder: true,
      children: [
        {
          name: 'App.js',
          isFolder: false,
        },
        {
          name: 'Folder.js',
          isFolder: false,
        },
        {
          name: 'data.js',
          isFolder: false,
        },
        {
          name: 'Index.js',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'public',
      isFolder: true,
      children: [
        {
          name: 'index.html',
          isFolder: false,
        },
        {
          name: 'styles.css',
          isFolder: false,
        },
      ],
    },
    {
      name: 'package.json',
      isFolder: false,
    },
  ],
};



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="rootdirectory">
        <div className="expander"></div>
        <div className="diricon">🗀</div>
        <div className="dirname"> { files.name } </div>
      </div>
      { files.isFolder && <Directories childrens={ files.children }/> }
    </div>
  )
}

export default App
