import '../App.css';
import React, { useState } from 'react';
import Home from './HomeComponent';
import Department from './DepartmentComponent';
import StaffLists from './StaffList';
import StaffDetail from './StaffDetail';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DEPARTMENTS, STAFFS } from '../shared/staffs';
import { Route, Routes, useParams as params} from 'react-router-dom';

export default function Main() {
  const [departments] = useState(DEPARTMENTS)
  const [staffs] = useState(STAFFS);
  
// const HomePage = () => {
//     return (
//       <Home 
//       staff = {staffs.filter((staff) => staff.id)}
//       />
//     )
//   }

  const StaffWithId = () => {
    let staffId = params.staffId
    return(
      <StaffDetail 
      staff = {STAFFS.filter((prop) => prop.id === parseInt(staffId, 10))[0]}/>
    );
    
  };
return (
    <div>
        <Header />
        <Routes>
          <Route path = '/' element = {<Home staffs = {STAFFS}/>}/> 
          <Route path = '/phongban' element= {<Department dept = {DEPARTMENTS}/>}/> 
          <Route path = '/bangluong' element =  {<Salary staffs = {STAFFS}/>}/>
          <Route exact path = '/nhanvien' element = {<StaffLists staffs = {STAFFS}/>}/>
          <Route path ='/nhanvien/:staffId' element = {<StaffWithId/>}/>
        </Routes> 
        <Footer />
    </div>
  );
};