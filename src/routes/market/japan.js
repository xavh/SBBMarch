import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import CustomGlobe from 'components/CustomGlobe/GlobeJapan';

const useStyles = createUseStyles({
    cardsContainer: {
        marginRight: -30,
        marginTop: -30
    },
    cardRow: {
        marginTop: 30,
        '@media (max-width: 768px)': {
            marginTop: 0
        }
    },
    miniCardContainer: {
        flexGrow: 1,
        marginRight: 30,
        '@media (max-width: 768px)': {
            marginTop: 30,
            maxWidth: 'none'
        }
    },
    todayTrends: {
        marginTop: 30
    },
    lastRow: {
        marginTop: 30
    },
    unresolvedTickets: {
        marginRight: 30,
        '@media (max-width: 1024px)': {
            marginRight: 0
        }
    },

    tasks: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    }
});

function JapanComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            ></Row>
            <Row
                className={classes.cardsContainer}
                wrap
                flexGrow={1}
                horizontal='space-between'
                breakpoints={{ 768: 'column' }}
            >
                <Row
                    className={classes.cardRow}
                    wrap
                    flexGrow={1}
                    horizontal='space-between'
                    breakpoints={{ 384: 'column' }}
                >
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Visitors right now'
                        value='6860'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total sessions'
                        value='46,268'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total Sales'
                        value='789,000.50 ???'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total orders'
                        value='4200'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Customer behavior'
                        value='Active carts -> Checking out -> Purchased'
                    />
                </Row>
            </Row>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <CustomGlobe containerStyles={classes.tasks} />
            </Row>
        </Column>
    );
}

export default JapanComponent;
