import React from 'react';
import {Card, CardImg, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';


function Home(props) {

    const RenderCard = props.staffs.map((staff) => {
        return (
            <Card className = 'col-6 col-md-4 col-lg-2 my-2 border-0' key = {staff.id}>
                <Link to ={`/nhanvien/${staff.id}`}>
                    <CardImg width = '100%' src = {staff.image} alt = {staff.name} />                
                    <CardTitle className = 'text-center'>{staff.name}</CardTitle>
                </Link>
            </Card>
        )
    });    

    return (
        <div className = 'container-fluid'>
            <div className ='row'>
                    {RenderCard}
            </div>
                {/* <div className = 'col-12 col-md m-1'>
                    <RenderCard item = {props.department} />
                </div>
                <div className = 'col-12 col-md m-1'>
                    <RenderCard item = {props.salary} />
                </div> */}
        </div>
            
    )
};

export default Home;