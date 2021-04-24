import React from 'react';
import ActorNavbar from '../../components/ActorNavbar/ActorNavbar';
import CardWarper from '../../components/MainSection/CardWarper/CardWarper';
import {useState} from "react";
import './ActorsPage.css';
 
function ActorsPage(actors) {
    const [value, setValue] = useState("");
    const [sort, setSort] = useState("Sort By");

    function getValue(e){
        setValue(e.target.value.toUpperCase())
    }

    function getSort(e){
        setSort(e)
    }

    return (
        <div className="ActorsPage">
           <ActorNavbar onChange = {getValue} onSelect = {getSort} sortBy={sort} />
           <CardWarper actors ={actors} inputVal={value} sortBy={sort}/>
        </div>
    );
}

export default ActorsPage;