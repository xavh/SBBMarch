import React from 'react';
import { ComposableMap, Graticule, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import { AnnotationLabel, AnnotationCalloutRect } from 'react-annotation';

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart = () => {
    return (
        <ComposableMap
            projection='geoAzimuthalEqualArea'
            projectionConfig={{
                rotate: [-20.0, -52.0, 0],
                scale: 400
            }}
        >
            <Graticule stroke='#EEE' />
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill='#DDD' stroke='#FFF' />
                    ))
                }
            </Geographies>
            <Marker coordinates={[2.257370003185798, 48.886136689965554]}>
                <circle cx={0} cy={0} r={4} fill='black' />
                <AnnotationLabel
                    x={0}
                    y={0}
                    dy={-10}
                    dx={-10}
                    color='green'
                    className='show-bg'
                    note={{
                        title: 'FRANCE',
                        label: '00:02:45',
                        align: 'middle',
                        orientation: 'topBottom',
                        bgPadding: 10,
                        padding: 10,
                        titleColor: 'green'
                    }}
                />
            </Marker>
            <Marker coordinates={[35.6798628871274, 139.74016353556289]}>
                <circle cx={0} cy={0} r={4} fill='black' />
                <AnnotationLabel
                    x={0}
                    y={0}
                    dy={-10}
                    dx={-10}
                    color={'#F53'}
                    className='show-bg'
                    note={{
                        title: 'JAPAN',
                        label: '01:12:43',
                        align: 'middle',
                        orientation: 'topBottom',
                        bgPadding: 20,
                        padding: 15,
                        titleColor: '#F53'
                    }}
                />
            </Marker>
            <Marker coordinates={[-0.1342772214014758, 51.516106433018194]}>
                <circle cx={0} cy={0} r={2} fill='#DDD' />
                <AnnotationLabel
                    x={0}
                    y={0}
                    dy={-10}
                    dx={-10}
                    color={'green'}
                    className='show-bg'
                    note={{
                        title: 'UNITED KINGDOM',
                        label: '00:26:43',
                        align: 'middle',
                        orientation: 'topBottom',
                        bgPadding: 20,
                        padding: 15,
                        titleColor: 'green'
                    }}
                />
            </Marker>
            }}
        </ComposableMap>
    );
};
export default MapChart;
