import React, { Component } from 'react';
import './Carousel.scss';
import Arrow from './Arrow/Arrow';

export default class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageIndex: 0,
        }
    }

    changeImg = direction => {
        let { imageIndex } = this.state;
        let newIndex;

        if (direction === 'left') {
            newIndex = imageIndex === 0 ? 2 : imageIndex - 1;
        } else {
            newIndex = imageIndex === 2 ? 0 : imageIndex + 1;
        }

        this.setState({
            imageIndex: newIndex
        });
    }

    render() {
        console.log(`../../images/${this.props.id}_${this.props.imgTags[this.state.imageIndex]}.jpg`)
        return <section className="carousel">
            <img className='images' src={`/../../images/${this.props.id}_${this.props.imgTags[this.state.imageIndex]}.jpg`} alt={this.props.name}/>
            <Arrow direction="left" changeImg={this.changeImg} />
            <Arrow direction="right" changeImg={this.changeImg} />
        </section>
    }
}
