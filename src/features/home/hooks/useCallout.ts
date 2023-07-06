import { useQuery } from "@tanstack/react-query"
import { callout, getDirection } from "@app/features/home/network/callout"
import { IFeatureCollection, IGetDirection } from "@app/features/home/interface/ICallout"
import { Feature, GeoJsonProperties, Geometry } from "geojson"

export const useCallout = () => {
    return useQuery(['callout'], ()=> callout(),{
        cacheTime: 0,
    })
}

export const useGetDirection = (getData : IGetDirection) => {
    return useQuery(['direction', getData], ()=> getDirection(getData),{
        cacheTime: 0,
        enabled : getData.from.latitude !== 0 && getData.from.longitude !== 0 && getData.to.latitude !== 0 && getData.to.longitude !== 0,
        select : (data) => {

            // const feature: Feature<Geometry, GeoJsonProperties> = {
            //     type: "Feature",
            //     geometry: {
            //       type: "LineString",
            //       coordinates: [
            //         [12.00, 0]
            //       ]
            //     },
            //     properties: {}
            //   };

            const items : GeoJSON.FeatureCollection = {
                type : "FeatureCollection",
                features : data.routes.map((item) => {
                    return {
                        type : "Feature",
                        geometry : {
                            type : "LineString",
                            coordinates : item.geometry.coordinates
                        },
                        properties : {}
                    }
                })
            }
            return items
        }
    })
}

