import { NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../../../../src/assets/logo/Logo.jpg'
import a from '../../../assets/NavBarImg/a.png'
import b from '../../../assets/NavBarImg/b.png'
import c from '../../../assets/NavBarImg/c.png'
import d from '../../../assets/NavBarImg/d.png'
import e from '../../../assets/NavBarImg/e.png'

const NavBar = () => {

    return (
        <div>
            <div className="navbar border-b-2 ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        {/* lg:hidden */}
                        <label tabIndex={0} className="btn btn-ghost ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-60">
                            <li><NavLink to="/">হোম পেজ</NavLink></li>
                            <li><NavLink to="/NirbachoniElaka">নির্বাচনী এলাকা</NavLink></li>
                            <li><NavLink to="/RajnoitikDol">রাজনৈতিক দল</NavLink></li>
                            <li><NavLink to="/NirbachoniIstehar">নির্বাচনী ইস্তেহার</NavLink></li>
                            <li><NavLink to="/NirbachoniSongbad">নির্বাচনী সংবাদ</NavLink></li>
                            <li><NavLink to="/Login">লগ-ইন</NavLink></li>

                        </ul>
                    </div>
                    <img className="h-12 w-40 bg-slate-700" src={logo} alt="" />
                </div>


                {/* Large Device navbar-center*/}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="border-e-2 border-slate-400"><NavLink to="/"><img className="h-8 w-8" src={e} alt="" /><span className="text-xs font-semibold">হোম<br />পেজ</span></NavLink></li>
                        <li className="border-e-2 border-slate-400"><NavLink to="/NirbachoniElaka"><img className="h-8 w-8" src={a} alt="" /><span className="text-xs font-semibold">নির্বাচনী<br />এলাকা</span></NavLink></li>
                        <li className="border-e-2 border-slate-400"><NavLink to="/RajnoitikDol"><img className="h-8 w-8" src={b} alt="" /><span className="text-xs font-semibold">রাজনৈতিক<br />দল</span></NavLink></li>
                        <li className="border-e-2 border-slate-400"><NavLink to="/NirbachoniIstehar"><img className="h-8 w-8" src={c} alt="" /><span className="text-xs font-semibold">নির্বাচনী<br />ইস্তেহার</span></NavLink></li>
                        <li className="border-e-2 border-slate-400"><NavLink to="/NirbachoniSongbad"><img className="h-8 w-8" src={d} alt="" /><span className="text-xs font-semibold">নির্বাচনী<br />সংবাদ</span></NavLink></li>
                        <li><NavLink to="/Login"><span className="text-xs font-semibold">লগ-ইন</span></NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default NavBar;
