import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="custom-footer bg-light py-5 position-relative">
                <Container>
                    <Row>
                        <Col lg={17} className="ms-lg-auto">
                            <Row>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-dark mb-0">Company</h5> 
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/apps-projects-overview" className="text-dark">About Us</Link></li> {/* Changer la couleur du lien en dark */}
                                            <li><Link to="/pages-gallery" className="text-dark">....</Link></li>
                                            <li><Link to="/apps-projects-overview" className="text-dark">....</Link></li>
                                            <li><Link to="/pages-timeline" className="text-dark">....</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-dark mb-0">Catégories</h5> 
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/pages-pricing" className="text-dark">Vétements</Link></li>
                                            <li><Link to="/apps-mailbox" className="text-dark">Electroménagers</Link></li>
                                            <li><Link to="/apps-chat" className="text-dark">Beautés</Link></li>
                                            <li><Link to="/apps-crm-deals" className="text-dark">Téléphones et Accessoires</Link></li>
                                            <li><Link to="/apps-crm-deals" className="text-dark">autres catégories</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col sm={4} className="mt-4">
                                    <h5 className="text-dark mb-0">Support</h5> 
                                    <div className="text-muted mt-3">
                                        <ul className="list-unstyled ff-secondary footer-list">
                                            <li><Link to="/apps-chat" className="text-dark">Discuter avec nous</Link></li>
                                            <li><Link to="/pages-faqs" className="text-dark">Poser une question</Link></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment >
    );
};

export default Footer;
