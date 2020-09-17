import  React  from 'react';
import { Container, Nav } from 'react-bootstrap';

export class MainMenuItem {
    text: string = '';
    link: string = '#';

    constructor(text: string, link:string) {
        this.text = text;
        this.link = link;
    }
}

export class MainMenu extends React.Component {
    render() {
        return (
            <Container>
                <Nav variant="tabs">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
            </Container>
        )
    }
}