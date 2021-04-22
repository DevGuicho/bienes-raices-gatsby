import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "@emotion/styled"

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;
    img {
      margin-right: 1rem;
    }
  }
`

const Iconos = ({ wc, estacionamiento, habitaciones }) => {
  const { iconos } = useStaticQuery(graphql`
    query {
      iconos: allFile(filter: { relativeDirectory: { eq: "iconos" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `)
  const imagenes = iconos.edges.map(image => image.node.publicURL)

  return (
    <ListadoIconos>
      <li>
        <img src={imagenes[0]} alt="icono habitaciones" />
        {habitaciones}
      </li>
      <li>
        <img src={imagenes[1]} alt="icono estacionamiento" />
        {estacionamiento}
      </li>
      <li>
        <img src={imagenes[2]} alt="icono wc" />
        {wc}
      </li>
    </ListadoIconos>
  )
}

export default Iconos
