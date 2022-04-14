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
    release: {
        display: 'inline-block',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle'
    },
    col1: {
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
    col2: {
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
    col3: {
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

function ReleaseMiniComponent({ className = '', title, value }) {
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
                <Column>
                    <span className={classes.title}>SFCC CORE</span>
                    <span className={classes.value}>1.12.39.1</span>
                </Column>
                <Column>
                    <span className={classes.title}>FRONT-END RELEASE</span>
                    <span className={classes.value}>1.12.39.1</span>
                </Column>
                <Column>
                    <span className={classes.title}>MY ACCOUNT PCD FRONT</span>
                    <span className={classes.value}>1.64.1</span>
                </Column>
                <Column>
                    <span className={classes.title}>CHECKOUT PCD FRONT</span>
                    <span className={classes.value}>1.87.1</span>
                </Column>
                <Column>
                    <span className={classes.title}>NEW ECO API</span>
                    <span className={classes.value}>1.87.1</span>
                </Column>
                <Column>
                    <span className={classes.title}>PCS</span>
                    <span className={classes.value}>1.87.1</span>
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
                ReleaseMiniComponent
            </p>
        </Column>
    );
}

export default ReleaseMiniComponent;
