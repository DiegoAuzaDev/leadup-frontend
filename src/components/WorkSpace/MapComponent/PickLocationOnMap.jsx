import PropTypes from "prop-types";
import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function PickLocationOnMap({ markerCenter, setMarkerCenter }) {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  const defaultCenter = {
    lat: 4.671547178629467,
    lng: -74.09684144291316,
  };
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={"1fc0053bbd3b1430"}
        defaultZoom={markerCenter ? 18 : 12}
        defaultCenter={markerCenter ? markerCenter : defaultCenter}
        maxZoom={20}
        onClick={(ev) => {
          setMarkerCenter(ev.detail.latLng);
        }}
      >
        {markerCenter && (
          <AdvancedMarker
            draggable={true}
            onDragEnd={(ev) => {
              setMarkerCenter({
                lat: ev.latLng.lat(),
                lng: ev.latLng.lng(),
              });
            }}
            position={markerCenter}
          ></AdvancedMarker>
        )}
      </Map>
    </APIProvider>
  );
}

PickLocationOnMap.propTypes = {
  markerCenter: PropTypes.object,
  setMarkerCenter: PropTypes.func,
};
export default PickLocationOnMap;
