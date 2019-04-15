import React, {useState} from 'react';
import Dialog from '../Dialog'
import Settings from '../Settings'

export default function shedule() {
  const [isEditing, setIsEditing] = useState(true);
  

  return(
    <>
      <Dialog />    
      <Settings />
    </>
  )
}