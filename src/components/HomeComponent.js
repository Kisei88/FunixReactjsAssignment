import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard ({item}) {
    return (
        <Card>
            <CardImg src = {item.image} alt = {item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                <CardText>{item.description}</CardText>
            </CardBody>

        </Card>
    )
}

function Home(props) {
    console.log(props)
    return (
        <div className = 'container'>
            <div className ='row align-items-start'>
                <div className = 'col-12 col-md m-1'>
                    <RenderCard item = {props.staff} />
                </div>
                <div className = 'col-12 col-md m-1'>
                    <RenderCard item = {props.department} />
                </div>
                <div className = 'col-12 col-md m-1'>
                    <RenderCard item = {props.salary} />
                </div>
            </div>
        </div>
    )
};

export default Home;