import React from "react";


function Alert(props) {
  return (
    <div style={{height: '50px'}}>
    {  props.alerts && <div>
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{props.alerts.type}</strong> : {props.alerts.msg}
        </div>
      </div>}
    </div>
  );
}

export default Alert;
