import React, { useEffect, useRef } from 'react';
import SvgGauge from 'svg-gauge';
import './gauge.css';

const defaultOptions = {
    animDuration: 5,
    showValue: true,
    initialValue: 0,
    max: 100,
    dialStartAngle: 90,
    dialEndAngle: 0,
    radius: 20,
    color: function (value) {
        if (value < -25) {
            return '#5ee432';
        } else if (value < 0) {
            return '#FF0000';
        } else if (value < 25) {
            return '#f7aa38';
        } else {
            return '#008000';
        }
    },
    nrOfLevels: 10,
    arcPadding: 0.1,
    cornerRadius: 3,
    percent: 0.6,
    // custom label renderer
    label: function (value) {
        return Math.round((value / this.max) * 100) + '%';
    }

    // Put any other defaults you want. e.g. dialStartAngle, dialEndAngle, radius, etc.
};

const Gauge = (props) => {
    const gaugeEl = useRef(null);
    const gaugeRef = useRef(null);
    useEffect(() => {
        if (!gaugeRef.current) {
            const options = { ...defaultOptions, ...props };
            gaugeRef.current = SvgGauge(gaugeEl.current, options);
            gaugeRef.current.setValue(options.initialValue);
        }
        gaugeRef.current.setValueAnimated(props.value, 1);
    }, [props]);

    return (
        <div ref={gaugeEl} className='gauge-container four'>
            <span class='label'>ORDERS</span>
            <span class='value-text'>ORDERS</span>
        </div>
    );
};

export default Gauge;
