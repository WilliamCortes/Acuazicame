import React from 'react'
import tarifas from '../../assets/documents/tarifas.pdf'

export const Rates = () =>  (
    <iframe id='rates' className='document' title='Rates' src={tarifas}  />
  )