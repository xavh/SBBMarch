import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import data from './data';
import cx from 'classnames';
import NonPassiveTouchTarget from './NonPassiveTouchTarget';
import TouchCarousel, { clamp } from 'react-touch-carousel';
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC';

import './carousel.css';

const cardSize = 300;
const cardPadCount = 1;
const carouselWidth = clamp(window.innerWidth, 0, 300);

function CarouselContainer(props) {
    const {
        cursor,
        carouselState: { active, dragging },
        ...rest
    } = props;
    let current = -Math.round(cursor) % data.length;
    while (current < 0) {
        current += data.length;
    }
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
    return (
        <NonPassiveTouchTarget
            className={cx('carousel-container', {
                'is-active': active,
                'is-dragging': dragging
            })}
        >
            <NonPassiveTouchTarget
                className='carousel-track'
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
            />

            <div className='carousel-pagination-wrapper'>
                <ol className='carousel-pagination'>
                    {data.map((_, index) => (
                        <li key={index} className={current === index ? 'current' : ''} />
                    ))}
                </ol>
            </div>
        </NonPassiveTouchTarget>
    );
}

const Container = touchWithMouseHOC(CarouselContainer);

class Carousel extends Component {
    renderCard(index, modIndex) {
        const item = data[modIndex];
        return (
            <div
                key={index}
                className='carousel-card'
                onClick={() => console.log(`clicked card ${1 + modIndex}`)}
            >
                <div className='carousel-card-inner' style={{ backgroundColor: item.background }}>
                    <div
                        className='carousel-title'
                        style={{
                            color: 'grey',
                            marginBottom: 12,
                            minWidth: 102,
                            fontWeight: 'normal',
                            fontSize: 12,
                            letterSpacing: '1px',
                            lineHeight: '14px',
                            textAlign: 'center'
                        }}
                    >
                        {item.title}
                    </div>
                    <div
                        className='carousel-text'
                        style={{
                            color: 'grey',
                            marginBottom: 12,
                            minWidth: 102,
                            fontWeight: 'normal',
                            fontSize: 12,
                            letterSpacing: '1px',
                            lineHeight: '14px',
                            textAlign: 'center'
                        }}
                    >
                        {item.text}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <React.StrictMode>
                <TouchCarousel
                    component={Container}
                    cardSize={cardSize}
                    cardCount={data.length}
                    cardPadCount={cardPadCount}
                    loop={true}
                    autoplay={8000}
                    renderCard={this.renderCard}
                    onRest={(index) => console.log(`rest at index ${index}`)}
                    onDragStart={() => console.log('dragStart')}
                    onDragEnd={() => console.log('dragEnd')}
                    onDragCancel={() => console.log('dragCancel')}
                />
            </React.StrictMode>
        );
    }
}
export default Carousel;
