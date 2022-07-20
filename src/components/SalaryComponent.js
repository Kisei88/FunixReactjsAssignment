import React from 'react';
import NumberFormat from 'react-number-format';
import { Card, CardHeader, CardText, CardBody, BreadcrumbItem, Breadcrumb} from 'reactstrap';
import { Link } from 'react-router-dom';

const BSalary = 3000000;
const HSalary = 200000;

function Salary(props) {
    const StaffSalary = props.staffs.map((staffs) => {
        return (
            <div className = 'col-12 col-md-6, col-lg-4 my-2' key = {staffs.id}>
            <RenderSalary staff = {staffs} />
            </div>
        )
    })
    return (
        <div className = 'container-fluid'>
            <div className = 'row'>
            <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = '/'>Trang Chủ</Link>
                    </BreadcrumbItem>
                    {/* <BreadcrumbItem active>
                        {props.name}
                    </BreadcrumbItem> */}
                </Breadcrumb>
            </div>
            <div className = 'row shadow'>
                {StaffSalary}
            </div>
        </div>
    )
}
const RenderSalary = function(props) {
    let staff = props.staff
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