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
          (<Review author='Monika'>Pani Ania to bardzo sprawna pani chirurg, która potrafi działać cuda swoimi nożóyczkami. Nasz fafik miał jajka, a teraz dzięki Pani Ani już ich nie ma i jest szczęśliwszy</Review>),
          (<Review author='Damian'>Było źle, ale teraz jest już dobrze. Lubię tą klinikę bo można oprócz operacji dostać darmowe chrupki no i popatrzeć na Heńka - Heniek wymiata</Review>),
          (<Review author='Ewelina'>Ja się tam nie znam na weterynarii, ale generalnie to fajne miejsce - lepiej do lekarza niż na burgera</Review>),

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