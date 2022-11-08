import react, { useState } from "react";
import Directories from "../Directories/Directories";
import "./File.css";

const File = (files: any) => {
  const [isExpand, setExpand] = useState(true);
  const { child } = files;
  const { name, isFolder, children } = child;

  return (
    <div className="file">
      <>
        <div className="filedetails" onClick={() => setExpand(!isExpand)}>
          {child.isFolder ? (
            <div className="folderIcon">
              {isExpand ? <span>📂</span> : <span>📁</span>}
            </div>
          ) : (
            <div> 🗄️ </div>
          )}
          <div className="fileName">{name}</div>
        </div>
      </>
      {isFolder && isExpand && <Directories childrens={children} />}
    </div>
  );
};

export default File;
