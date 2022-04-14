import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

const data = [
    {
        name: 'January',
        Iphone: 400
    },
    {
        name: 'March',
        Iphone: 1000
    },
    {
        name: 'May',
        Iphone: 4000
    },
    {
        name: 'July',
        Iphone: 800
    },
    {
        name: 'October',
        Iphone: 1200
    }
];

export default function VisitorChart() {
    return (
        <>
            <h2>Quarterly Sales for mobile phones</h2>
            <ResponsiveContainer width='90%' aspect={3}>
                <LineChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ top: 15, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid
                        strokeDasharray='0'
                        vertical=''
                        horizontal='true'
                        stroke='#243240'
                    />
                    <XAxis dataKey='name' tick={{ fill: '#fff' }} />
                    <YAxis tick={{ fill: '#fff' }} />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
                        cursor={false}
                        itemStyle={{ color: '#fff' }}
                    />

                    <Line
                        strokeWidth='5'
                        type='monotone'
                        dataKey='Iphone'
                        stroke='#2e4355'
                        dot={{
                            stroke: '#8884d8 ',
                            fill: '#2e4355',
                            strokeWidth: 1,
                            r: 5,
                            strokeDasharray: ''
                        }}
                        activeDot={{
                            stroke: '#8884d8',
                            fill: '#2e4355',
                            strokeWidth: 5,
                            r: 10,
                            strokeDasharray: ''
                        }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}

// https://learnui.design/tools/data-color-picker.html#single
