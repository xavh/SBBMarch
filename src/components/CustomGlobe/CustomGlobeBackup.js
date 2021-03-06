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
            color: ' green'
        },
        {
            //Paris-Tokyo link lengow API- OK
            label: 'LENGOW',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 35.681737203956395,
            endLng: 138.7416110129884,
            color: ' yellow'
        },
        {
            //Paris-Tokyo link lengow API- OK
            label: 'API SAMPLE',
            startLat: 48.886136689965554,
            startLng: 2.257370003185798,
            endLat: 35.681737203956395,
            endLng: 137.7416110129884,
            color: 'blue'
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
            color: 'green'
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
    const [places, setPlaces] = useState([]);
    //locas
    // const [locas, setLocas] = useState({ features: [] });
    // const [altitude, setAltitude] = useState(0.1);
    //  const [transitionDuration, setTransitionDuration] = useState(1000);

    //copyright
    const sendMessage = (e) => {
        e.preventDefault();
        alert('Proudly dev by XXX');
    };

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    // Gen random data
    const Z = 30;
    const zData = [...Array(Z).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        size: 7 + Math.random() * 30,
        color: ['blue', 'green'][Math.round(Math.random() * 3)]
    }));

    // Alert status notification const N = 10; to turn on alert
    // Gen random data
    const N = 0;
    const gData = [...Array(N).keys()].map(() => ({
        lat: 40.76394297513674,
        lng: -73.97237854380262,
        maxR: 6,
        propagationSpeed: (Math.random() - 0.5) * 20 + 1,
        repeatPeriod: Math.random() * 2000 + 200
    }));
    const colorInterpolator = (t) => `rgba(255,0,0,${Math.sqrt(1 - t)})`;

    ////

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
        globeEl.current.controls().autoRotateSpeed = 1.25;

        const MAP_CENTER = { lat: 48.886136689965554, lng: 2.257370003185798, altitude: 1 };
        globeEl.current.pointOfView(MAP_CENTER, 0);
    }, [globeEl]);

    //best orders
    // useEffect(() => {
    // load data for markers best orders
    //   fetch('./ne_110m_admin_0_countries.geojson')
    //       .then((res) => res.json())
    //       .then((locas) => {
    //           setLocas(locas);

    //           setTimeout(() => {
    //              setTransitionDuration(10000);
    //              setAltitude(() => (feat) =>
    //                  Math.max(0.1, Math.sqrt(+feat.properties.POP_EST) * 7e-5)
    //                );
    //            }, 3000);
    //        });
    // }, []);
    //________________________
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
            // Marker data for orders
            // htmlElementsData={zData}
            // htmlElement={(d) => {
            //     const el = document.createElement('div');
            //    el.innerHTML = markerSvg;
            //   el.style.color = d.color;
            //   el.style.width = `${d.size}px`;

            //   el.style['pointer-events'] = 'auto';
            //   el.style.cursor = 'pointer';
            //  el.onclick = () => console.info(d);
            //   return el;
            // }}
            ref={globeEl}
            //backgroundImageUrl={'/images/nighty-sky.png'}
            globeImageUrl='/images/globe_tx.png'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
            //globeImageUrl='//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
            //bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
            backgroundColor='rgba(0,0,0,0)'
            labelsData={[selectedCountry]}
            labelText={'label'}
            labelSize={0.7}
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
            hexPolygonAltitude={0.001}
            //hexPolygonColor={useCallback(() => '#ffffff', [])}
            pointsData={markerData}
            pointAltitude='size'
            pointRadius='radius'
            pointColor='color'
            pointsMerge={true}
            animateIn={true}
            width={1200}
            height={700}
            showGlobe={true}
            showGraticules={true}
            showAtmosphere={true}
            atmosphereAltitude={0.1}
            atmosphereColor='black'
            //onGlobeClick({ lat, lng }, event)
            //onGlobeRightClick({ lat, lng }, event)

            //Best orders
            //polygonsData={locas.features.filter((d) => d.properties.ISO_A2 !== 'AQ')}
            //polygonAltitude={altitude}
            //polygonCapColor={() => 'rgba(200, 0, 0, 0.6)'}
            //polygonSideColor={() => 'rgba(0, 100, 0, 0.15)'}
            //polygonLabel={({ properties: d }) => `
            //<b>${d.ADMIN} (${d.ISO_A2})</b> <br />
            //Population: <i>${Math.round(+d.POP_EST / 1e4) / 1e2}M</i>
            //`}
            //polygonsTransitionDuration={transitionDuration}

            ringsData={gData}
            ringColor={() => colorInterpolator}
            ringMaxRadius='maxR'
            ringPropagationSpeed='propagationSpeed'
            ringRepeatPeriod='repeatPeriod'
            arcColor={'color'}
            arcStroke={0.25}
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
