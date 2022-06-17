import Head from "next/head";
import Layout from "./Layout";

function Page({ title='', description='', favicon = '/favicon.ico', as='column', className='', children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="icon" href={favicon} />
            </Head>
            <Layout {...{ as }} className={`w-screen h-screen overflow-hidden ${className}`}>
                {children}
            </Layout>
        </>
    );
}

export default Page;
