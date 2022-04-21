import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs'
import dateFormat from 'dateformat';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedStaff: null
    }
}
onStaffSelect(staff) {
    this.setState({selectedStaff: staff});
    console.log(staff)
}

renderStaff(staff) {
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
}
render () { 
    const staffList = this.props.staffs.map((staff) => {
    return (
        <div key={staff.id} className = 'col-12 col-md-5 m-1'>
            <Card onClick = {() => this.onStaffSelect(staff)}>
                <CardTitle>{staff.name}</CardTitle>
            </Card>

        </div>
            )
        });
    return (
        <div className = 'contaniner'>
            <div className = 'row'>
                {staffList}
            </div>
            <div className = 'row'>
                {this.renderStaff(this.state.selectedStaff)}
            </div>
        </div>
        ) ;
    };
}

export default StaffList;