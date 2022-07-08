import React from 'react';
import NumberFormat from 'react-number-format'
import { Card, CardHeader, CardText, CardBody } from 'reactstrap'

const BSalary = 3000000;
const HSalary = 200000;

function Salary(props) {
    const StaffSalary = props.staffs.map((staffs) => {
        return (
            <div className = 'col-12 col-md-6, col-lg-4 my-3' key = {staffs.id}>
            <RenderSalary staff = {staffs} />
            </div>
        )
    })
    return (
        <div className = 'container'>
            <div className = 'row shadow'>
                {StaffSalary}
            </div>
        </div>
    )
}
const RenderSalary = function(props) {
    let staff = props.staff
    console.log(props)
    return (
        <Card>
            <CardHeader className = 'text-primary text-center h4'>{staff.name}</CardHeader>
            <CardBody>
                <CardText>
                    Mã Nhân Viên: {staff.id} 
                </CardText>
                <CardText>
                    Hệ Số Lương: {staff.salaryScale} 
                </CardText>
                <CardText>
                    Số Ngày Làm Thêm: {staff.overTime} 
                </CardText>
                <CardText>
                    Lương {<NumberFormat value = {(BSalary * staff.salaryScale + HSalary * staff.overTime).toFixed(0)} thousandSeparator ={true} prefix = {'vnd '}/>} 
                </CardText>
            </CardBody>
        </Card>
    )
};
export default Salary