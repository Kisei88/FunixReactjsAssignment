import React from 'react';
import { Card, CardBody, CardHeader, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';


function StaffDetail(props) {
    console.log(props)
    const staff = props.staff

    // Render Staff Imgage
            function RenderAvatar() {
                    return(
                        <Card className = 'col-12 col-md-6 border-0'>
                            <CardImg width = '100%' src = {staff.image} alt = {staff.name} />
                        </Card>
                    )
                }

    //Render Staff Info
            function RenderInfo() {
                if (staff != null) {
                    return(
                        <Card className = 'col-12 col-md-6 border-0'>
                            <CardHeader className = 'h3 text-center text-primary'>Họ Và Tên: {staff.name}</CardHeader>
                            <CardBody>
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
                        <div>không render được</div>
                    );
                }
            }
    if (staff != null) {
    return (
        <div className = 'container'>
            <div className = 'row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = '/'>Trang Chủ</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to = '/nhanvien'>Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {staff.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className = 'row'>
                <RenderAvatar staff = {staff}/>
                <RenderInfo staff = {staff}/>
            </div>
        </div>
    )}else {
        return (
            <div>Thông Tin Nhân Viên Đang Chờ Cập Nhật</div>
        )
    };
}
export default StaffDetail;