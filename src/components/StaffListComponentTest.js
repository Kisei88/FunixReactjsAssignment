import React, { useState, useEffect } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap';
import { STAFFS } from '../shared/staffs'
import dateFormat from 'dateformat';


function StaffList(staff) {
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [columnSizeDefault, setColumnSizeDefault] = useState('col-12 col-md-5 col-lg-3');
    const [staffs, setStaffs] = useState(STAFFS);
    const [staffList, setStaffList] = useState(staffs.map)


const onStaffSelect = staff =>{
    selectedStaff(staff)
};

const onColumnSelect = column => {
    setColumnSizeDefault(column)
};
const renderStaff = function(staff) {
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
};
  return(
      <div>  
        <div className = {columnSizeDefault}>
            <Card key = {staff.id} onClick = {() => onStaffSelect(staff)}>
                <CardTitle>{staff.name}</CardTitle>
            </Card>
        </div>
        <div className="container">
                <div className="row justify-content-md-center">
                    <Button onClick = {() => onColumnSelect('col-md-6')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 2 Cột
                    </Button>

                    <Button onClick = {() => onColumnSelect('col-md-3')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 4 Cột
                    </Button>

                    <Button onClick = {() => onColumnSelect('col-md-2')} className = 'btn btn-success col-12 col-md-4 col-lg-3 m-1'> 6 Cột
                    </Button>
                </div>
        </div>
        <div className = 'contaniner'>
            <div className = 'row justify-content-md-center'>
                {staffList}
            <p>Bấm Vào Tên Nhân Viên Để Xem Thông Tin.</p>
            </div>
            <div className = 'row'>
                {renderStaff}
            </div>
        </div>    
        </div>
        )
}

export default StaffList;