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
import { Route, Routes, useParams} from 'react-router-dom';

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
    const {Id} = useParams()
    return(
      <StaffDetail 
      staff = {staffs.filter((staff) => staff.id === parseInt(Id, 10))[0]}/>
    );
    
  };
return (
    <div>
        <Header />
        <Routes>
          <Route path = '/' element = {<Home staffs = {STAFFS}/>}/> 
          <Route path = '/phongban' element= {<Department dept = {DEPARTMENTS}/>}/> 
          <Route path = '/bangluong' element =  {<Salary staffs = {STAFFS}/>}/>
          <Route path = '/nhanvien' element = {<StaffLists staffs = {STAFFS}/>}/>
          <Route path ='/nhanvien/:Id' element = {<StaffWithId/>}/>
        </Routes> 
        <Footer />
    </div>
  );
};