import PropTypes from "prop-types";
import UserAvatar from "./userAvatar";

function EmployeeStatus({ active, employeePhoto, employeeName, employeeId, updated }) {
  return (
    <div className=" flex gap-3 m-2 justify-between">
      <div className="flex gap-3">
        <UserAvatar img={employeePhoto} name={employeeName} />
        <div>
          <p className=" font-bold m-0">{employeeName}</p>
          <p className=" font-light m-0">{employeeId}</p>
        </div>
      </div>
      <p className="status capitalize status activeStatus">
        {active ? "active" : "away"}
      </p>
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
