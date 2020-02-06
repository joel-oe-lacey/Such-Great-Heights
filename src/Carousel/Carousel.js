import React, { Component } from 'react';
import './Carousel.scss';
import Arrow from './Arrow/Arrow';

export default class Carousel extends Component {
    constructor({ id, name, imgTags }) {
        super({ id, name, imgTags });
        this.state = {
            imageIndex: 0,
        }
    }

    changeImg = direction => {
        let { imageIndex } = this.state;
        let newIndex;

        if (direction === 'left') {
            newIndex = imageIndex === 0 ? 2 : imageIndex--;
        } else {
            newIndex = imageIndex === 2 ? 0 : imageIndex++;
        }
        
        this.setState({
            imageIndex: newIndex
        });
    }

    render() {
        return <section className="carousel">
            <img src={`${this.id}_${this.imgTags[this.state.imageIndex]}.jpg`} alt={this.name}/>
            <Arrow direction="left" changeImg={this.changeImg} />
            <Arrow direction="right" changeImg={this.changeImg} />
        </section>
    }
}