import React from 'react'
import '../Css/Charts.css';
import '../Css/Common.css';
import '../Css/Core.css';
import '../Css/Demo.css';
import '../Css/Newstylle.css';
import '../Css/Scrol.css';
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import '../Css/Boxicon.css';
import {Link} from 'react-router-dom'
import '../Css/Theme.css';
import '../Css/Select.css';
import Aside from '../Aside/Aside';
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdCrisisAlert } from "react-icons/md";
import { HiDocumentReport } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { MdFactory } from "react-icons/md";
import { GiFireworkRocket } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { MdPending } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";






const Dashoard = () => {
  return (
   <>
   <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
    <div class="layout-page">
    <nav class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached
            align-items-center bg-navbar-theme" id="layout-navbar">
                <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <Link class="nav-item nav-link px-0 me-xl-4" to="javascript:void(0)">
                        <i class="bx bx-menu bx-sm"></i>
                    </Link>
                </div>
                <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                    <ol class="breadcrumb breadcrumb-style2 mb-0">
                    <li><MdManageHistory  class="bx bx-user me-2"/></li>
<li class="breadcrumb-item active" style={{padding: '2px 10px'}}>  Manage Dashboard </li>
                    </ol>
                    <ul class="navbar-nav flex-row align-items-center ms-auto">
                        <li class="nav-item lh-1 me-3">
                        <GrUserAdmin class="bx bx-user me-2" /><span class="align-middle">Administrator</span>
                                                    </li>
                                                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                            <Link class="nav-link dropdown-toggle hide-arrow" to="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <div class="avatar avatar-online">
                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt class="w-px-40 h-auto rounded-circle" />
                                </div>
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link class="dropdown-item" to="#">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 me-3">
                                                <div class="avatar avatar-online">
                                                    <img src="https://www.gloriousmatrimonial.com/public//assets/logo/8917801707308920.png" alt
                                                        class="w-px-40 h-auto rounded-circle" />
                                                </div>
                                            </div>
                                            <div class="flex-grow-1">
                                                <span class="fw-semibold d-block mt-2">Admin</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="https://gloriousmatrimonial.com/admin/basic-site-setting">
                                        <i class="bx bx-cog me-2"></i>
                                        <span class="align-middle">Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="dropdown-item" target="_blank" to="https://gloriousmatrimonial.com"
                                        rel="noopener">
                                        <i class='bx bx-slideshow me-2'></i>
                                        <span class="align-middle">Front End</span>
                                    </Link>
                                </li>
                                <li>
                                    <div class="dropdown-divider"></div>
                                </li>
                                <li>
                                                                        <Link class="dropdown-item" to="https://gloriousmatrimonial.com/admin/logout">
                                        <i class="bx bx-power-off me-2"></i>
                                        <span class="align-middle">Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
         <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
    <div class="row">
        <div class="col-md-6 col-lg-4 order-2">
            <a href="https://gloriousmatrimonial.com/admin/member" class="dashboard_animation dashboard_animation__new">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-primary">
                                        <BiSolidPurchaseTag class="bx bxs-user"/>
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Total Purchase</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            118
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('gender','Male')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-info">   
                                        <MdCrisisAlert class='bx bx-male-sign' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Total Sales</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            62
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('gender','Female')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-info">
                                       
                                        <HiDocumentReport class='bx bx-female-sign' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Generate Reports</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            56
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Paid')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-success">
                                        <GrUserWorker class='bx bx-credit-card' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Total Staffs</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            14
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Not Paid')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-warning">
                                        <GiFireworkRocket class='bx bx-credit-card' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Fireworks</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            100
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="https://gloriousmatrimonial.com/admin/renewal-member" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('plan_status','Expired')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-dark">
                                        <MdFactory class='bx bxs-user'style={{color: 'brown !important'}}  />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Factory List</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            4
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','APPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-success">
                                        <FaCheckCircle class='bx bxs-like' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Approved Member</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            115
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','UNAPPROVED')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-primary">
                                        <MdPending class='bx bxs-dislike' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">Pending List</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            2
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
        <div class="col-md-6 col-lg-4 order-2">
            <a href="#" class="dashboard_animation dashboard_animation__new" onclick="getDashboardData('status','Suspended')">
                <div class="card h-100 w-100 dashboard-box-color">
                    <div class="card-body">
                        <ul class="p-0 m-0">
                            <li class="d-flex mb-4 pb-1">
                                <div class="avatar flex-shrink-0 me-3">
                                    <span class="avatar-initial rounded bg-label-info">
                                        <MdProductionQuantityLimits class='bx bxs-user' />
                                    </span>
                                </div>
                                <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                    <div class="me-2">
                                        <h6 class="mb-0 text-white">All Products</h6>
                                    </div>
                                    <div class="user-progress d-flex align-items-center gap-1">
                                        <span class="text-muted badge bg-label-primary rounded-pill">
                                            1
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Dashoard