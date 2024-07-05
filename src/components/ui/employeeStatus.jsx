import PropTypes from "prop-types";
import employeeStatus from "../../utils/workspace/employeeStatus";
import { useEffect } from "react";
import UserAvatar from "./userAvatar";

function EmployeeStatus({ status, employeePhoto, employeeName, employeeId }) {
  return (
    <div>
      <UserAvatar img={employeePhoto} name={employeeName} />
    </div>
  );
}

EmployeeStatus.propTypes = {
  status: PropTypes.string,
  employeeName: PropTypes.string,
  employeeId: PropTypes.string,
  employeePhoto: PropTypes.string,
};

export default EmployeeStatus;
