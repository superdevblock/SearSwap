import React, { useState } from 'react'
import RoundCard from './RoundCard'
import { rounds } from '../../assets/variables'

const Info: React.FC = () => {

	return (
		<section className="container round">
      <h3 className="col-12 text-center font-weight-bold round-title">ROUND 1 - ALLOCATION ROUND</h3>
      <section className="projects">
        { rounds.map((round, index) => { 
        	return <RoundCard round={round} /> 
        })}
      </section>
    </section>
	)
}

export default Info