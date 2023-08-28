import React from "react";


function Alert(props) {
  return (
    props.alerts && <div>
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alerts.type}</strong> : {props.alerts.msg}
      </div>
    </div>
  );
}

export default Alert;
