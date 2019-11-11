import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from "./blog.module.scss";

const BlogPAge = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              author
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <li key={node.id}>
                <Link className={blogStyles.blogItem} to={`/blog/${node.fields.slug}`}>
                  <strong>{node.frontmatter.title}</strong>
                </Link>
                <p>                  
                  <i>By {node.frontmatter.author},{' '}
                    <small>{node.frontmatter.date}</small>
                  </i>
                </p>
              </li>
            )
          })}
        </ol>
      </Layout>
    </div>
  )
}
export default BlogPAge
