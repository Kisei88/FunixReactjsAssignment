import React from 'react';
// import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import dateFormat from 'dateformat';


export default function StaffList(props) {
    console.log(props)
    const ListOfStaffs = props.staffs.map((staff) => {
        return (
            <div key = {staff.id}>
                <div className = 'col-12 col-md-2 m-1'>
                    <img src = {staff.image} alt = {staff.name} />
                    <p>{staff.name}</p>
                </div>
            </div>
        )
    });
    return (
        <div className = 'container'>
            <div className = 'row'>
                {ListOfStaffs}
            </div>
        </div>
    )
}