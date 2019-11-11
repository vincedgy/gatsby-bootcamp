import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <h1>Hello</h1>
        <h2>I'm Vincent, a full-stack developer in Verrieres le buisson</h2>
        <p>
          Please contact me <Link to="/contact">here</Link>
        </p>
      </Layout>
    </div>
  )
}
export default IndexPage
