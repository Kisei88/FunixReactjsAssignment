import React, { Component, useState, useEffect } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { DEPARTMENTS } from '../shared/staffs'
import dateFormat from 'dateformat';

// class StaffList extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//           selectedStaff: null,
//           columnSizeDefault: 'col-12 col-md-5 col-lg-3'
//     }
// }
function StaffList(props) {
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [columnSizeDefault, setColumnSizeDefault] = useState('col-12 col-md-5 col-lg-3');
    const [renderStaff, setRenderStaff] = useState(staff);

const onStaffSelect = staff =>{
    setSelectedStaff(staff)
};

const onColumnSelect = column => {
    setColumnSizeDefault(column)
};

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
// render () {
    console.log(this.state.columnSizeDefault) 
    const staffList = this.props.staffs.map((staff) => {
    return (
        <div className = {this.state.columnSizeDefault}>
            <Card key = {staff.id} onClick = {() => this.onStaffSelect(staff)}>
                <CardTitle>{staff.name}</CardTitle>
            </Card>
        </div>
            )
        });
    return (
        <div>
        <div className="container">
                <div className="row justify-content-md-center">
                    <Button onClick = {() => this.onColumnSelect('col-md-6')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 2 Cột
                    </Button>

                    <Button onClick = {() => this.onColumnSelect('col-md-3')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 4 Cột
                    </Button>

                    <Button onClick = {() => this.onColumnSelect('col-md-2')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 6 Cột
                    </Button>
                </div>
            </div>
        <div className = 'contaniner'>
            <div className = 'row justify-content-md-center'>
                {staffList}
            <p>Bấm Vào Tên Nhân Viên Để Xem Thông Tin.</p>
            </div>
            <div className = 'row'>
                {this.renderStaff(this.state.selectedStaff)}
                
            </div>
        </div>    
        </div>
        );
    };
}

export default StaffList;