import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import Head from '../components/Head';


const NotFound = () => {
    return ( 
        <Layout>
            <Head title='404'/>
            <h1>Page not found</h1>
            <p><Link to='/'>Go to HomePage..</Link></p>
        </Layout>
     );
}
 
export default NotFound;