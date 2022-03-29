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
            //Tokyo API 1
            lat: 35.681737203956395,
            lng: 139.7416110129884,
            size: 0,
            color: 'green',
            radius: 0.5
        },
        {
            //Tokyo API 2
            lat: 39.32316261389105,
            lng: 141.03497108268684,
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
            //Paris-Tokyo link checkout API- OK
            label: 'API Name 2',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 39.32316261389105,
            endLng: 141.03497108268684,
            color: ' green'
        }
    ];

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

        const MAP_CENTER = { lat: 35.681737203956395, lng: 139.7416110129884, altitude: 0.6 };
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
            //globeImageUrl='/images/globe_tx.png'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
            globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
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

            //hexPolygonsData={hex.features}
            //hexPolygonResolution={3} //values higher than 3 makes it buggy
            //hexPolygonMargin={0.1}
            //hexPolygonColor={useCallback(() => '#dddddd', [])}
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
