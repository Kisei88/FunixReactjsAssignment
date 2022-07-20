import React from 'react';
import { Card, CardImg, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';

export default function StaffList(props) {
    
    const RenderList = props.staffs.map((staff) => {
        return (
            <Card className = 'col-6 col-md-4 col-lg-2 my-2 border-0' key = {staff.id}>                
                <Link to ={`${staff.id}`}>
                    <CardImg width = '100%' src = {staff.image} alt = {staff.name} />                
                    <CardTitle className = 'text-center'>{staff.name}</CardTitle>
                </Link>
            </Card>
        )
    });    
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
            <div className = 'row'>
                {RenderList}
            </div>
        </div>
    )
}