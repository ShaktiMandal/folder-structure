import react from "react";
import File from "../File/File";
import "./Directories.css";

const Directories = (props: any) => {
  return (
    <div className="directoreis">
      {props &&
        props.childrens &&
        props.childrens.map((eachChild: any, index: number) => {
          return <File child={eachChild} />;
        })}
    </div>
  );
};

export default Directories;
