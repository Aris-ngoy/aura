import { CalloutResponse, IGetDirection, IRouteResponse } from "@app/features/home/interface/ICallout";
import axios from "axios";
import { MAPBOX_ACCESS_TOKEN } from "react-native-dotenv";

const data : CalloutResponse = {
    "victim_information": {
        "names": "Sam Roux",
        "surname": "Jones",
        "vehicle": {
            "model": "Toyota Corolla Cross",
            "color": "White",
            "reg_number": "LMB 933 EC"
        },
        "medical": {
            "medical_insurance": "Yes",
            "allergies": "None",
            "illnesses": "Epilepsy, Chronic Migraines and low blood pressure",
            "medications": "Epitec 400 mg,Tanagril"
        },
        "next_of_kin": {
            "names": "Kaitlin Roux",
            "contact": "061 992 3045"
        }
    },
    "destination": {
        "address": "53 Pine Avenue, Ferndale, Johannesburg",
        "latitude": "-26.459607",
        "longitude": "28.594385"
    },
    "emergency_type": "Medical - User Collapse",
    "eta": "14 min (3 km)"
}

export const callout = async () : Promise<CalloutResponse> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return data;
};

export const getDirection = async (geoData : IGetDirection) : Promise<IRouteResponse> => {
    const { from, to } = geoData;
    const url = `https://api.mapbox.com/directions/v5/mapbox/cycling/${from.longitude},${from.latitude};${to.longitude},${to.latitude}?geometries=geojson&access_token=${MAPBOX_ACCESS_TOKEN}`
    const result = await axios.get(url);
    return result.data;
};

