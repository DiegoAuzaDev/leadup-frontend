import { AdvancedMarker } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import headquartersImg from "../../assets/headquarters.png";

function HeadquartersMarker({ headerquarter }) {
  return (
    <AdvancedMarker
      position={{
        lat: Number(headerquarter.location.latitude),
        lng: Number(headerquarter.location.longitude),
      }}
    >
      <img
        src={headquartersImg}
        alt="Image of headquester"
        className="w-[50px] md:w-[65px] lg:w-[80px]"
      />
    </AdvancedMarker>
  );
}


HeadquartersMarker.propTypes = {
  headerquarter: PropTypes.object,
};
export default HeadquartersMarker;
