import React from "react"
import Iconos from "./iconos"
import styled from "@emotion/styled"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PropiedadPreview = ({ propiedad }) => {
  const {
    nombre,
    descripcion,
    imagen,
    wc,
    estacionamiento,
    habitaciones,
    precio,
  } = propiedad
  const image = getImage(imagen)

  const Card = styled.div`
    border: 1px solid #e1e1e1;
    img {
      max-width: 100%;
    }
  `

  const Contenido = styled.div`
    padding: 2rem;
    h3 {
      font-family: "Lato", Arial, Helvetica, sans-serif;
      margin: 0 0 2rem 0;
      font-size: 2rem;
    }
    .precio {
      font-size: 2rem;
      color: #75ab00;
    }
  `

  return (
    <Card>
      <GatsbyImage image={image} alt="Habitacion image" />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">${precio}</p>
        <Iconos
          wc={wc}
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
        />
      </Contenido>
    </Card>
  )
}

export default PropiedadPreview
