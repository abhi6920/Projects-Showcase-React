import './index.css'

const ProjectShowCase = props => {
  const {details} = props
  const {name, imageUrl} = details
  return (
    <li className="app-li" data-testid="loader">
      <img src={imageUrl} className="pic" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}

export default ProjectShowCase
