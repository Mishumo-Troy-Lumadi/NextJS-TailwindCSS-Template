import { Column, Grid, Row } from "@components/base";

function Layout(as = 'div', className = '', onClick = () => { }, children) {
    switch (as.toLowerCase) {
        case 'column':
            return (
                <Column {...{ className, onClick }}>
                    {children}
                </Column>
            )

        case 'row':
            return (
                <Row {...{ className, onClick }}>
                    {children}
                </Row>
            )

        case 'grid':
            return (
                <Grid {...{ className }}>
                    {children}
                </Grid>
            )

        default:
            return (
                <as {...{ className, onClick }}>
                    {children}
                </as>
            )
    }
}

export default Layout;