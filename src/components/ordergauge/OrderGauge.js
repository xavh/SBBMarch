import { PieChart, Pie, Legend, Cell, ResponsiveContainer, Label } from 'recharts';
import React from 'react';
import 'components/ordergauge/OrderGauge.css';

const data01 = [
    { name: 'NEW', value: 10 },
    { name: 'OPENED', value: 10 },
    { name: 'SHIPPED', value: 10 },
    { name: 'CANCELED', value: 10 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Bullet = ({ backgroundColor, size }) => {
    return (
        <div
            className='CircleBullet'
            style={{
                backgroundColor,
                width: size,
                height: size
            }}
        ></div>
    );
};

const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
        <ul className='LegendList'>
            {payload.map((entry, index) => (
                <li key={`item-${index}`}>
                    <div className='BulletLabel'>
                        <Bullet backgroundColor={entry.payload.fill} size='9px' />
                        <div className='BulletLabelText'>{entry.value}</div>
                    </div>
                    <div style={{ marginLeft: '10px' }}>{entry.payload.value}</div>
                </li>
            ))}
        </ul>
    );
};

const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
        <g>
            <text
                x={cx}
                y={cy}
                className='recharts-text recharts-label'
                textAnchor='middle'
                dominantBaseline='central'
                alignmentBaseline='middle'
                fontSize='10'
            >
                {labelText}
            </text>
            <text
                x={cx}
                y={cy + 20}
                className='recharts-text recharts-label'
                textAnchor='middle'
                dominantBaseline='central'
                alignmentBaseline='middle'
                fill='#0088FE'
                fontSize='20'
                fontWeight='500'
            >
                {value}
            </text>
        </g>
    );
};

export default function OrderGauge() {
    return (
        <div style={{ width: 200, height: 420 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data01}
                        dataKey='value'
                        cx={100}
                        cy={200}
                        innerRadius={60}
                        outerRadius={90}
                    >
                        {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                        <Label
                            content={<CustomLabel labelText='ORDERS' value={56} />}
                            position='center'
                        />
                    </Pie>
                    <Legend content={<CustomizedLegend />} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
