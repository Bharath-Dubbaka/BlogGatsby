import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';




const AboutPage = () => {
    return ( 
        <Layout>
            <Head title='About'/>
            <h2>About Us</h2>
            <p>Wanted to work with us <Link to="/contact">Contact Us</Link></p>
        </Layout>
     );
}
 
export default AboutPage;