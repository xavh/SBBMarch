import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import OrdersMiniComponent from './OrdersMiniComponent';
import CustomGlobe from 'components/CustomGlobe/CustomGlobe';

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

function DashboardComponent() {
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
                        title='HEADLESS - System info'
                        value='SFCC 1.12.39.1 FRONT-END RELEASE 1.12.39.1 MY ACCOUNT PCD FRONT 1.64.1 CHECKOUT PCD FRONT 1.87.1 NEW ECO API PCS'
                    />
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
                        value='789,000.50 €'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Total orders'
                        value='4200'
                    />
                    <MiniCardComponent
                        className={classes.miniCardContainer}
                        title='Customer behavior'
                        value='Status chart'
                    />
                </Row>
            </Row>
            <Row
                horizontal='space-between'
                className={classes.lastRow}
                breakpoints={{ 1024: 'column' }}
            >
                <CustomGlobe containerStyles={classes.tasks} />
                <OrdersMiniComponent containerStyles={classes.tasks} />
            </Row>
        </Column>
    );
}

export default DashboardComponent;
