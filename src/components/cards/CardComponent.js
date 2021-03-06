import React from 'react';
import { Column, Row } from 'simple-flexbox';
import { createUseStyles, useTheme } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
    container: {
        backgroundColor: '#F7F8FC',

        //border: `1px solid ${theme.color.lightGrayishBlue2}`,
        borderRadius: 4,
        padding: '2px 2px 2px 2px',
        height: '100%'
    },
    containerMobile: {
        padding: '12px 16px 6px 16px !important'
    },
    itemContainer: {
        marginLeft: -32,
        marginRight: -32,
        paddingLeft: 32,
        paddingRight: 32,
        paddingBottom: 0,
        paddingTop: 0,
        //borderBottom: `1px solid ${theme.color.lightGrayishBlue2}`,
        '&:last-child': {
            borderBottom: 'none'
        }
    },
    itemContainerMobile: {
        marginLeft: -16,
        marginRight: -16,
        paddingLeft: 16,
        paddingRight: 16
    },
    link: {
        ...theme.typography.link
    },
    subtitle: {
        ...theme.typography.smallSubtitle,
        color: theme.color.grayishBlue2
    },
    subtitle2: {
        color: theme.color.veryDarkGrayishBlue,
        marginLeft: 2
    },
    title: {
        ...theme.typography.cardTitle,
        color: theme.color.veryDarkGrayishBlue,
        fontSize: 12
    }
}));

function CardComponent(props) {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { title, link, subtitle, subtitleTwo, items, containerStyles } = props;
    function renderItem(item, index) {
        return (
            <Column
                className={classes.itemContainer}
                key={`item-${index}`}
                breakpoints={{ 426: classes.itemContainerMobile }}
            >
                {item}
            </Column>
        );
    }

    return (
        <Column
            flexGrow={1}
            className={[classes.container, containerStyles].join(' ')}
            breakpoints={{ 426: classes.containerMobile }}
        >
            <Row
                wrap
                flexGrow={1}
                vertical='center'
                horizontal='spaced'
                style={{ backgroundColor: '#323641', maxHeight: 24 }}
            >
                <Column
                    flexGrow={1}
                    style={{ backgroundColor: '#f7f8fc', color: theme.color.veryWhite }}
                >
                    <div className='led-box'>
                        <div className='led-green'>
                            <p>ACCOUNT</p>
                        </div>

                        <div className='led-green'>
                            <p>BASKET</p>
                        </div>
                        <div className='led-red'>
                            <p>CATEGORY</p>
                        </div>
                    </div>
                </Column>
                <Column
                    flexGrow={1}
                    style={{ backgroundColor: '#f7f8fc', color: theme.color.veryWhite }}
                >
                    <div className='led-box'>
                        <div className='led-green'>
                            <p>INVENTORY</p>
                        </div>
                        <div className='led-green'>
                            <p>ORDER</p>
                        </div>

                        <div className='led-green'>
                            <p>PAYMENT</p>
                        </div>
                    </div>
                </Column>
                <Column
                    flexGrow={1}
                    style={{ backgroundColor: '#f7f8fc', color: theme.color.veryWhite }}
                >
                    <div className='led-box'>
                        <div className='led-green'>
                            <p>PSP</p>
                        </div>
                        <div className='led-green'>
                            <p>PRODUCT</p>
                        </div>
                        <div className='led-green'>
                            <p>SHIPPING</p>
                        </div>
                    </div>
                </Column>
            </Row>

            {items.map(renderItem)}
        </Column>
    );
}

export default CardComponent;
