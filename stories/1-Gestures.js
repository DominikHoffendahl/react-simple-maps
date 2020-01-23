import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from './../src';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const Worldmap = () => (
    <ComposableMap style={{ backgroundColor: '#eee' }}>
        <ZoomableGroup zoom={1}>
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            style={{
                                default: {
                                    fill: '#bbb',
                                    stroke: '#333',
                                    strokeWidth: '1px',
                                },
                            }}
                            geography={geo}
                        />
                    ))
                }
            </Geographies>
        </ZoomableGroup>
    </ComposableMap>
);

export default {
    title: 'Gestures',
    component: Worldmap,
};

export const PinchZoom = () => <Worldmap />;
