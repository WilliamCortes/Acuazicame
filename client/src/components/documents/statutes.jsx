import React from 'react'
import estatutos from '../../assets/documents/estatutos.pdf'

export const Statutes = () =>  (
    <iframe id='statutes' className='document' title='Estatutos' src={estatutos}  />
  )

