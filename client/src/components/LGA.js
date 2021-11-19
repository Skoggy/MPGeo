import React, { useState, useEffect } from 'react';
import usePosition from './hooks/usePosition';


export default function LGA() {
    const url = 'https://data.gov.au/geoserver/vic-local-government-areas-psma-administrative-boundaries/wfs?request=GetFeature&typeName=ckan_bdf92691_c6fe_42b9_a0e2_a4cd716fa811&outputFormat=json'

    const [info, setInfo] = useState(null);
    const

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

    const featuresArray = info?.features
    // console.log(featuresArray)

    // featuresArray && featuresArray.forEach(feature => {
    //     console.log(feature.properties.vic_lga__3)
    // })

    const hobsonsBay = featuresArray && featuresArray[13];
    hobsonsBay?.geometry.coordinates.forEach(coordinate =>
        coordinate.forEach(item => {
            item.forEach(thing =>
          
        })
    )

    console.log(hobsonsBay?.properties.vic_lga__3);

    // featuresArray && featuresArray.forEach(feature => {
    //     console.log(feature?.geometry.coordinates)
    // })





    return (
        <div>
        </div>
    )
}