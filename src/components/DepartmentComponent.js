import react from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap'

export default function Department(props) {
    const departments = props.department.map((department) => {
        return (
            <div className = 'col-12 col-md-6, col-lg-3, m-1' key = 'department.id'>
            <RenderDepartment dept = {department} />
            </div>
        )
    });
    return (
        <div className = 'container'>
            <div className = 'row shadow m-3'>{departments}</div>
        </div>
    )
};
const RenderDepartment = function(props) {
    return (
<Card>
            <CardTitle>{props.department.name}</CardTitle>
            <CardBody>
                <CardText>
                    Số Lượng Nhân Viên: {props.department.numberOfStaff} 
                </CardText>
            </CardBody>
        </Card>
    )
};