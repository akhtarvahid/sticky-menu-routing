import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';

export default class Header extends React.Component{
    state = {isTop: true}
    componentDidMount(){
       document.addEventListener('scroll', () => {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            this.setState({isTop: false});
          } else {
            this.setState({isTop: true});
          }
    })
}
render(){
  return (
    <nav>
      <ul className="menu-list">
        <li>
          <div className={this.state.isTop ? 'header': 'header-shrink'}>
            Heading
          </div>
        </li>
        <li>
          <NavLink to="/menu1">Menu 1</NavLink>
        </li>
        <li>
          <NavLink to="/menu2">Menu 2</NavLink>
        </li>
        <li>
          <NavLink to="/menu3">Menu 3</NavLink>
        </li>
        <li>
          <NavLink to="/menu4">Menu 4</NavLink>
        </li>
      </ul>
    </nav>
  );
 }
}