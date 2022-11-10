import { useState } from "react";
import "./App.css";
import Directories from "./Components/Directories/Directories";
import Icon from './Components/Icon/Icon';

const files = {
  name: "root",
  isFolder: true,
  children: [
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "App.js",
          isFolder: false,
        },
        {
          name: "Folder.js",
          isFolder: false,
        },
        {
          name: "data.js",
          isFolder: false,
        },
        {
          name: "Index.js",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "public",
      isFolder: true,
      children: [
        {
          name: "index.html",
          isFolder: false,
        },
        {
          name: "styles.css",
          isFolder: false,
        },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
  ],
};

function App() {
  const [isExpanded, setExpand] = useState<boolean>(true);

  return (
    <div className="App">
      <div className="rootdirectory" onClick={() => setExpand(!isExpanded)}>
        <div className="expander"></div>
        <div className="diricon">
          <Icon isExpanded={isExpanded}></Icon>
        </div>
        <div className="dirname"> {files.name}  </div>
      </div>
      {files.isFolder && isExpanded && <Directories childrens={files.children} />}
    </div>
  );
}

export default App;
