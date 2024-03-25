import { APIProvider, Map } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";

function MapComponent() {
  const GOOGLE_API_KEY =  import.meta.env.VITE_GOOGLE_MAP_API;
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        defaultCenter={{ lat: 2.9242407, lng: -75.2919197 }}
        defaultZoom={14}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      ></Map>
    </APIProvider>
  );
}

MapComponent.propTypes = {
  center: PropTypes.object,
};

export default MapComponent;

