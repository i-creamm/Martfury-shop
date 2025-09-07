import { NavLink, Outlet } from 'react-router-dom'
import logo from '../Components/assets/logo.png'
import { RiMenuFold3Line } from "react-icons/ri";
import { LuMail } from "react-icons/lu";
import { FiBell } from "react-icons/fi";
import { TfiDashboard } from "react-icons/tfi";


import { useState } from 'react';

function AdminLayout() {

    const [open, setOpen] = useState(true)

    
    const menus = [
        {
            name: "Dashboard",
            link: "/admin",
            spacing: false,
            icon: <TfiDashboard/>,
            subMenu: []
        },
        {
            name: "Products",
            link: "/admin/products",
            spacing: true,
            icon: <TfiDashboard/>,
            subMenu: [
                {
                    name: 'sub1',
                    link: '/',
                    icon: <TfiDashboard/>
                },
                {
                    name: 'sub2',
                    link: '/',
                    icon: <TfiDashboard/>
                }
            ]
        }
    ]

    return (
        <>
            <div className="min-h-screen">
                {/* Sidebar */}
                <aside className={`fixed  duration-500 ${open ? 'w-[260px]' : 'w-[100px]'}  h-full border-r bg-dark-purple`}>
                    
                    <div className={`flex ${open ? "justify-start" : "justify-center"} items-center p-4 relative`}>
                        
                        <NavLink
                            to="/"
                            className="flex text-[22px] items-center text-[var(--color-primary)] font-semibold"
                        >
                            <img className={`h-[50px] w-auto  cursor-pointer `} src={logo} alt="logo" />
                            <span className={`ml-2 text-white duration-300 ${!open && ' scale-0 w-0'}`}>Martfury</span>
                        </NavLink>
                    </div>
                    <nav className="flex flex-col gap-1 px-2 py-7">
                        {(menus || []).map((item, index) => (
                            <NavLink
                                to={item.link}
                                key={index}
                                className={`
                                    text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md ${item.spacing ? 'mt-9' : 'mt-2'} text-gray-300 hover:bg-light-white  `}>
                                <span className='text-2xl block float-left'>{item.icon}</span>
                                <span className={`text-base font-medium flex-1 ${!open && 'hidden'}`}>{item.name}</span>
                            </NavLink>
                        ))}
                    </nav>
                </aside>

                {/* Content */}
                <section className={`${open ? 'ml-[260px]' : 'ml-[100px]'} duration-500 flex flex-col`}>
                    {/* Header */}
                    <header className={`fixed top-0 ${open ? 'left-[260px]' : 'left-[100px]'} duration-500 right-0 h-20 border-b bg-white flex justify-between items-center px-4 `}>
                        
                        <div className='flex basis-[100%/2]'>
                            <RiMenuFold3Line onClick={() => {setOpen(!open)}} className={`bg-white 
                            top-14
                            border
                            border-dark-purple
                            cursor-pointer
                            text-2xl
                            text-dark-purple
                            duration-500
                            ${!open && 'rotate-180'}`}/>
                        </div>
                        
                        <div className='flex basis-[100%/2] items-center justify-between gap-3'>
                            <div><FiBell /></div>
                            <div><LuMail /></div>
                            <div className='flex items-center'>
                                <img className='rounded-3xl h-8 border border-black mr-1' src={logo} alt="" />
                                <div className='text-base font-semibold'>User info</div>
                            </div>
                        </div>
                    </header>

                    {/* Main content (scrollable) */}
                    <main className="pt-20 p-4 h-screen overflow-y-auto bg-gray-50">
                        <Outlet context={{open}}/>
                    </main>
                </section>
            </div>
        </>
    )
}

export default AdminLayout