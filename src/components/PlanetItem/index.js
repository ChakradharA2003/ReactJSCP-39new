// Write your code here
import './index.css'

const PlanetItem = props => {
  const {name, imageUrl, description} = props
  return (
    <div className="planets-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
export default PlanetItem
