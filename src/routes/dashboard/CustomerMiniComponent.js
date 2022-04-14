import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        maxWidth: 400,
        padding: '10px 10px',
        '&:hover': {
            borderColor: theme.color.lightBlue,
            '&:nth-child(n) > span': {
                color: theme.color.lightBlue
            }
        }
    },

    title: {
        ...theme.typography.cardTitle,
        color: theme.color.grayishBlue2,
        marginBottom: 12,
        minWidth: 102,
        fontWeight: 'normal',
        fontSize: 12,
        letterSpacing: '1px',
        lineHeight: '14px',
        textAlign: 'center'
    },
    value: {
        color: theme.color.veryDarkGrayishBlue,
        fontWeight: 'normal',
        fontSize: 12,
        letterSpacing: '1px',
        lineHeight: '14px',
        textAlign: 'center'
    },
    customerJourney: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle'
    },
    circleBaskets: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: 85,
        height: 85,
        borderRadius: 50,
        backgroundImage:
            'radial-gradient(#bbb 5px, transparent 6px, #bbb 50px, transparent 51px, transparent)',

        fontSize: 12,
        color: '#373a47'
    },
    circleCheckouts: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: 70,
        height: 70,

        backgroundImage:
            'radial-gradient(#bbb 5px, transparent 6px, #bbb 50px, transparent 51px, transparent)',
        borderRadius: 50,

        fontSize: 12,
        color: '#373a47'
    },
    circleOrders: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: 50,
        height: 50,
        borderRadius: 50,

        backgroundImage:
            'radial-gradient(green 5px, transparent 6px, green 50px, transparent 51px, transparent)',

        fontSize: 12,
        color: '#373a47'
    }
}));

function CustomerMiniComponent({ className = '', title, value }) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
    return (
        <Column flexGrow={1} className={composedClassName} horizontal='center' vertical='center'>
            <span className={classes.title}>{title}</span>
            <Row
                style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    verticalAlign: 'middle'
                }}
            >
                <Column
                    style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        verticalAlign: 'middle',
                        width: 120
                    }}
                >
                    <div id='circleBaskets' class={classes.circleBaskets}></div>
                </Column>
                <Column
                    style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        verticalAlign: 'middle',
                        width: 120
                    }}
                >
                    <div id='circleCheckouts' class={classes.circleCheckouts}></div>
                </Column>
                <Column
                    style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        verticalAlign: 'middle',
                        width: 120
                    }}
                >
                    {' '}
                    <div id='circleOrders' class={classes.circleOrders}></div>
                </Column>
            </Row>
            <Row>
                <Column>
                    <span className={classes.title}>Active carts</span>
                    <span className={classes.value}>1562</span>
                </Column>
                <Column>
                    <span className={classes.title}>Checking out</span>
                    <span className={classes.value}>254</span>
                </Column>
                <Column>
                    <span className={classes.title}>Purchased</span>
                    <span className={classes.value}>164</span>
                </Column>
            </Row>

            <p
                class='text'
                style={{
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                    fontSize: 12,
                    color: '#373a47'
                }}
            >
                Conversion rate: <b>5.31%</b>
            </p>
        </Column>
    );
}

export default CustomerMiniComponent;
