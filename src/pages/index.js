import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2>I'm Vincent, a full-stack developer in Verrieres le buisson</h2>
      <p>
        Please contact me <Link to='/contact'>here</Link>
      </p>
    </Layout>
  )
}
export default IndexPage
