// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="linked-item">
      <li className="card-container">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <h1 className="heading">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
