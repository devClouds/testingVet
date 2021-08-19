import React from 'react'
import Carousel, { autoplayPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import BuildingImageOne from '../img/Head-Photo-BG.jpg'
import BuildingImageTwo from '../img/Header-Photo-BG.jpg'
import BuildingImageThree from '../img/Building.jpg'



class BuildingCarousel extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<img src={BuildingImageOne} />),
                (<img src={BuildingImageTwo} />),
                (<img src={BuildingImageThree} />),
            ],
            thumbnails: [
                (<img src={BuildingImageOne} />),
                (<img src={BuildingImageTwo} />),
                (<img src={BuildingImageThree} />),
            ],
        }
        this.onchange = this.onchange.bind(this);
    }


    onchange(value) {
        this.setState({ value });
    }
    render() {
        return (
            <div>
            <Carousel
              value={this.state.value}
              slides={this.state.slides}
              onChange={this.onchange}
            />
            <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
          </div>
        )
    }
}

export default BuildingCarousel
