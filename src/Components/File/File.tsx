import react, { useState } from "react";
import Directories from "../Directories/Directories";
import "./File.css";
import Icon from '../Icon/Icon';

const File = (files: any) => {
  const [isExpanded, setExpand] = useState(true);
  const { child } = files;
  const { name, isFolder, children } = child;

  return (
    <div className="file">
      <>
        <div className="rootdirectory" onClick={() => setExpand(!isExpanded)}>
          {child.isFolder ? (
            <div className="folderIcon">
              <Icon isExpanded={isExpanded}></Icon>
            </div>
          ) : (
            <div> 🗄️ </div>
          )}
          <div className="fileName">{name}</div>
        </div>
      </>
      {isFolder && isExpanded && <Directories childrens={children} />}
    </div>
  );
};

export default File;
