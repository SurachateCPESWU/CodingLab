import React,{Component} from 'react';


export default class Header extends Component {

    render(){
        return(
        
          <div class="navbar header-top navbar-expand-lg  navbar-dark bg-dark">
          <div>
          </div>
            <span class="navbar-toggler-icon leftmenutrigger"></span>
            <a class="navbar-brand" href="/"> CodingLAB </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav ml-md-auto d-md-flex">
                <li class="nav-item">
                  <a class="nav-link" href="/">หน้าแรก
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Login">เข้าสู่ระบบ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Register">สมัครสมาชิก</a>
                </li>
              </ul>
            </div>
          </div>
          
        )
    }



}