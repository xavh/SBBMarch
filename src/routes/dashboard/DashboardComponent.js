import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles } from 'react-jss';
import MiniCardComponent from 'components/cards/MiniCardComponent';
import CustomerMiniComponent from './CustomerMiniComponent';
import ReleaseMiniComponent from './ReleaseMiniComponent';
import TodayTrendsComponent from './TodayTrendsComponent';
import UnresolvedTicketsComponent from './UnresolvedTicketsComponent';
import TasksComponent from './TasksComponent';
import OrdersMiniComponent from './OrdersMiniComponent';
import CustomGlobe from 'components/CustomGlobe/CustomGlobe';
import TouchCarousel from 'components/carousel/carousel';

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
    },
    globe: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30
        }
    },
    ecom: {
        marginTop: 0,
        '@media (max-width: 1024px)': {
            marginTop: 30,
            alignSelf: 'stretch',
            flexGrow: 1
        }
    }
});

function DashboardComponent() {
    const classes = useStyles();
    return (
        <Column>
            <Row breakpoints={{ 1024: 'column' }}>
                <Column>
                    <CustomGlobe containerStyles={classes.globe} />
                    <TouchCarousel style={{ marginTop: 30 }} />
                </Column>
                <Column flexGrow='1'>
                    <OrdersMiniComponent containerStyles={classes.ecom} />
                </Column>
            </Row>
        </Column>
    );
}

export default DashboardComponent;
