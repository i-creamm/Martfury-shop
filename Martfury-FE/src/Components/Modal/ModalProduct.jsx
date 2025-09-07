function ModalProduct ({closeModal}) {
    return (
        <>
            <div className="bg-black/50 fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                <div className="bg-white w-[800px] h-[600px] p-10 rounded-3xl shadow-lg relative">
                    <button className="absolute top-2 right-2 bg-[#5ACDE0] text-xs rounded-full px-2 py-1 text-white border-solid font-bold cursor-pointer" onClick={()=>{ closeModal(false)}}>X</button>
                    <form action="" method="post">
                        <div className="grid grid-cols-3">
                            <div className="">
                                <label for="name">Name</label>
                                <input className="border-solid border-black border-2 rounded-2xl" type="text" name="name" id="name" />
                            </div>

                            <div className="">
                                <label for="name">Name</label>
                                <input className="border-solid border-black border-2 rounded-2xl" type="text" name="name" id="name" />
                            </div>

                            <div className="">
                                <label for="name">Name</label>
                                <input className="border-solid border-black border-2 rounded-2xl" type="text" name="name" id="name" />
                            </div>
                            
                        </div>
                    </form>
                </div>    
            </div>
        </>
    )
}

export default ModalProduct