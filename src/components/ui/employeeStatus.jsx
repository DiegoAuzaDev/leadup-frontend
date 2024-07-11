import PropTypes from "prop-types";
import UserAvatar from "./userAvatar";
import getTime from "../../utils/workspace/getTime";
import { useEffect, useState } from "react";

function EmployeeStatus({
  active,
  employeePhoto,
  employeeName,
  employeeId,
  updated,
}) {

  const [awayTime, setAwayTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  useEffect(() => {
    setAwayTime(getTime(updated));
  }, [updated]);

  const manageAway = ()=>{
    if(awayTime.days > 0){
      return "away"
    }
    if(awayTime.hours > 1  ){
      return awayTime.hours + " hours";
    }
    if(awayTime.hours < 1 ){
      return awayTime.minutes + " minutes";
    }
  }

  return (
    <div className=" flex gap-3 m-2 justify-between flex-wrap">
      <div className="flex gap-3">
        <UserAvatar img={employeePhoto} name={employeeName} />
        <div>
          <p className=" font-bold m-0">{employeeName}</p>
          <p className=" font-light m-0">{employeeId}</p>
        </div>
      </div>
      <p
        className={`status status ${
          active ? "activeStatus" : "inactiveStatus"
        }`}
      >
        {active ? "active" : manageAway()}
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
