import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

function StaffDetail(props) {
    console.log(props)
    if (props.staffs != null) {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = '/staff'>Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.staffs.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = 'col-12'>
                    <h3>{props.staffs.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className = 'row mb-3'>
                <RenderStaff staff = {props.staffs}/>
            </div>
        </div>
    )}else {
        return (
            <div></div>
        )
    };
}
function RenderStaff(staff) {
    if (staff != null) {
        return(
            <Card>
                <CardImg width = '100%' src = {staff.image} alt = {staff.name} />
                <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>Ngày Sinh: {dateFormat(staff.doB, 'dd/mm/yyyy')}</CardText>

                    <CardText>Ngày Vào Công Ty: {dateFormat(staff.startDate, 'dd/mm/yyyy')}</CardText>

                    <CardText>Phòng Ban: {staff.department.name}
                    </CardText>

                    <CardText> Số Ngày Nghỉ Còn Lại: {staff.annualLeave} ngày</CardText>

                    <CardText> Số Ngày Đã Làm Thêm: {staff.overTime} ngày</CardText>
                </CardBody>
            </Card>
        )
    }else {
        return(
            <div></div>
        );
    }
};

export default StaffDetail;