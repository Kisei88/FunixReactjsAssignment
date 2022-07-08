import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap'

export default function StaffList(props) {
    const StaffList = props.staffs.map((staff) => {
        return (
            <Card className = 'col-6 col-md-4 col-lg-2 my-3' key = {staff.id}>
                <CardImg width = '100%' src = {staff.image} alt = {staff.name} />
                <CardBody>
                    <CardText>{staff.name}</CardText>
                </CardBody>
            </Card>
        )
    });
    return (
        <div className = 'container'>
            <div className = 'row'>
                {StaffList}
            </div>
        </div>
    )
}