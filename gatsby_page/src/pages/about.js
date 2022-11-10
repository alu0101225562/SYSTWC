import React from "react"
import Autor from "../components/autor"
import Layout from "../components/layout"
import Seo from "../components/seo"

function About() {
  return (
    <Layout>
      <Autor name={"Francisco Alejandro"} />
      <img src="https://miro.medium.com/max/1400/1*mS5L6wvjhgBYZFZS-2NaxQ.png" />
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default About
