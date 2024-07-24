import { createContext, useContext, useState } from "react";

const VehicleContext = createContext();

function VehicleContextProvider (props){
    const [vehicle, setVehicle] = useState([]);
    return <VehicleContext.Provider value={[vehicle, setVehicle]} {...props} />
}

function useVehicleContext  (){
    const context = useContext(VehicleContext);
    if(!context) throw new Error("No vehicle Context");
    return context;
}

export { VehicleContextProvider, useVehicleContext};