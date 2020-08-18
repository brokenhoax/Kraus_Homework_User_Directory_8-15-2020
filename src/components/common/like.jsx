import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



// Input: liked: boolean
// Output: onClick
 
class Like extends Component {


  render() { 

    if (!this.props.liked) {
      return <FontAwesomeIcon onClick={this.props.onClick} style={{ cursor: 'pointer' }} icon={faHeartBroken} />
    } else {
      return <FontAwesomeIcon onClick={this.props.onClick} style={{ cursor: 'pointer' }} icon={faHeart} />
    }
    
  }
}
 
export default Like;