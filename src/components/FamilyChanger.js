import React, { useState } from 'react';

export default function FamilyChanger(props) {
  
  return (
    <select className="dropDownContainer" onChange={event => props.update(event.target.value)}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}