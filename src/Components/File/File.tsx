import react from 'react';
import Directories from '../Directories/Directories';
import './File.css';

const File = ( files: any) => {
    const { child } = files;
    const { name, isFolder, children } = child;
    console.log("Print child", name)
    return (
        <div className="file">
            <>
                <div className="filedetails">
                    { child.isFolder ?  <div className="folderIcon">🗀</div> : <div> 🗄️ </div>}
                    <div className="fileName">
                        { name }
                    </div>
                </div>
            </> 
            { isFolder &&  <Directories childrens={ children }/> }
        </div>
    )
}


export default File;