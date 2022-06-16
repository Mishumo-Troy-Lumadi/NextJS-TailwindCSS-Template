import Layout from "./Layout";

function Card({ as = 'column', className = '', onClick = () => { }, children }) {
    return (
        <Layout className={`rounded shadow ${className}`} {...{ as, onClick }}>
            {children}
        </Layout>
    );
}

export default Card;