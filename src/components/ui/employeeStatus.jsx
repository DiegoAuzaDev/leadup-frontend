import PropTypes from "prop-types";
import employeeStatus from "../../utils/workspace/employeeStatus";
import { useEffect } from "react";
import UserAvatar from "./userAvatar";

function EmployeeStatus({ active, employeePhoto, employeeName, employeeId, updated }) {
  return (
    <div>
      <UserAvatar img={employeePhoto} name={employeeName} />
    </div>
  );
}

EmployeeStatus.propTypes = {
  active: PropTypes.bool,
  employeeName: PropTypes.string,
  employeeId: PropTypes.string,
  employeePhoto: PropTypes.string,
  updated: PropTypes.string,
};

export default EmployeeStatus;
