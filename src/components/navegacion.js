import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-family: "Lato", Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  text-decoration: none;
  border-bottom: 2px solid #0d283b;
  &:last-of-type {
    margin-right: 0;
  }
  &.active {
    border-bottom: 2px solid #fff;
  }
  @media (min-width: 768px) {
    margin-right: 3rem;
  }
`

const Navegacion = () => {
  return (
    <Nav>
      <NavLink to="/" activeClassName="active">
        Inicio
      </NavLink>
      <NavLink to="/nosotros" activeClassName="active">
        Nosotros
      </NavLink>
      <NavLink to="/propiedades" activeClassName="active">
        Propiedades
      </NavLink>
    </Nav>
  )
}

export default Navegacion
