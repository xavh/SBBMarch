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
        label: country.name
    });
    const [hex, setHex] = useState({ features: [] });
    const OPACITY = 0.7;

    //Marker markets
    const markerData = [
        {
            //Paris
            lat: 48.886136689965554,
            lng: 2.257370003185798,
            size: 0,
            color: 'green',
            radius: 0.5
        },

        {
            //Tokyo
            lat: 35.681737203956395,
            lng: 139.7416110129884,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        //New York
        {
            lat: 40.76394297513674,
            lng: -73.97237854380262,
            size: 0,
            color: 'red',
            radius: 0.5
        },
        //London
        {
            lat: 51.516106433018194,
            lng: -0.1342772214014758,
            size: 0,
            color: 'green',
            radius: 0.5
        },

        // Taipei
        {
            lat: 25.041913368356095,
            lng: 121.53819514157121,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        // Rome

        {
            lat: 41.9026202275619,
            lng: 12.48427651384003,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        // Madrid
        {
            lat: 40.4301930625121,
            lng: -3.6864319245893853,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        // Berlin
        {
            lat: 52.50004064118636,
            lng: 13.30983599895552,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        //Amsterdam

        {
            lat: 52.3598172794828,
            lng: 4.879162888534921,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        //Brussels
        {
            lat: 50.83633914791827,
            lng: 4.355531822907267,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        //Geneva

        {
            lat: 46.20377540905383,
            lng: 6.148283977934767,
            size: 0,
            color: 'green',
            radius: 0.5
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
            color: ' green'
        },

        {
            //Paris-Rome link - OK
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 41.9026202275619,
            endLng: 12.48427651384003,
            color: ' green'
        },
        {
            //Paris-Amsterdam link - OK
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 52.3598172794828,
            endLng: 4.879162888534921,
            color: 'green'
        },
        {
            //Paris - NewYork link - OK
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 40.76394297513674,
            endLng: -73.97237854380262,
            color: 'red'
        },
        {
            // Paris - Taipei link - OK

            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 25.041913368356095,
            endLng: 121.53819514157121,
            color: 'green'
        },
        // Paris - London link - OK
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 51.516106433018194,
            endLng: -0.1342772214014758,
            color: 'green'
        },
        // Paris - Madrid link - OK
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 40.4301930625121,
            endLng: -3.6864319245893853,
            color: 'green'
        },
        // Paris - Berlin link -
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 52.50004064118636,
            endLng: 13.30983599895552,
            color: 'green'
        },
        // Paris - Amsterdam link -
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 52.3598172794828,
            endLng: 4.879162888534921,
            color: 'green'
        },
        // Paris - Brussels link -
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,

            endLat: 50.83633914791827,
            endLng: 4.355531822907267,
            color: 'green'
        },
        // Paris - Geneva link -
        {
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 46.20377540905383,
            endLng: 6.148283977934767,
            color: 'green'
        }
    ];
    //copyright
    const sendMessage = (e) => {
        e.preventDefault();
        alert('Proudly dev by XXX');
    };

    // Alert status notification
    // Gen random data
    const N = 10;
    const gData = [...Array(N).keys()].map(() => ({
        lat: 40.76394297513674,
        lng: -73.97237854380262,
        maxR: 6,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200
    }));
    const colorInterpolator = (t) => `rgba(255,0,0,${Math.sqrt(1 - t)})`;

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
                    label: country.name
                });
            })();
        }, 3000); //Every 3 seconds
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

    //useEffect(() => {
    //  const countryLocation = {
    //     lat: selectedCountry.lat,
    //     lng: selectedCountry.lng,
    //     label: selectedCountry.name,
    //     altitude: 1.5
    //  };

    //   globeEl.current.pointOfView(countryLocation, 0);
    // }, [selectedCountry]);

    return (
        <Globe
            ref={globeEl}
            //backgroundImageUrl={'/images/nighty-sky.png'}
            globeImageUrl='/images/globe_tx.png'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
            bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
            backgroundColor='rgba(0,0,0,0)'
            labelsData={[selectedCountry]}
            labelText={'label'}
            labelSize={1.5}
            labelColor={useCallback(() => 'black', [])}
            labelDotRadius={0.4}
            labelAltitude={0.005}
            labelIncludeDot={false}
            //labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
            //labelColor={d => colorScale(d.agency)}
            // labelLabel={d => `
            //<div><b>${d.label}</b></div>
            //<div>${d.agency} - ${d.program} Program</div>
            //<div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
            // `     }
            //      onLabelClick={d => window.open(d.url, '_blank')}
            // />;

            hexPolygonsData={hex.features}
            hexPolygonResolution={3} //values higher than 3 makes it buggy
            hexPolygonMargin={0.1}
            hexPolygonColor={useCallback(() => '#dddddd', [])}
            //hexPolygonColor={useCallback(() => '#ffffff', [])}
            pointsData={markerData}
            pointAltitude='size'
            pointRadius='radius'
            pointColor='color'
            pointsMerge={false}
            animateIn={true}
            width={1200}
            height={700}
            showGlobe={true}
            showGraticules={true}
            showAtmosphere={true}
            atmosphereAltitude={0.3}
            atmosphereColor='rgba(219, 220, 224, 0.2)'
            //onGlobeClick({ lat, lng }, event)
            //onGlobeRightClick({ lat, lng }, event)

            //polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
            // polygonAltitude={altitude}
            //  polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
            //  polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
            //  polygonLabel={({ properties: d }) => `
            //   <b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            //   Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
            // `}
            //  polygonsTransitionDuration={transitionDuration}

            ringsData={gData}
            ringColor={() => colorInterpolator}
            ringMaxRadius='maxR'
            ringPropagationSpeed='propagationSpeed'
            ringRepeatPeriod='repeatPeriod'
            arcColor={'color'}
            arcsData={arcsData}
            arcAltitude={0.125}
            arcLabel={'label'}
            arcDashLength={0.5}
            arcDashGap={0.01}
            arcDashAnimateTime={1500}
            arcsTransitionDuration={1000}
            //arcColor={(d) => {
            //   const op = !hoverArc ? OPACITY : d === hoverArc ? 0.9 : OPACITY / 4;
            //   return [`rgba(0, 255, 0, ${op})`, `rgba(0, 255, 0, ${op})`];
            //}}
            onArcHover={setHoverArc}
        />
    );
}
