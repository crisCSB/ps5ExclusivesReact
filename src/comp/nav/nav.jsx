import { useState } from "react";

export default function Nav(){
    
    const [curItem, curItemFunc] = useState({first:true,second:false,third:false});

    function activateItem1(){
    curItemFunc((atc)=>{
        return {...atc,first:true,second:false,third:false}; 
    });
    }   

    function activateItem2(){
        curItemFunc((atc)=>{
            return {...atc,first:false,second:true,third:false}; 
        });
    }

    function activateItem3(){
        curItemFunc((atc)=>{
            return {...atc,first:false,second:false,third:true}; 
        });
    }

    return (
        <nav id="nav" className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Ps5 Exclusives</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li onClick={activateItem1}  className="nav-item">
                    <a aria-current="page" href="#intro2023" className={curItem.first ? "nav-link active" :"nav-link"}>2023 +</a>
                </li>
                <li onClick={activateItem2} className="nav-item">
                    <a aria-current="page" href="#intro2022" className={curItem.second ? "nav-link active" :"nav-link"}>2022</a>
                </li>
                <li onClick={activateItem3} className="nav-item">
                    <a className={curItem.third ? "nav-link active" :"nav-link"} href="#intro2021">2021</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}