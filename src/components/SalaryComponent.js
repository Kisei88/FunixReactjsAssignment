import React from 'react';
import { Card, CardTitle, CardText, CardBody } from 'reactstrap'

function Salary(props) {
    console.log(props)
    const SalaryScale = props.staff.map((staffs) => {
        console.log()
        return (
            <div className = 'col-12 col-md-6, col-lg-3, m-1' key = {staffs.id}>
            <RenderSalary salary = {SalaryScale} />
            </div>
        )
    })
    return (
        <div className = 'container'>
            <div className = 'row shadow m-3'>{props.departments}</div>
        </div>
    )
}
const RenderSalary = function(props) {
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
export default Salary