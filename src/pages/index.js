import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';

const IndexPage = () => {
  return ( 
    <Layout>
      <Head title='Home'/>
      <h1>Welsocme</h1>
      <p>I m Andrew</p>
      <p>Need a developer <Link to="/contact">Contact Us</Link></p>
    </Layout>
   );
}
 
export default IndexPage;





