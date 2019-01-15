import React,{Component} from 'react';

export default class Sidebar extends Component {

render(){
    return(
            <nav class="sidebar">    
            <ul class="nav flex-column sidebar-menu ">
                <li class="nav-item">
                <a class="nav-link" href="/">หน้าแรก</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">เข้าสู่ระบบ</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/">สมัครสมาชิก</a>
                </li>
            </ul>
            </nav>

    )
}

}