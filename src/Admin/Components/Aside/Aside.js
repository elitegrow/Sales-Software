import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './Aside.css';
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import '../Css/Boxicon.css';
import '../Css/Theme.css';
import '../Css/Select.css';
import { MdDashboard  } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import { IoIosAddCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5" 
import { RiAdminFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaFileInvoice } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { MdNewspaper } from "react-icons/md";
import { IoReceipt } from "react-icons/io5";





const Aside = () => {

    const [subMenuStates, setSubMenuStates] = useState({});

    // Function to toggle submenu for a specific menu item
    const toggleSubMenu = (menuItem) => {
        setSubMenuStates(prevState => ({
            ...prevState,
            [menuItem]: !prevState[menuItem] // Toggle the state for the given menu item
        }));
    }

  
  return (
<>

        {/* Menu */}
        <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
            <div class="app-brand demo">
                <Link to="https://gloriousmatrimonial.com/admin/dashboard" class="app-brand-link"> </Link>
                    {/* <img src="https://www.gloriousmatrimonial.com/public//assets/logo/2717431707816795.png" alt class="w-100" /> */}
                    <h4 className='w-100 logo-txt'>Hayagrivas Sales</h4>
                    <Link to="javascript:void(0);"
                        class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
            </div>
            <div class="menu-inner-shadow"></div>
            <ul class="menu-inner py-1">
                {/* Dashboard */}
                <li class="menu-item active open">
                <div to="" class="menu-link menu-toggle" onClick={() => toggleSubMenu('dashboard')}>
                        <MdDashboard class="menu-icon tf-icons bx bxs-cog" />
                        <div data-i18n="Site Settings">Dashoard</div>
                    </div>
                    {subMenuStates['dashboard'] && (
                <ul className="menu-sub">
                    <li className="menu-item">
                        <Link to="" className="menu-link">
                            <div data-i18n="Blank">Factorywise Billing</div>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="" className="menu-link">
                            <div data-i18n="Blank">Order Form</div>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="" className="menu-link">
                            <div data-i18n="Blank">LR Number</div>
                        </Link>
                    </li>
                   
                </ul>
            )}    
                </li>
                {/* Basic Site Settings */}
                    <li class="menu-item "> 
                    <div to="" class="menu-link menu-toggle" onClick={() => toggleSubMenu('userAccess')}>
                        {/* <i class="menu-icon tf-icons bx bxs-cog"></i> */}
                        <RiContactsFill class="menu-icon tf-icons bx bxs-cog" />
                        <div data-i18n="Site Settings">User Access</div>
                    </div>

                    {subMenuStates['userAccess'] && (
                <ul className="menu-sub">
                    <li className="menu-item">
                        <Link to="" className="menu-link">
                            <div data-i18n="Blank">User List</div>
                        </Link>
                    </li>
                    <li className="menu-item">
                        <div to="" className="menu-link">
                            <div data-i18n="Blank" className=" menu-toggle" onClick={() => toggleSubMenu('adminList')}>Admin List</div>
                        </div>
                        {subMenuStates['adminList'] && (
                            <ul className="submenu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <FaUserSecret className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Super Admin</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                          <RiAdminFill className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Office Admin</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                        <GrUserWorker className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Fireworks Staff</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaChalkboardTeacher className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Magzine Staff</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            )}            
                </li>

               
        <li className="menu-item">
            <div className="menu-link menu-toggle" onClick={() => toggleSubMenu('company')}>
                <FaBuilding className="menu-icon tf-icons bx bxs-book-content" />
                <div data-i18n="HomePageManagement">Company</div>
            </div>
            {subMenuStates['company'] && (
                <ul className="menu-sub">
                    <li className="menu-item">
                        <Link to="" className="menu-link">
                            <div data-i18n="Blank">Company Info</div>
                        </Link>
                    </li>
                </ul>
            )}
        </li>         


                {/* Add New Details */}
                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('newDetails')}>
                        {/* <i class="menu-icon tf-icons bx bxs-add-to-queue"></i> */}
                        <IoIosAddCircle class="menu-icon tf-icons bx bxs-add-to-queue" />
                        <div data-i18n="AddNewDetails">Creation</div>
                    </Link>
                    {subMenuStates['newDetails'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="/Religion" class="menu-link">
                                <div data-i18n="Without menu">Fireworks</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Caste" class="menu-link">
                                <div data-i18n="Without menu">Magazine</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Occupation" class="menu-link">
                                <div data-i18n="Without menu">Products</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                        <div to="" className="menu-link">
                            <div data-i18n="Blank" className=" menu-toggle" onClick={() => toggleSubMenu('purchaseParty')}>Purchase Party</div>
                        </div>
                        {subMenuStates['purchaseParty'] && (
                            <ul className="submenu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <MdPostAdd className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Purchase Entry</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaFileInvoiceDollar className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Purchase Invoice</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaFileInvoice  className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Vouncher</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <BiSolidReport className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Purchase Report</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <MdNewspaper className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Vouncher Report</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>
                        <li class="menu-item ">
                        <div to="" className="menu-link">
                            <div data-i18n="Blank" className=" menu-toggle" onClick={() => toggleSubMenu('sales')}>Sales</div>
                        </div>
                        {subMenuStates['sales'] && (
                            <ul className="submenu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaFileInvoiceDollar className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Sales Invoice</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <IoReceipt className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Sales Receipt</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <BiSolidReport className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Sales Report</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>
                        <li class="menu-item ">
                        <div to="" className="menu-link">
                            <div data-i18n="Blank" className=" menu-toggle" onClick={() => toggleSubMenu('suspense')}>Suspense</div>
                        </div>
                        {subMenuStates['suspense'] && (
                            <ul className="submenu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaFileInvoiceDollar  className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Voucher</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <IoReceipt className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Receipt</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <FaBook className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Daybook</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <BiSolidReport className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Report</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>
                        <li class="menu-item ">
                            <Link to="/Star" class="menu-link">
                                <div data-i18n="Without menu">Agency</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Moonsign" class="menu-link">
                                <div data-i18n="Without menu">Customer</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                        <div to="" className="menu-link">
                            <div data-i18n="Blank" className=" menu-toggle" onClick={() => toggleSubMenu('constractor')}>Constractor</div>
                        </div>
                        {subMenuStates['constractor'] && (
                            <ul className="submenu-sub">
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <GrUserWorker  className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Constractor Cooly</div>
                                    </Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="" className="menu-link">
                                    <GrUserWorker  className='menu-icon tf-icons bx sub-menu-icon'/>
                                        <div data-i18n="Blank">Constractor Report</div>
                                    </Link>
                                </li>
                            </ul>
                        )}
                        </li>
                        <li class="menu-item ">
                            <Link to="/Moonsign" class="menu-link">
                                <div data-i18n="Without menu">Transport</div>
                            </Link>
                        </li>

                    </ul>
                     )}
                </li>
                                {/* Member */}
                
                                                <li class="menu-item ">
                    <Link to="javascript:void(0);" class="menu-link menu-toggle" onClick={() => toggleSubMenu('tax')}>                       
                        <FaMoneyCheckDollar class="menu-icon tf-icons bx bxs-user-detail" />
                        <div data-i18n="Member">Tax</div>
                    </Link>
                    {subMenuStates['tax'] && (
                    <ul class="menu-sub">
                        <li class="menu-item ">
                            <Link to="/Addmember" class="menu-link">
                                <div data-i18n="Without menu">Tax Old</div>
                            </Link>
                        </li>
                        <li class="menu-item ">
                            <Link to="/Addmember" class="menu-link">
                                <div data-i18n="Without menu">Tax New</div>
                            </Link>
                        </li>
                     
                     </ul>
                    )}
                </li>              
            </ul>
        </aside>
    
  </>  
    
 
  )
}

export default Aside
