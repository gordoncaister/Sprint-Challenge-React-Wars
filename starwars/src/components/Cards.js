import React from "react";
import { Col, Card, CardSubtitle, CardTitle, CardText, CardHeader, CardBody } from "reactstrap";

 const Cards = (props) => {
    return(
        <Col lg="3" md="4" sm="6" xs="12">
            <Card style={{marginBottom:"2rem",opacity:"0.8"}}>
                <CardHeader><CardTitle >{props.data.name}</CardTitle></CardHeader>
                <CardBody>
                <CardSubtitle>Statistics:</CardSubtitle>
                    <CardText>Height in CM: {props.data.height}</CardText>
                    <CardText>Weight in kg: {props.data.mass}</CardText>
                    <CardText>Exo color: {props.data.skin_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Cards