import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function StaffDetail(props) {
    console.log(props)
    const staff = props.staffs

        const RenderStaff = function(staff) {
            if (staff != null) {
                return(
                    <Card>
                        <CardImg width = '100%' src = {staff.image} alt = {staff.name} />
                        <CardBody>
                            <CardHeader>{staff.name}</CardHeader>
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

    if (staff != null) {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = '/nhanvien'>Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {staff.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className = 'col-12'>
                    <h3>{staff.name}</h3>
                    <hr/>
                </div>
            </div>
            <div className = 'row mb-3'>
                <RenderStaff staff = {staff}/>
            </div>
        </div>
    )}else {
        return (
            <div></div>
        )
    };
}

export default StaffDetail;