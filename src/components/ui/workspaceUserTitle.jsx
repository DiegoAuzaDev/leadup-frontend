import UserAvatar from "./userAvatar";
import PropTypes from "prop-types";

function WorkspaceUserTitle({name, photo, email}){
    return (
      <div className=" flex flex-wrap items-center justify-between gap-4 my-6">
        <div className="flex items-center">
          <UserAvatar name={name} img={photo} />
          <div>
            <p className="capitalize m-0 font-bold">{name}</p>
            <p className=" m-0">{email}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="btn">Create Delivery</button>
          <button className="btn--outline">Assign Delivery</button>
        </div>
      </div>
    );
}

WorkspaceUserTitle.propTypes = {
    name : PropTypes.string,
    photo : PropTypes.string,
    email : PropTypes.string
}

export default WorkspaceUserTitle;

