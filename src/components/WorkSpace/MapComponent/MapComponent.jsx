import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function MapComponent({ centerPoint }) {
  console.log(centerPoint)
   const [center, setCenter] = useState({
     lat: centerPoint ? centerPoint.latitude : 2.9242407,
     lng: centerPoint ? centerPoint.longitude : -75.2919197,
   });

   useEffect(() => {
     if (centerPoint) {
       // Update center state if centerPoint changes
       setCenter({
         lat: centerPoint.latitude,
         lng: centerPoint.longitude.Number(),
       });
     }
   }, []);
console.log(center)
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        defaultCenter={center}
        defaultZoom={16}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={GOOGLE_API_KEY}
      >
        <AdvancedMarker
          position={{ lat: center.lat, lng: center.lng }}
        />
      </Map>
    </APIProvider>
  );
}

MapComponent.propTypes = {
  centerPoint: PropTypes.any,
};

export default MapComponent;
