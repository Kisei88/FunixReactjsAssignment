import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap'

function Department(props) {
    console.log(props)
    const Department = props.dept.map((department) => {
        console.log(department)
        return (
            <div className = 'col-12 col-md-6, col-lg-3, m-1' key = {department.id}>
            <RenderDepartment dept = {Department} />
            </div>
        )
    })
    return (
        <div className = 'container'>
            <div className = 'row shadow m-3'>{Department}</div>
        </div>
    )
}
const RenderDepartment = function(props) {
    return (
        <Card>
            <CardTitle>{props.dept.name}</CardTitle>
            <CardBody>
                <CardText>
                    Số Lượng Nhân Viên: {props.dept.numberOfStaff} 
                </CardText>
            </CardBody>
        </Card>
    )
};
export default Department