import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "dddd YYYY-MM-DD h:mm:ss a")
      body {
        json
      }
    }
  }
`

const Blog = props => {

const options = {
  renderNode: {
    "embedded-asset-block" : (node) => {
      console.log(node)
      const alt = node.data.target.fields.title['en-US'] ? node.data.target.fields.title['en-US'] : 'No image'
      const url = node.data.target.fields.file['en-US'].url ? node.data.target.fields.file['en-US'].url : ''
      return <img alt={alt} src={url} />
    }
   }
}

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}
export default Blog
