import { APIProvider, Map } from "@vis.gl/react-google-maps";

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

export default MapComponent;
