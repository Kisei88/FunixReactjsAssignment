import '../App.css';
import React, {Component, useState} from 'react';
import Department from './DepartmentComponent';
import StaffLists from './StaffListComponentTest';
import Salary from './SalaryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { DEPARTMENTS, ROLE, STAFFS } from './shared/staffs';
import { Switch, Route, Redirect } from 'react-router-dom';

export default function Main() {
  const [departments] = useState(DEPARTMENTS)
  const [role] = useState(ROLE)
  const [staffs, setStaffs] = useState(STAFFS)
  const [salary] = useState(Salary)
  
const HomePage = () => {
    return (
      <Home 
      staff = {staffs.filter((staff) => staff.id)[0]}

      department = {departments.filter((props) => props.id)[0]}

      salary = {salary.filter((salary) => salary.id)[0]}
      />
    )
  }

  const StaffWithId = ({match}) => {
    return(
      <StaffDetail 
      dish = {dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}

      comments = {comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
      />
    )
  }
return (
    <div>
        <Header />
        <Switch>
          <Route path = '/home' component = {HomePage}/>
          <Route path = '/phongban' component = {() => <Department department = {DEPARTMENTS}/>}/>
          <Route exact path = '/bangluong' component =  {Salary} />
          <Route path = '/nhanvien' component = {() => <StaffLists staff = {STAFFS} /> } />
          <Redirect to ='/home' />
        </Switch>
        <Footer />
    </div>
  );
}

// export default Main