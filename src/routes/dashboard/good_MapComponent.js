import React from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule,
    Line,
    Sphere,
    Marker,
    Annotation,
    ZoomableGroup
} from 'react-simple-maps';
import { PatternLines } from '@vx/pattern';
import { AnnotationLabel, AnnotationCalloutRect } from 'react-annotation';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

// https://www.worldatlas.com/articles/top-coffee-producing-countries.html
const highlighted = ['FRA', 'JPN', 'DEU', 'ITA', 'ESP', 'GBR', 'USA', 'TWN', 'NLD'];

const flightDestinations = [
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [139.7416110129884, 35.681737203956395], city: 'Tokyo' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [-73.97237854380262, 40.76394297513674], city: 'New York' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [-0.1342772214014758, 51.516106433018194], city: 'London' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [121.53819514157121, 25.041913368356095], city: 'Taipei' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [12.48427651384003, 41.9026202275619], city: 'Rome' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [-3.6864319245893853, 40.4301930625121], city: 'Madrid' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [13.30983599895552, 52.50004064118636], city: 'Berlin' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [4.879162888534921, 52.3598172794828], city: 'Amsterdam' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [4.355531822907267, 50.83633914791827], city: 'Brussels' }
    },
    {
        from: { coord: [2.257370003185798, 48.886136689965554], city: 'Paris' },
        to: { coord: [6.148283977934767, 46.20377540905383], city: 'Geneva' }
    }
];

const MapComponent = () => {
    return (
        <ComposableMap
            projection='geoAzimuthalEqualArea'
            projectionConfig={{
                rotate: [20.0, -80.0, 0],
                scale: 300
            }}
        >
            <ZoomableGroup zoom={1}>
                <PatternLines id='lines' height={6} width={6} strokeWidth={5} background='green' />
                <Sphere stroke='#999' />
                <Graticule stroke='#DDD' />
                <Geographies geography={geoUrl} stroke='#999' strokeWidth={0.5}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const isHighlighted = highlighted.indexOf(geo.properties.ISO_A3) !== -1;
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={isHighlighted ? "url('#lines')" : '#EEE'}
                                    onClick={() => console.log(geo.properties.ISO_A3)}
                                />
                            );
                        })
                    }
                </Geographies>

                {flightDestinations.map((route) => (
                    <>
                        <Line
                            key={route.to.city}
                            from={route.from.coord}
                            to={route.to.coord}
                            stroke='black'
                            strokeWidth={1}
                            strokeLinecap='round'
                        />
                        <Marker coordinates={route.to.coord}>
                            <circle r={2} fill='black' />
                        </Marker>

                        <Annotation subject={route.to.coord} dx={0} dy={0} fill='black'>
                            <text fontSize='10px' x='3'>
                                {route.to.city}
                            </text>
                        </Annotation>
                    </>
                ))}
                <Marker coordinates={[2.257370003185798, 48.886136689965554]}>
                    <circle r={2} fill='black' />
                </Marker>

                <Marker coordinates={[2.257370003185798, 48.886136689965554]}>
                    <circle cx={0} cy={0} r={4} fill='black' />
                    <AnnotationLabel
                        x={0}
                        y={0}
                        dy={-10}
                        dx={-10}
                        color='red'
                        className='show-bg'
                        note={{
                            title: 'FRANCE',
                            label: '01:08:28',
                            align: 'middle',
                            orientation: 'topBottom',
                            bgPadding: 10,
                            padding: 10,
                            titleColor: 'red'
                        }}
                    />
                </Marker>
            </ZoomableGroup>
        </ComposableMap>
    );
};

export default MapComponent;
