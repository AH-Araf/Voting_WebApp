import { NavLink } from "react-router-dom";
import './NavBar.css'
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import logo from '../../../../src/assets/logo/Logo.jpg'
import a from '../../../assets/NavBarImg/a.png'
import b from '../../../assets/NavBarImg/b.png'
import c from '../../../assets/NavBarImg/c.png'
import d from '../../../assets/NavBarImg/d.png'
import e from '../../../assets/NavBarImg/e.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

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
                            <li><NavLink to="/"><img className="h-4 w-4" src={e} alt="" />হোম পেজ</NavLink></li>
                            <li><NavLink to="/NirbachoniElaka"><img className="h-4 w-4" src={a} alt="" />নির্বাচনী এলাকা</NavLink></li>
                            <li><NavLink to="/RajnoitikDol"><img className="h-4 w-4" src={b} alt="" />রাজনৈতিক দল</NavLink></li>
                            <li><NavLink to="/NirbachoniIstehar"><img className="h-4 w-4" src={c} alt="" />নির্বাচনী ইস্তেহার</NavLink></li>
                            <li><NavLink to="/NirbachoniSongbad"><img className="h-4 w-4" src={d} alt="" />নির্বাচনী সংবাদ</NavLink></li>
                            {/* <li><NavLink to="/Login"><AiOutlineLogin />লগ-ইন</NavLink></li> */}
                            {
                                user ? <>
                                    <button className="ms-3 " onClick={handleLogOut}><span className="flex items-center gap-1"><BiLogOutCircle />লগ-আউট</span></button>
                                </> : <>
                                    <li className=""><NavLink to="/Login"><AiOutlineLogin /><span className="">লগ-ইন</span></NavLink></li>
                                </>
                            }

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

                        {
                            user ? <>
                                <button className="ms-3 font-semibold" onClick={handleLogOut}><span className="flex items-center gap-1 text-xs"><BiLogOutCircle />লগ-আউট</span></button>
                            </> : <>
                                <li className=""><NavLink to="/Login"><AiOutlineLogin /><span className="text-xs font-semibold">লগ-ইন</span></NavLink></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default NavBar;
