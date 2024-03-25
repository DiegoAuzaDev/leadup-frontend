import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function MapComponent({ mainCompanyPoint }) {
  const defaultCenter = {
    lat: 4.671547178629467,
    lng: -74.09684144291316,
  };
  const [centerPoint, setCenterPoint] = useState({
    lat: 4.671547178629467,
    lng: -74.09684144291316,
  });
  useEffect(() => {
    if (Object.keys(mainCompanyPoint).length != 0) {
      setCenterPoint(mainCompanyPoint);
    }
  }, [mainCompanyPoint]);
  const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API;
  return (
    <APIProvider apiKey={GOOGLE_API_KEY}>
      <Map
        defaultZoom={16}
        defaultCenter={defaultCenter}
        center={centerPoint}
        maxZoom={20}
        minZoom={13}
        onCenterChanged={(ev)=>{
          setCenterPoint(ev.detail.center);
        }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={GOOGLE_API_KEY}
      >
        {Object.keys(mainCompanyPoint).length != 0 && (
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
