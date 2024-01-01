import { Container, Row, Col } from "react-bootstrap"

export const Banner = () => {
    
    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jacob`}<span className="wrap"> developer</span></h1>
                        <p>I am a student at Seneca Polytechnic College studying Computer Programming and Analysis. I am now at a point where I am seeking to elevate my skills and apply them in a professional environment. I am keen on joining an organization that appreciates innovation and learning, providing me with the opportunity to contribute and grow. My goal is to be hired by a team that challenges me with real-world problems and collaborates on cutting-edge solutions, allowing me to continue my coding journey while contributing meaningful work.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect!</button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}