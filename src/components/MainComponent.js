import '../App.css';
import React, {Component, useState} from 'react';
import Department from './DepartmentComponent';
import StaffLists from './StaffList';
import StaffDetail from './StaffDetail';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Route, Routes } from 'react-router-dom';

export default function Main() {
  //const [departments] = useState(DEPARTMENTS)
  const [nhanvien, setNhanVien] = useState({
    staffs: STAFFS,
    departments: DEPARTMENTS
  });
  //const [salary] = useState(salary)
  
// const HomePage = () => {
//     return (
//       <Home 
//       staff = {staffs.filter((staff) => staff.id)}
//       />
//     )
//   }

  const StaffWithId = ({match}) => {
    return(
      <StaffDetail 
      staff = {nhanvien.staffs.filter((staff) => staff.id === parseInt(match.params.nhanvienId, 10))[0]}/>
    )
  }
return (
    <div>
        <Header />
        <Routes>
          {/* <Route path = '/home' element = {<HomePage/>}/>  */}
          <Route path = '/phongban' element = {() => <Department department = {nhanvien.departments}/>}/> 
          {/* <Route exact path = '/bangluong' element =  {() => <Salary salary = {salary}/>}/> */}
          <Route exact path = '/nhanvien' elementent = {() => <StaffLists staffs = {nhanvien.staffs}/>}/>
          <Route path ='/nhanvien:nhanvienId' element = {<StaffWithId/>}/>
        </Routes> 
        <Footer />
    </div>
  );
}

// export default Main