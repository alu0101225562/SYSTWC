import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Autor from "../components/autor"
import Especie from "../components/Especie"
const species = [
  {
    id: 0,
    nc: "Abudefduf saxatilis",
    n: "Fula tropical",
    img: "https://www.biodiversidadcanarias.es/biota/especie/E02372/imagen?filename=abudefduf_saxatilis_107085971_47056755_3121_3527.jpg",
    referencias:
      "Justificación de sinonimias de especies marinas.Brito Hernández, A.2013, Referencia de experto Vertebrados marinos. En: Lista de especies silvestres terrestres y marinas de Canarias. 2018.Brito Hernández, A., Escánez, A., Falcón, J. M.2018, Estudio no publicado",
    taxonomia:
      "Reino: Metazoa Filo: Chordata Clases: Actinopterygii Especie: Abudefduf saxatilis (Linnaeus, 1758)",
  },
  {
    id: 1,
    nc: "Abutilon grandifolium",
    n: "Abutilo, malva del monte, hairy Indian mallow",
    img: "https://www.biodiversidadcanarias.es/biota/especie/F01000/imagen?filename=abutilon_grandifolium_103907371_9856_2222_6785.jpg",
    referencias:
      "Index Seminum. Samenverzeichnis. Seed List 1997/98.1997, Publicación Reino Plantas (Pteridophyta y Spermatophyta). En: Lista de especies silvestres terrestres y marinas de Canarias. 2018.Acebes, J. R., León Arencibia, M.C., Rodríguez Navarro, M.L., González Montelongo, C.2019, Estudio no publicado",
    taxonomia:
      "Reino: Plantae División: Spermatophyta Subdivisión: Magnoliophytina Clases: Magnoliopsida",
  },
]

const IndexPage = () => (
  <Layout>
    <Autor name="Francisco Alejandro" />
    <div style={{ display: "grid", gridAutoFlow: "column" }}>
      {species.map((specie, id) => (
        <Especie specie={specie} />
      ))}
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
