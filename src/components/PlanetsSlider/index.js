// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem/index'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="heading">PLANETS</h1>
      <div data-testid="planets" className="slider-container">
        <Slider {...settings}>
          {planetsList.map(planet => (
            <div>
              <PlanetItem
                key={planet.id}
                name={planet.name}
                imageUrl={planet.imageUrl}
                description={planet.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
