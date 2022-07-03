import React from 'react';

export default function StaffList(props) {
    const StaffList = props.staffs.map((staff) => {
        return (
            <div key = {staff.id}>
                <div className = 'col-6 col-md-4 col-lg-2 m-1 text-align-justify'>
                    <img src = {staff.image} alt = {staff.name} />
                    <p>{staff.name}</p>
                </div>
            </div>
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