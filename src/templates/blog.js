import React from 'react';
import Layout from '../components/Layout';
import {graphql } from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Head from '../components/Head';


// export const query = graphql`
//     query (
//         $slug: String!
//     ) {
//         markdownRemark (
//         fields: {
//             slug: {
//             eq: $slug
//             }
//         }
//         ) {
//         frontmatter {
//             title
//             date
//         }
//         html
//         }
//     }
// `
export const query = graphql`
    query($slug:String!) {
        contentfulCmsPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json

            }
        }
    }
    `


const Blog = props => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = node.data.target.fields.title['en-US']
                const url = node.data.target.fields.file['en-US'].url
                return <img alt={alt} src={url}/>
            }
        }
    }
    return ( 
        <Layout>
            <Head title={props.data.contentfulCmsPost.title}/>
            <h2>{props.data.contentfulCmsPost.title}</h2>
            <p>{props.data.contentfulCmsPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulCmsPost.body.json, options)}
            {/* <h2>{props.data.markdownRemark.frontmatter.title}</h2>
            <p>posted on: {props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div> */}
        </Layout>
     );
}
 
export default Blog