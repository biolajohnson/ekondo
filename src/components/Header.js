import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => (
	<div>
		<h1>
			Ekondo
		</h1>
		<NavLink to="/" >Home</NavLink>
		<h3> Mi casa su casa</h3>
		<NavLink to="/create" >AddExpense</NavLink>
	</div>
)

export default Header