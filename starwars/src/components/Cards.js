import React from "react";
import { Col, Card, CardSubtitle, CardTitle, CardText, CardHeader, CardBody } from "reactstrap";

 const Cards = (props) => {
    return(
        <Col lg="4">
            <Card>
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