import React from 'react';
import { Column } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#FFFFFF',
        border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        cursor: 'pointer',
        maxWidth: 200,
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
    }
}));

function MiniCardComponent({ className = '', title, value }) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const composedClassName = [classes.container, className].join(' ');
    return (
        <Column flexGrow={1} className={composedClassName} horizontal='center' vertical='center'>
            <span className={classes.title}>{title}</span>
            <span className={classes.value}>{value}</span>
        </Column>
    );
}

export default MiniCardComponent;
