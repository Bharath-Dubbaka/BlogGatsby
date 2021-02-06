import React from 'react';
import Layout from '../components/Layout';
import {Link, graphql, useStaticQuery} from 'gatsby';
import blogStyles from './blog.module.scss';
import Head from '../components/Head';


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulCmsPost(
          sort: {
            fields:publishedDate,
            order:DESC
        }) {
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
            }
          }
        }
      }    
    `)
    return ( 
        <Layout>
            <Head title='Blog'/>
            <h3>Blog</h3>
            <ol className={blogStyles.posts} >
                {data.allContentfulCmsPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h3>{edge.node.title}</h3>
                                <p>{edge.node.publishedDate}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
     );
}
 
export default BlogPage;