import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";

function MapComponent({ mainCompanyPoint }) {
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  let centerMap = mainCompanyPoint ? mainCompanyPoint : { lat: 4.671547178629467, lng: -74.09684144291316 }
    return (
      <APIProvider apiKey={GOOGLE_API_KEY}>
        <Map
          defaultCenter={centerMap}
          defaultZoom={16}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={GOOGLE_API_KEY}
        >
          {mainCompanyPoint != null && (
            <AdvancedMarker
              position={{
                lat: mainCompanyPoint.lat,
                lng: mainCompanyPoint.lng,
              }}
            />
          )}
        </Map>
      </APIProvider>
    );
}

MapComponent.propTypes = {
  mainCompanyPoint: PropTypes.objectOf(PropTypes.number),
};

export default MapComponent;
