import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faHeartBroken} />

// Input: liked: boolean
// Output: onClick
 
class Like extends Component {
  
  render() { 
    return ( element );
  }
}
 
export default Like;