import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';



const ContactPage = () => {
    return ( 
        <Layout>
            <Head title='Contact Us'/>
            <h2>Contact Us</h2>
            <p>React us at <a rel="noreferrer" href="https://www.linkedin.com/company/corporate-flicks" target='_blank'>Linkedin</a> </p>
        </Layout>
     );
}
 
export default ContactPage;