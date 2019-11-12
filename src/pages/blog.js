import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Head from '../components/head'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPAge = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        totalCount
        edges {
          node {
            contentful_id
            slug
            title
            publishedDate(formatString: "dddd YYYY-MM-DD h:mm:ss a")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title='Blog' />
      <h1>Blog</h1>

      <p>Number of posts : {blogStyles.totalCount}</p>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          return (
            <li className={blogStyles.post} key={node.contentful_id}>
              <h2>
                <Link to={`/blog/${node.slug}`}>{node.title}</Link>
              </h2>
              <p>{`By ???, ${node.publishedDate}`}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
export default BlogPAge
