import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs'
import dateFormat from 'dateformat';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          
    }
}

        render () { 
            const staffList = this.props.staffs.map((staff) => {
                return (
                    <div key={staff.id} className = 'col-12 col-md-5 m-1'>
                        <Card>
                            <CardTitle>{staff.name}</CardTitle>
                            <p>{dateFormat(staff.doB, 'dd/mm/yyyy')}</p>
                        </Card>

                    </div>
                )
            });
            return (
            <div className = 'contaniner'>
                <div className = 'row'>
                        {staffList}
                </div>
            </div>
            ) ;
        };
    }

export default StaffList;