import Header from '../shared/Header';
import Container from 'react-bootstrap/Container';

const BaseLayout = props => {
    const { children } = props;
    return (
        <div className="layout-container">
            <Header />
            <main>
                <div style={{ marginTop: '20px' }}>
                    <Container>
                        {children}
                    </Container>
                </div>
            </main>

        </div>
    )
}

export default BaseLayout;