import React, {useState} from 'react';
import { Card, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom';

export default function StaffList(props) {
    const [selectedStaff, setSelectedStaff] = useState(null);

    const onStaffSelect = (staff) => {setSelectedStaff(staff)
        
    };
    const StaffList = props.staffs.map((staff) => {
        return (
            <Card className = 'col-6 col-md-4 col-lg-2 my-3' key = {staff.id} onClick = {() => onStaffSelect(staff)}>
                <CardImg width = '100%' src = {staff.image} alt = {staff.name} />                
                <CardTitle className = 'text-center'>{staff.name}</CardTitle>
            </Card>
        )
    });
    return (
        <div className = 'container'>
            <div className = 'row'>
                {StaffList}
            </div>
        </div>
    )
}