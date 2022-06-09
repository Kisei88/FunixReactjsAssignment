import '../App.css';
import React, {Component, useState} from 'react';
import Department from './DepartmentComponent';
import StaffLists from './StaffList';
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

//       department = {departments.filter((props) => props.id)[0]}

//       salary = {salary.filter((salary) => salary.id)[0]}
//       />
//     )
//   }

  // const StaffWithId = ({match}) => {
  //   return(
  //     <StaffDetail 
  //     staff = {staffs.filter((staff) => staff.id === parseInt(match.params.staffId, 10))[0]}

  //     comments = {comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
  //     />
  //   )
  // }
return (
    <div>
        <Header />
        <Routes>
          {/* <Route path = '/home' element = {<HomePage/>}/> */}
          {/* <Route path = '/phongban' element = {() => <Department department = {DEPARTMENTS}/>}/> */}
          {/* <Route exact path = '/bangluong' element =  {() => <Salary salary = {salary}/>}/>  */}
          <Route exact path = '/nhanvien' elementent = {() => <StaffLists staffs = {nhanvien.staffs}/>}/>
        </Routes>
        <Footer />
    </div>
  );
}

// export default Main