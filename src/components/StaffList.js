import React, {useState} from 'react';
import { Card, CardImg, CardBody, CardTitle, CardHeader, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default function StaffList(props) {
    const [selectedStaff, setSelectedStaff] = useState(null);

    const onStaffSelect = (staff) => {setSelectedStaff(staff)
        
    };
    const StaffList = props.staffs.map((staff) => {
        return (
            <Card className = 'col-6 col-md-4 col-lg-2 my-3' key = {staff.id}>
                <Link to ={`${staff.id}`}>
                    <CardImg width = '100%' src = {staff.image} alt = {staff.name} />                
                    <CardTitle className = 'text-center'>{staff.name}</CardTitle>
                </Link>
            </Card>
        )
    });    
return (
        <div className = 'container'>
            <div className = 'row'>
            <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to = '/'>Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.name}
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className = 'row'>
                {StaffList}
            </div>
        </div>
    )
}