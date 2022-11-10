import React from "react";

const Icon = (props) => {
  return (
    <div className="icon-container">
      {props.isExpanded ? (
        <span>
          <span color="white">
            <svg>
              <line
                x1="0"
                y1="0"
                x2="5"
                y2="5"
                style={{ stroke: "white", strokeWidth: "2" }}
              />
              <line
                x1="10"
                y1="0"
                x2="5"
                y2="5"
                style={{ stroke: "white", strokeWidth: "2" }}
              />
            </svg>
          </span>
          <span color="white">
            {" "}
            📂{" "}
          </span>
        </span>
      ) : (
        <span>
          <span>
            <svg>
              <line
                x1="0"
                y1="0"
                x2="5"
                y2="5"
                style={{ stroke: "white", strokeWidth: "2" }}
              />
              <line
                x1="5"
                y1="5"
                x2="0"
                y2="10"
                style={{ stroke: "white", strokeWidth: "2" }}
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </span>
          <span color="white">
            {" "}
            📁{" "}
          </span>
        </span>
      )}
    </div>
  );
};

export default Icon;
