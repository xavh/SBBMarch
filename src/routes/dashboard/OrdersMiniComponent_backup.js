import React, { useState } from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, JssProvider, useTheme } from 'react-jss';
import CardComponent from 'components/cards/CardComponent';
import Clock from 'react-live-clock';
import Flag from 'react-world-flags';
// import Blink from 'react-blink-tag';
import { Progress } from 'react-sweet-progress';
import './sweet-progress.css';
import 'react-sweet-progress/lib/style.css';
// import Gauge from 'components/gauge/gauge';
import 'components/led/led.css';
// <OrderGauge />import OrderGauge from 'components/ordergauge/OrderGauge';

const useStyles = createUseStyles((theme) => ({
    addButton: {
        backgroundColor: theme.color.lightGrayishBlue,
        color: theme.color.grayishBlue2,
        fontSize: '20px !important',
        padding: '7px !important'
    },
    itemTitle: {
        ...theme.typography.itemTitle,
        color: theme.color.veryWhite,
        marginTop: 5,
        marginLeft: 5
    },
    itemLegend: {
        ...theme.typography.itemLegend,
        color: theme.color.veryWhite
    },

    itemValue: {
        color: theme.color.veryWhite
    },
    itemPercent: {
        ...theme.typography.itemPercent,
        color: theme.color.veryWhite,
        position: 'absolute',
        zIndex: 1
    },
    greyTitle: {
        color: theme.color.veryWhite
    },
    tagStyles: {
        borderRadius: 5,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 11,
        letterSpacing: '0.5px',
        lineHeight: '14px',
        padding: '5px 12px 5px 12px'
    },
    checkboxWrapper: {
        cursor: 'pointer',
        marginRight: 16
    },
    separator: {
        borderLeft: `1px solid ${theme.color.lightGrayishBlue2}`,
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2,
        '@media (max-width: 768px)': {
            marginLeft: 14,
            marginRight: 0
        }
    }
}));

const TAGS = {
    LOW: { text: 'LOW', backgroundColor: '#FEC400', color: '#FFFFFF' },
    HIGH: { text: 'HIGH', backgroundColor: '#29CC97', color: '#FFFFFF' },
    NORMAL: { text: 'NORMAL', backgroundColor: '#F0F1F7', color: '#FFFFFF' },
    ALERT: { text: 'ALERT', backgroundColor: 'RED', color: '#FFFFFF' }
};

function OrdersMiniComponent(props) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const [items, setItems] = useState([
        {
            title: 'JAPAN',
            checked: false,
            tag: TAGS.LOW,
            flag: 'JP',
            fx: 'flag',
            timezone: 'Asia/Tokyo',
            percent: '126',
            orders: '11295',
            status: 'active',
            oos: '14',
            oosstatus: 'high'
        },
        {
            title: 'USA',
            checked: false,
            tag: TAGS.ALERT,
            flag: 'US',
            timezone: 'America/Chicago',
            blink: 'slow',
            percent: '0',
            orders: '0',
            status: 'error',
            oos: '8',
            oosstatus: 'low'
        },
        {
            title: 'FRANCE',
            checked: false,
            tag: TAGS.LOW,
            flag: 'FR',
            timezone: 'Europe/Paris',
            percent: '22',
            orders: '89',
            oos: '10'
        },
        {
            title: 'TAIWAN',
            checked: false,
            tag: TAGS.HIGH,
            flag: 'TW',
            timezone: 'Asia/Taipei',
            percent: '80',
            orders: '76',
            oos: '3'
        },
        {
            title: 'UNITED KINGDOM',
            checked: true,
            tag: TAGS.HIGH,
            flag: 'GB',
            timezone: 'Europe/London',
            percent: '100',
            orders: '96',
            oos: '10'
        },
        {
            title: 'GERMANY',
            checked: false,
            tag: TAGS.NORMAL,
            flag: 'DE',
            timezone: 'Europe/Berlin',
            percent: '58',
            orders: '16',
            oos: '10'
        },
        {
            title: 'ITALY',
            checked: false,
            tag: TAGS.HIGH,
            flag: 'IT',
            timezone: 'Europe/Rome',
            percent: '97',
            orders: '36',
            oos: '10'
        },
        {
            title: 'BELGIUM',
            checked: false,
            tag: TAGS.LOW,
            flag: 'BE',
            timezone: 'Europe/Brussels',
            percent: '32',
            orders: '16',
            oos: '10'
        },
        {
            title: 'NETHERLANDS',
            checked: false,
            tag: TAGS.LOW,
            flag: 'NL',
            timezone: 'Europe/Amsterdam',
            percent: '2',
            orders: '6',
            oos: '10'
        },
        {
            title: 'SPAIN',
            checked: false,
            tag: TAGS.HIGH,
            flag: 'ES',
            timezone: 'Europe/Madrid',
            percent: '89',
            orders: '5',
            oos: '11'
        },
        {
            title: 'SWITZERLAND',
            checked: false,
            tag: TAGS.LOW,
            flag: 'CH',
            timezone: 'Europe/Zurich',
            percent: '12',
            orders: '1',
            oos: '8'
        }
    ]);

    return (
        <CardComponent
            containerStyles={props.containerStyles}
            //title='SYSTEM MONITOR'
            // link='View all'
            //subtitle='LAST UPDATE: 10:15:00AM'
            items={[
                <Row horizontal='space-between' vertical='center'></Row>,
                ...items.map((item, index) => (
                    <OrderComponent classes={classes} index={index} item={item} />
                ))
            ]}
        />
    );
}

function OrderComponent({ classes, index, item = {} }) {
    const { tag = {} } = item;
    return (
        <div>
            <Column flexGrow={1}>
                <Row
                    wrap
                    horizontal='spaced'
                    breakpoints={{ 900: 'column' }}
                    style={{
                        color: '#E0E0E0',
                        backgroundColor: '#323641',
                        borderBottom: '1px solid rgba(0,0,0,0.5)',
                        borderTop: '1px solid rgba(155,155,155,0.5)'
                    }}
                >
                    <Column
                        style={{
                            maxWidth: 30,
                            horizontal: 'left'
                            //justifyContent: 'center' //Centered vertically
                        }}
                        breakpoints={{
                            1000: { backgroundColor: '#0A1128' },
                            900: { backgroundColor: '#8A1128' },
                            800: { backgroundColor: '#FA1128' }
                        }}
                        flexGrow={1}
                        horizontal='center'
                    >
                        <Flag
                            code={item.flag}
                            box-shadow='rgba(0, 0, 0, 0.2) 0px 1px 4px 1px'
                            height='24'
                            width='28'
                            align='left'
                            style={{ marginRight: 4, marginLeft: 8 }}
                        />
                    </Column>
                    <Column
                        style={{
                            borderRight: '1px solid rgba(0,0,0,0.5)',
                            maxWidth: 200
                        }}
                        breakpoints={{
                            1000: { backgroundColor: '#0A1128' },
                            900: { backgroundColor: '#8A1128' },
                            800: { backgroundColor: '#FA1128' }
                        }}
                        flexGrow={1}
                        horizontal='left'
                    >
                        <span className={classes.itemTitle}>{item.title}</span>
                        <Clock
                            format={'HH:mm:ssA'}
                            ticking={true}
                            timezone={item.timezone}
                            style={{
                                fontSize: '0.5em',
                                marginLeft: 5,
                                //color: '#daf6ff',
                                maxWidth: 200
                                //textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                //textShadowOffset: { width: -1, height: 1 },
                                //textShadowRadius: 10
                            }}
                        />
                    </Column>
                    <Column
                        style={{
                            borderLeft: '1px solid rgba(155,155,155,0.5)',
                            borderRight: '1px solid rgba(0,0,0,0.5)'
                        }}
                        breakpoints={{
                            1000: { backgroundColor: '#0A1128' },
                            900: { backgroundColor: '#8A1128' },
                            800: { backgroundColor: '#FA1128' }
                        }}
                        flexGrow={1}
                        horizontal='left'
                    >
                        <span className={classes.itemTitle}>LAST ORDER</span>
                        <span className={classes.itemTitle}>
                            <Clock
                                format={'HH:mm:ssA'}
                                ticking={true}
                                timezone={item.timezone}
                                style={{ fontSize: '1em' }}
                            />
                        </span>
                    </Column>
                    <Column
                        style={{
                            borderLeft: '1px solid rgba(155,155,155,0.5)',
                            borderRight: '1px solid rgba(0,0,0,0.5)'
                        }}
                        breakpoints={{
                            1000: { backgroundColor: '#0A1128' },
                            900: { backgroundColor: '#8A1128' },
                            800: { backgroundColor: '#FA1128' }
                        }}
                        flexGrow={1}
                        horizontal='left'
                    >
                        <span className={classes.itemTitle} style={{}}>
                            {item.orders} ORDER(S)
                        </span>
                        <Progress
                            style={{
                                fontSize: 10,
                                color: 'white'
                            }}
                            status={item.status}
                            percent={item.percent}
                            maxWidth={90}
                            theme={{
                                error: {
                                    symbol: item.percent + '%',
                                    trailColor: 'pink',
                                    color: 'red'
                                },

                                active: {
                                    symbol: item.percent + '%',

                                    color: 'green'
                                },
                                success: {
                                    symbol: item.percent + '%',

                                    color: 'green'
                                }
                            }}
                        />
                        <span className={classes.itemLegend}>COMPARE TO AVG 7 DAYS H-1</span>
                    </Column>
                    <Column
                        style={{
                            borderLeft: '1px solid rgba(155,155,155,0.5)',
                            padding: 5
                        }}
                        breakpoints={{ 900: { backgroundColor: '#001F54', color: '#fff' } }}
                        flexGrow={1}
                        horizontal='center'
                    >
                        <Progress
                            style={{
                                fontSize: 10,
                                color: 'white'
                            }}
                            status={item.oosstatus}
                            percent={item.oos}
                            type='circle'
                            strokeWidth={12}
                            width={30}
                            theme={{
                                normal: {
                                    symbol: item.oos + '%',
                                    trailColor: '#8be59a',
                                    color: 'green'
                                },
                                low: {
                                    symbol: item.oos + '%',
                                    trailColor: '#fff65b',
                                    color: 'yellow'
                                },

                                high: {
                                    symbol: item.oos + '%',
                                    trailColor: 'pink',
                                    color: 'red'
                                }
                            }}
                        />

                        <span className={classes.itemLegend}>OOS</span>
                    </Column>
                </Row>
                <Row
                    wrap
                    horizontal='spaced'
                    style={{
                        marginTop: 0,
                        backgroundColor: '#323641',
                        borderTop: '1px solid rgba(155,155,155,0.5)',
                        borderBottom: '1px solid rgba(0,0,0,0.5)'
                    }}
                >
                    <Column
                        style={{
                            //minWidth: 250,
                            //maxWidth: 300,
                            padding: 0,
                            height: 16
                        }}
                        flexGrow={1}
                        horizontal='center'
                        breakpoints={{
                            700: {
                                backgroundColor: '#034078',
                                flexDirection: 'column-reverse'
                            }
                        }}
                    >
                        <div className='led-box'>
                            <div className='led-red'>
                                <p>LENGOW</p>
                            </div>

                            <div className='led-green'>
                                <p>OLAPIC</p>
                            </div>
                            <div className='led-green'>
                                <p>QUICKBUY</p>
                            </div>
                            <div className='led-green'>
                                <p>SAMPLES</p>
                            </div>
                            <div className='led-green'>
                                <p>FEED5</p>
                            </div>
                        </div>
                    </Column>
                </Row>
            </Column>
        </div>
    );
}

function TagComponent({ backgroundColor, classes, color, index, text }) {
    return (
        <Row
            horizontal='center'
            vertical='center'
            style={{ backgroundColor, color }}
            className={classes.tagStyles}
        >
            {text}
        </Row>
    );
}

export default OrdersMiniComponent;
