

function Modal ({closeModal}) {
    return (
        <>
            <div className="bg-black/50 fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                <div className="bg-[#F7AC32] p-10 rounded-3xl shadow-lg relative">
                    <button className="absolute top-2 right-2 bg-[#5ACDE0] text-xs rounded-full px-2 py-1 text-white border-solid font-bold cursor-pointer" onClick={()=>{ closeModal(false)}}>X</button>
                    <form action="" method="post">
                        <div className="text-center p-2 text-[22px] font-bold text-white">Login</div>
                        <div className="flex-col">
                            <div>
                                <input className="mb-1 rounded-xl px-3 py-1" type="text" placeholder="email" name="email" required />
                            </div>
                            <div>
                                <input className="mb-1 rounded-xl px-3 py-1" type="password" placeholder="Password" name="password" required />
                            </div>
                        </div>

                        <button className="rounded-xl bg-[#5ACDE0] text-white border-solid w-full">Login</button>
                    </form>
                </div>    
            </div>
        </>
    )
}

export default Modal