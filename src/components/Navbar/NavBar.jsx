import React, { useEffect, useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import Switch from "@material-ui/core/Switch";
import "./navbar.css";

import { connect } from "react-redux";
import { switchRole } from "../../Redux/action";

function NavBar({ data, switchRole }) {
  const [role, setRole] = useState(data && data.roleType);

  useEffect(() => {
    setRole(data && data.roleType);
  }, [data.roleType]);

  const handleChange = (e) => {
    if (role === "HIRE_DEVS") switchRole("DEVS");
    else switchRole("HIRE_DEVS");
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-inner-wrapper">
        <div>
          <a href="/" className="no-link">
            <span className="hide-small logo-text">
              Full<span>Stack</span>
            </span>
            <img
              className="logo"
              src="data:image/svg+xml,%3Csvg version='1.1' id='Ð¡Ð»Ð¾Ð¹_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 128 128' enable-background='new 0 0 128 128' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFFFFF' d='M45.5,116.8h37c4.5,0,8.3-3.4,8.7-7.8l7.9-71.4H28.8l7.9,71.4C37.2,113.4,41,116.8,45.5,116.8z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg opacity='0.1'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23101215' d='M77.5,109l7.9-71.4h13.8L91.3,109c-0.5,4.5-4.3,7.8-8.7,7.8H68.7C73.2,116.8,77,113.4,77.5,109z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Crect x='24.4' y='23.3' fill='%23A8B2C6' width='79.2' height='13.2'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg opacity='0.1'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Crect x='89.8' y='24.4' fill='%23101215' width='13.8' height='13.2'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpolyline fill='%23A8B2C6' points='33.2,24.4 38.1,11.2 89.8,11.2 94.8,24.4 '%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg opacity='0.1'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpolygon fill='%23101215' points='89.8,11.2 94.8,24.4 81,24.4 76,11.2 '%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cpath fill='%23464C55' d='M103.6,21.4h-6.7l-4.3-11.3c-0.4-1.1-1.5-1.9-2.8-1.9H38.1c-1.2,0-2.4,0.7-2.8,1.9l-4.2,11.3h-6.7 c-1.7,0-3,1.3-3,3v13.2c0,1.7,1.3,3,3,3h1.8l7.6,68.7c0.6,6,5.7,10.5,11.7,10.5h37c6,0,11.1-4.5,11.9-10.4l7.6-68.8h1.6 c1.7,0,3-1.3,3-3V24.4C106.6,22.7,105.3,21.4,103.6,21.4z M40.2,14.2h47.5l2.7,7.2H37.5L40.2,14.2z M27.4,27.4h5.8h61.6h5.8v7.2 H27.4V27.4z M88.4,108.7c-0.4,3-2.8,5.2-5.8,5.2h-37c-3,0-5.5-2.3-5.8-5.2l-7.5-68.1h63.7L88.4,108.7z'%3E%3C/path%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpolygon fill='%23ef6c00' points='97,88.6 31,88.6 27.5,57.8 100.5,57.8 '%3E%3C/polygon%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg opacity='0.1'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpolyline fill='%23101215' points='96.8,88.6 83,88.6 86.4,57.8 100.2,57.8 '%3E%3C/polyline%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23464C55' d='M97,91.6H31c-1.5,0-2.8-1.1-3-2.7l-3.4-30.8c-0.1-0.8,0.2-1.7,0.7-2.3c0.6-0.6,1.4-1,2.2-1h72.9 c0.9,0,1.7,0.4,2.2,1c0.6,0.6,0.8,1.5,0.7,2.3L100,89C99.9,90.5,98.6,91.6,97,91.6z M33.6,85.6h60.7l2.8-24.8H30.9L33.6,85.6z '%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Ccircle fill='%23F4F1E7' cx='63.7' cy='73.2' r='8.8'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A"
            />
            <span className="hide-small logo-text">Café</span>
          </a>
        </div>
        <div className="right-side-wrapper">
          <div className="switch-wrapper">
            <Switch
              checked={role === "HIRE_DEVS"}
              onChange={handleChange}
              name="hiringDev"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <span className="switch-text"> I'm Hiring Devs </span>
          </div>
          <div className="unlock-button-wrapper">
            <button className="button-wrapper">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='18px' height='18px'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h2c0-1.66 1.34-3 3-3s3 1.34 3 3v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z'/%3E%3C/svg%3E"
                alt="lock"
              />
              <span className="button-text">
                <b>Unlock 3877 Answers</b>
              </span>
            </button>
          </div>
          <div className="currency-icon">
            <AttachMoneyIcon color="secondary" />
          </div>
          <div>
            <button className="sign-in-wrapper">
              <FacebookIcon color="secondary" />
              <span className="signIn-text">Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { data: state };
};
const mapDispacthToProps = (dispatch) => {
  return { switchRole: (data) => dispatch(switchRole(data)) };
};
export default connect(mapStateToProps, mapDispacthToProps)(NavBar);
