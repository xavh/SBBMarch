import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';
import { COUNTRIES_DATA } from './countries_data';
import HEX_DATA from './countries_hex_data.json';
import Globe from 'react-globe.gl';

const getRandomCountry = () => {
    return COUNTRIES_DATA[Math.floor(Math.random() * COUNTRIES_DATA.length)];
};

export default function CustomGlobe() {
    const globeEl = useRef();
    const country = getRandomCountry();
    const [selectedCountry, setSelectedCountry] = useState({
        lat: country.latitude,
        lng: country.longitude,
        label: country.name,
        code: country.country
    });
    const [hex, setHex] = useState({ features: [] });
    const OPACITY = 0.7;

    //Marker markets points
    const markerData = [
        {
            //Paris
            lat: 48.886136689965554,
            lng: 2.257370003185798,
            size: 0,
            color: 'green',
            radius: 0.4
        },

        {
            //Tokyo
            lat: 35.681737203956395,
            lng: 139.7416110129884,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        {
            //Tokyo API point 2
            lat: 35.681737203956395,
            lng: 138.7416110129884,
            size: 0,
            color: 'yellow',
            radius: 0.4
        },
        {
            //Tokyo API point 3
            lat: 35.681737203956395,
            lng: 137.7416110129884,
            size: 0,
            color: 'blue',
            radius: 0.4
        },
        //New York
        {
            lat: 40.76394297513674,
            lng: -73.97237854380262,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        //London
        {
            lat: 51.516106433018194,
            lng: -0.1342772214014758,
            size: 0,
            color: 'green',
            radius: 0.4
        },

        // Taipei
        {
            lat: 25.041913368356095,
            lng: 121.53819514157121,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        // Rome

        {
            lat: 41.9026202275619,
            lng: 12.48427651384003,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        // Madrid
        {
            lat: 40.4301930625121,
            lng: -3.6864319245893853,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        // Berlin
        {
            lat: 52.50004064118636,
            lng: 13.30983599895552,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        //Amsterdam

        {
            lat: 52.3598172794828,
            lng: 4.879162888534921,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        //Brussels
        {
            lat: 50.83633914791827,
            lng: 4.355531822907267,
            size: 0,
            color: 'green',
            radius: 0.4
        },
        //Geneva

        {
            lat: 46.20377540905383,
            lng: 6.148283977934767,
            size: 0,
            color: 'green',
            radius: 0.4
        }
    ];
    //orders status
    const arcsData = [
        {
            //Paris-Tokyo link checkout API- OK
            label: 'API Name',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 35.681737203956395,
            endLng: 139.7416110129884,
            color: 'red'
        },
        {
            //Paris-Tokyo link lengow API- OK
            label: 'LENGOW',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 35.681737203956395,
            endLng: 138.7416110129884,
            color: ' red'
        },
        {
            //Paris-Tokyo link lengow API- OK
            label: 'API SAMPLE',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 35.681737203956395,
            endLng: 137.7416110129884,
            color: 'red'
        },

        {
            //Paris-Rome link - OK
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 41.9026202275619,
            endLng: 12.48427651384003,
            color: ' green'
        },
        {
            //Paris-Amsterdam link - OK
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 52.3598172794828,
            endLng: 4.879162888534921,
            color: 'green'
        },
        {
            //Paris - NewYork link - OK
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 40.76394297513674,
            endLng: -73.97237854380262,
            color: 'green'
        },
        {
            // Paris - Taipei link - OK
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 25.041913368356095,
            endLng: 121.53819514157121,
            color: 'green'
        },
        // Paris - London link - OK
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 51.516106433018194,
            endLng: -0.1342772214014758,
            color: 'green'
        },
        // Paris - Madrid link - OK
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 40.4301930625121,
            endLng: -3.6864319245893853,
            color: 'green'
        },
        // Paris - Berlin link -
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 52.50004064118636,
            endLng: 13.30983599895552,
            color: 'green'
        },
        // Paris - Amsterdam link -
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 52.3598172794828,
            endLng: 4.879162888534921,
            color: 'green'
        },
        // Paris - Brussels link -
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 50.83633914791827,
            endLng: 4.355531822907267,
            color: 'green'
        },
        // Paris - Geneva link -
        {
            label: 'TEST',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 46.20377540905383,
            endLng: 6.148283977934767,
            color: 'green'
        }
    ];

    const [hoverArc, setHoverArc] = useState();

    useEffect(() => {
        setHex(HEX_DATA);
        //globeEl.current.globeMaterial.color = 'white';
    }, []);

    useEffect(() => {
        let interval;
        // globeEl.current.globeMaterial().color = 'blue';
        interval = setInterval(() => {
            (async () => {
                const country = getRandomCountry();
                setSelectedCountry({
                    lat: country.latitude,
                    lng: country.longitude,
                    label: country.name,
                    code: country.country
                });
            })();
        }, 5000); //Every 3 seconds
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, []);

    useEffect(() => {
        globeEl.current.controls().autoRotate = false;
        globeEl.current.controls().autoRotateSpeed = 1.5;

        const MAP_CENTER = { lat: 48.886136689965554, lng: 2.257370003185798, altitude: 0.7 };
        globeEl.current.pointOfView(MAP_CENTER, 0);
    }, [globeEl]);

    return (
        <Globe
            ref={globeEl}
            //globeImageUrl='/images/globe_tx.png'
            globeImageUrl='/images/no_clouds_8k.png'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
            //bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
            backgroundColor='rgba(0,0,0,0)'
            labelsData={[selectedCountry]}
            labelText={'label'}
            labelLabel={(d) => `
            <div style= background:black
            ><div><b>${d.label}</b></div>
        <div>Code:${d.code} - Country:${d.label} </div>
        <div>
        <i>Longitude: ${d.lng}</i>
        <i>Latitude:${d.lat}</i>
        
        </div></div>
      `}
            labelSize={0.7}
            labelColor={useCallback(() => 'black', [])}
            labelDotRadius={0.4}
            labelAltitude={0.005}
            labelIncludeDot={false}
            hexPolygonsData={hex.features}
            hexPolygonResolution={3} //values higher than 3 makes it buggy
            hexPolygonMargin={0.1}
            hexPolygonColor={useCallback(() => 'red', [])}
            hexPolygonAltitude={0.0015}
            pointsData={markerData}
            pointAltitude='size'
            pointRadius='radius'
            pointColor='color'
            pointsMerge={true}
            animateIn={true}
            width={1100}
            height={650}
            showGlobe={true}
            showGraticules={true}
            showAtmosphere={true}
            atmosphereAltitude={0.1}
            atmosphereColor='black'
            //arcColor={(d) => [`rgba(0, 255, 0, ${OPACITY})`, `rgba(255, 0, 0, ${OPACITY})`]}
            arcColor={'color'}
            arcStroke={0.3}
            arcsData={arcsData}
            arcAltitude={0.125}
            arcLabel={(d) => `
            <div style= background:#323641
            ><div><b>${d.label}</b></div>
        
        </div></div>
      `}
            arcDashLength={0.5}
            arcDashGap={0.01}
            arcDashAnimateTime={2000}
            arcsTransitionDuration={2000}
        />
    );
}
