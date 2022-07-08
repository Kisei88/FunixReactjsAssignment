import React from 'react';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap'

function Department(props) {
    const Department = props.dept.map((department) => {
        return (
            <div className = 'col-12 col-md-6, col-lg-3 my-3' key = {department.id}>
            <RenderDepartment dept = {department} />
            </div>
        )
    })
    return (
        <div className = 'container fluid'>
            <div className = 'row shadow'>
                {Department}
            </div>
        </div>
    )
}
function RenderDepartment(props) {
    let dept = props.dept;
    return (
        <Card>
            <CardHeader className ='text-primary text-center h4'>
               <h2> {dept.name} </h2>
            </CardHeader>
            <CardBody>
                <CardText>
                    Số Lượng Nhân Viên: {dept.numberOfStaff} 
                </CardText>
            </CardBody>
        </Card>
    )
};
export default Department