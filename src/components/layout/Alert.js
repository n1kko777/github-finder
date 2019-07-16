import React, { useContext } from "react";
import AlertConext from "../../context/alert/alertConext";

const Alert = () => {
  const alertConext = useContext(AlertConext);
  const { alert } = alertConext;

  return (
    alert != null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
