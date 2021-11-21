import React, { useState, useEffect } from 'react';
import usePosition from './hooks/usePosition';


export default function LGA() {
    const url = 'https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json'

    const [info, setInfo] = useState(null);


    useEffect(() => {
        getLGA();
        async function getLGA() {
            const response = await fetch(url);
            const data = await response.json();

            setInfo(data)
        }

    }, [])
    const {
        latitude,
        longitude,
        error, } = usePosition();

    const [lat, setLat] = useState(latitude);

    const featuresArray = info?.features
    // console.log(featuresArray)

    // featuresArray && featuresArray.forEach(feature => {
    //     console.log(feature.properties.vic_lga__3)
    // })

    const hobsonsBay = featuresArray && featuresArray[13];

    //     hobsonsBay?.geometry.coordinates.forEach(coordinate => {
    //         coordinate.forEach(item => {
    //             item.forEach(thing => {
    //                 console.log(thing)

    //              )
    //         }
    //         })
    // })

    const checkIfLowerThan50 = (num) => {
        if (num < 50) {
            return true
        } return false
    }
    const geoArrays = hobsonsBay?.geometry.coordinates[0][0]
    const flattenedGeoArray = geoArrays?.flat();
    const rounded = flattenedGeoArray?.map(number => number.toFixed(4))
    // console.log(rounded)

    const checkLong = longitude?.toFixed(4).toString();
    const checkLat = latitude?.toFixed(4).toString();

    const bigArray = rounded?.filter(big => big.slice(0, 3) === "144")
    const littleArray = rounded?.filter(little => checkIfLowerThan50(little))
    // console.log(littleArray)
    // console.log(bigArray)

    // const found = rounded?.find(element => element === checkLong)

    const found = bigArray?.find(a => a === checkLong)
    const littleFound = littleArray?.find(a => a === checkLat)

    // console.log(littleFound)
    // console.log(found)
    // console.log(geoArrays?.flat())

    if (found && littleFound) {
        console.log("YOU ARE IN HOBSONS BAY")
    }



    // console.log(hobsonsBay?.geometry.coordinates[0][0]);

    // featuresArray && featuresArray.forEach(feature => {
    //     console.log(feature?.geometry.coordinates)
    // })





    return (
        <div>
        </div>
    )
}