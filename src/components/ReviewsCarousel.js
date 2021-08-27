import React from 'react'
import Carousel, { autoplayPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import imageOne from '../img/Building.jpg'
import imageTwo from '../img/About-Photo.jpg'
import imageThree from '../img/About-Photo.jpg'
import Review from './Review';

class ReviewsCarousel extends React.Component {
    constructor() {
      super()
      this.state = {
        value: 0,
        slides: [
          (<Review author='Andrzej M.'>Polecamy z córką. Profesjonalnie podeszła do opieki. Bardzo pomogła naszemu pieskowi i bardzo miła pani dr.</Review>),
          (<Review author='Maria P.'>Weterynarz z sercem, bardzo profesjonalne podejście, gabinet bardzo ładny.</Review>),
          (<Review author='Izabela S.'>Szybko, sprawnie, bez kolejek 🙂 miła pani weterynarz 🙂</Review>),
          (<Review author='J.B.'>Bardzo miła Pani dr. Przyjęła nas bez wcześniejszego umówienia i dobrze zadbała o kota. Polecam z całego serca.</Review>),
          (<Review author='Dawid K.'>Polecam bardzo serdecznie, miła pani weterynarz, fachowa pomoc :)</Review>),

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
                options: {interval: 5000}
                }
             ]}
            animationSpeed={2000}
        />
        <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
      </div>
      );
    }
  }

  export default ReviewsCarousel;