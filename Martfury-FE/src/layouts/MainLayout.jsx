import { NavLink, Outlet } from "react-router-dom"
import logo from '../Components/assets/logo.png'
import cart_icon from '../Components/assets/cart_icon.png'
import Modal from "../Components/Modal/Modal"
import { useState } from "react"

function MainLayout() {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(true)
    }

    return (
        <>
             <header className="header relative shadow-[0_1px_3px_rgba(0,0,0,0.1)]">
                <div className='header-top text-lg text-center p-2 w-full bg-[var(--color-primary)] text-[var(--color-second)]'>
                    Due to the COVID 19 epidemic, orders may be processed with a slight delay
                </div>
                <div className='header-main'>
                    <div className='container'>
                        <div className='inner-warp flex justify-between items-center px-0 py-4'>
                            <div className='inner-logo flex justify-center'>
                                <a className="flex text-[22px] items-center  text-[var(--color-primary)] font-semibold" href='/'>
                                    <img className="h-[50px] w-auto mr-3" src={logo} alt='logo' />
                                    <span>Martfury</span>
                                </a>
                            </div>

                            <div className='inner-menu'>
                                <ul className="m-0 p-0 list-none flex space-x-6 text-lg text-[var(--color-primary)] font-normal pl-4 pr-4">
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li><a href='/'>Shops</a></li>
                                    <li><a href='/'>Products</a></li>
                                    <li><NavLink to='/about' >About</NavLink></li>
                                    <li><a href='/'>Contacts</a></li>
                                </ul>
                            </div>

                            <div className='text-lg text-[var(--color-primary)] font-normal'>
                                Need help? 989-879-0847
                            </div>


                            <button onClick={toggleModal}  className="hover:bg-[var(--color-primary)] hover:text-white bg-[var(--color-second)] font-bold text-[var(--color-third)] py-1 px-6 rounded-3xl">
                                Login
                            </button>

                            {modal && <Modal closeModal={setModal} />}

                            <NavLink className='flex relative' to="/">
                                <img className="w-full h-6" src={cart_icon} alt="cart" />
                                <span className="absolute text-[#fff] text-center text-[12px] w-[20px] h-[20px] -top-2 -right-3.5 bg-[#e35f26] rounded-[calc(100%/2)]">0</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </header>

            <Outlet />

        </>   
    )
}

export default MainLayout