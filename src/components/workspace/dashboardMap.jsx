import { Map } from "@vis.gl/react-google-maps";

function DashboardMap(){
    
     return (
       <Map
         defaultCenter={{ lat: 4.66197, lng: -74.12087 }}
         defaultZoom={12}
         gestureHandling={"greedy"}
         disableDefaultUI={true}
       />
     );
    
}

export default DashboardMap;