import { useState } from "react";
import "./App.css";
import Directories from "./Components/Directories/Directories";

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
  const [isExpand, setExpand] = useState(true);

  return (
    <div className="App">
      <div className="rootdirectory" onClick={() => setExpand(!isExpand)}>
        <div className="expander"></div>
        <div className="diricon">
          {isExpand ? (
            <span> 
                <span color="white"> &gt; </span> 📂
            </span>
          ) : (
            <span>
              <span> &gt; </span> 📁
            </span>
          )}
        </div>
        <div className="dirname"> {files.name} </div>
      </div>
      {files.isFolder && isExpand && <Directories childrens={files.children} />}
    </div>
  );
}

export default App;
