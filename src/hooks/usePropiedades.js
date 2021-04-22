import { useStaticQuery, graphql } from "gatsby"

const usePropiedades = () => {
  const res = useStaticQuery(graphql`
    query {
      allStrapiPropiedades {
        nodes {
          nombre
          descripcion
          id
          wc
          precio
          categoria {
            nombre
          }
          estacionamiento
          habitaciones
          agentes {
            email
            nombre
            telefono
          }
          imagen {
            childImageSharp {
              gatsbyImageData(width: 600, height: 400)
            }
          }
        }
      }
    }
  `)

  return res.allStrapiPropiedades.nodes
}

export default usePropiedades
