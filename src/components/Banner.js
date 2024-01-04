import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web developer", "Web designer", "UI/UX designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    }

    return (
        <section className="banner" id='home'>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Jacob`}<span className="wrap">, a developer</span></h1>
                        <p>I am a student at Seneca Polytechnic College studying Computer Programming and Analysis. I am now at a point where I am seeking to elevate my skills and apply them in a professional environment. I am keen on joining an organization that appreciates innovation and learning, providing me with the opportunity to contribute and grow. My goal is to be hired by a team that challenges me with real-world problems and collaborates on cutting-edge solutions, allowing me to continue my coding journey while contributing meaningful work.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect!<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMG" />
                        
                    </Col>
                </Row>
            </Container>
        </section>
    )
}