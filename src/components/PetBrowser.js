import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      petCards: this.props.pets.map(pet => <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />)
    }
  }

  render() {
    return <div className="ui cards">{this.state.petCards}</div>
  }

}

export default PetBrowser
