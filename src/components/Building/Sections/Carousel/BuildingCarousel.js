import React from 'react'
import Carousel, { autoplayPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import BuildingImageOne from '../../../../img/Head-Photo-BG.jpg'
import BuildingImageTwo from '../../../../img/Header-Photo-BG.jpg'
import BuildingImageThree from '../../../../img/Building.jpg'



class BuildingCarousel extends React.Component {
    constructor() {
        super()
        this.state = {
            value: 0,
            slides: [
                (<img className='building-carousel-img' src={BuildingImageOne} />),
                (<img className='building-carousel-img' src={BuildingImageTwo} />),
                (<img className='building-carousel-img' src={BuildingImageThree} />),
                (<img className='building-carousel-img' src={BuildingImageThree} />),
                (<img className='building-carousel-img' src={BuildingImageThree} />),
                (<img className='building-carousel-img' src={BuildingImageThree} />),
            ],
            thumbnails: [
                (<img className='building-carousel-thumbnail'src={BuildingImageOne} />),
                (<img className='building-carousel-thumbnail'src={BuildingImageTwo} />),
                (<img className='building-carousel-thumbnail'src={BuildingImageThree} />),
                (<img className='building-carousel-thumbnail'src={BuildingImageThree} />),
                (<img className='building-carousel-thumbnail'src={BuildingImageThree} />),
                (<img className='building-carousel-thumbnail'src={BuildingImageThree} />),
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
              plugins={
                ['infinite',{
                  resolve: autoplayPlugin,
                  options: {
                      interval: 5000}
                  }
               ]}
              animationSpeed={2000}
            />
            <Dots number={this.state.thumbnails.length} thumbnails={this.state.thumbnails} value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
          </div>
        )
    }
}

export default BuildingCarousel
