import { AdvancedMarker, Map, Marker, Pin } from "@vis.gl/react-google-maps";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

// TODO this component need to be refactor after working with multiple companies
function DashboardMap({ userCompanyList }) {
  const [companyList, setCompanyList] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 4.66197,
    lng: -74.12087,
  });

  const options = useMemo(
    () => ({
      clickableIcons: false,
      streetViewControl: false,
      mapTypeControl: false,
    }),
    []
  );

  useEffect(() => {
    if (userCompanyList.length != 0) {
      setMapCenter({
        lat: Number(userCompanyList[0].location.latitude),
        lng: Number(userCompanyList[0].location.longitude),
      });
    }
    setCompanyList(userCompanyList);
  }, [userCompanyList]);

  const handleCenterChanged = (map) => {
    const newCenter = map.getCenter().toJSON();
    setMapCenter(newCenter);
  };

  return (
    <Map
      mapId={"1fc0053bbd3b1430"}
      center={mapCenter}
      defaultZoom={12}
      minZoom={6}
      onCenterChanged={(ev) => handleCenterChanged(ev.map)}
      gestureHandling={"greedy"}
      options={options}
    >
      {companyList.map((company) => (
        <AdvancedMarker
          key={company._id}
          position={{
            lat: Number(company.location.latitude),
            lng: Number(company.location.longitude),
          }}
        >
          <Pin
            background={"#0f9d58"}
            borderColor={"#006425"}
            glyphColor={"#60d98f"}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
}

DashboardMap.propTypes = {
  userCompanyList: PropTypes.array,
};

export default DashboardMap;
