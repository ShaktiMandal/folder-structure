import react from 'react';
import File from '../File/File';
import './Directories.css';

const Directories = (props: any) => {

    return (
        <div className="directoreis">
            {   
            //    props && props.childrens &&
            //    props.childrens.map( (eachChild: any, index: number) => {
            //         console.log("Print each child", eachChild)
            //         return(
            //         <>
            //             <div className="dirdetails">
            //                 <div className="expander">

            //                 </div>
            //                 <div className="diricon">

            //                 </div>
            //                 <div className="dirname">
            //                 { eachChild.name }
            //                 </div>
            //             </div>
            //             { eachChild.isFolder && <File child={ eachChild.children } /> }
            //         </>
            //         )
                  
            //     })
            props && props.childrens &&
            props.childrens.map( (eachChild: any, index: number) => {
                
                return (
                <File child={ eachChild } />
                )
               
             })
            }

          
        </div>
    )
}

export default Directories;