import React from 'react';
import usePosition from './hooks/usePosition';

export default function GetLocation() {
    const {
        latitude,
        longitude,
        error, } = usePosition();


    const loader = !latitude && !error ? (
        <>
            <div>Trying to fetch your location..</div>
        </>
    ) : null;

    return (
        <>
            {loader}
            latitude:{latitude}
            longitude: {longitude}
        </>
    )

}
