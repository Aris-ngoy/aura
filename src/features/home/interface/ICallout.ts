export interface CalloutResponse {
    victim_information: VictimInformation;
    destination:        Destination;
    emergency_type:     string;
    eta:                string;
}

export interface Destination {
    address:   string;
    latitude:  string;
    longitude: string;
}

export interface VictimInformation {
    names:       string;
    surname:     string;
    vehicle:     Vehicle;
    medical:     Medical;
    next_of_kin: NextOfKin;
}

export interface Medical {
    medical_insurance: string;
    allergies:         string;
    illnesses:         string;
    medications:       string;
}

export interface NextOfKin {
    names:   string;
    contact: string;
}

export interface Vehicle {
    model:      string;
    color:      string;
    reg_number: string;
}

export interface IGetDirection {
    from : {
        latitude: number;
        longitude: number;
    },
    to: {
        latitude: number;
        longitude: number;
    }
}

export interface IRouteResponse {
    routes:    Route[];
    waypoints: Waypoint[];
    code:      string;
    uuid:      string;
}

export interface Route {
    geometry:    Geometry;
    legs:        Leg[];
    weight_name: string;
    weight:      number;
    duration:    number;
    distance:    number;
}

export interface Geometry {
    coordinates: Array<number[]>;
    type:        string;
}

export interface Leg {
    steps:    any[];
    summary:  string;
    weight:   number;
    duration: number;
    distance: number;
}

export interface Waypoint {
    distance: number;
    name:     string;
    location: number[];
}

export interface IFeatureCollection {
    type:     string;
    features: Feature[];
}

export interface Feature {
    type:       string;
    geometry:   Geometry;
    properties ? : Properties;
}

// export interface Geometry {
//     type:        string;
//     coordinates: number[];
// }

export interface Properties {
    clearance: string;
}

