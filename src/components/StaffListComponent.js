import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import dateFormat from 'dateformat';

class StaffList extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedStaff: null,
          columnSizeDefault: 'col-6 col-md-4 col-lg-2'
    }
}
onColumnSelect(column) {
    this.setState({columnSizeDefault: column});
};
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
render (onStaffSelect) {
    const staffList = this.props.staffs.map((staff) => {
    return (
        <div className = {this.state.columnSizeDefault}>
            <Card key = {staff.id} onClick = {() => this.onStaffSelect(staff)}>
                <CardImg width = '100%' src = {staff.image} alt = {staff.name} />
                <CardTitle>{staff.name}</CardTitle>
            </Card>
        </div>
            )
        });
if (onStaffSelect != null) {
    return (
    <div className = 'contaniner'>
        <div className = 'row justify-content-md-center'>
            {this.renderStaff(this.state.selectedStaff)}
        </div>
    </div>)}
else {
    return (
    <div className ='container'>    
        <div className = 'row'>
            <StaffList/>
            
        </div>
    </div>);    
};
};
}


export default StaffList;