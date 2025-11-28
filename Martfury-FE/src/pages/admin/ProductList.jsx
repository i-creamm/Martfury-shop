import { useEffect, useState } from "react"
import ModalProduct from "../../Components/Modal/ModalProduct"
import { useOutletContext } from "react-router-dom";
import { deleteProduct, getProductList } from "../../Services/productService";
import Pagination from "../../Components/Pagination/Pagination";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'


function ProductList() {

    const {open} = useOutletContext();
    const [totalPage, setTotalPage] = useState([])
    const [data, setData] = useState([])
    const [modal, setModal] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const itemPerPage = 5
    

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProductList();
            setTotalPage(result)
            const start = (currentPage - 1) * itemPerPage
            const end = start + itemPerPage
            const currentItem = result.reverse().slice(start, end)
            setData(currentItem)
        }
        fetchAPI();
    }, [currentPage])

    const toggleModal = () => {
        setModal(true)
    }

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        });

        console.log(result)

        // if (result.isConfirmed) {
        //     try {
        //         await deleteProduct(id);
        //         Swal.fire({
        //             title: "Deleted!",
        //             text: "Your file has been deleted.",
        //             icon: "success"
        //         });
        //     } catch (error) {
        //         Swal.fire({
        //             title: "Error!",
        //             text: "Something went wrong.",
        //             icon: "error"
        //         });
        //     }
        // }
    };


    return (
        <>
            <div className={`${open ? 'left-[260px]' : 'left-[100px]'} duration-500  z-10 bg-[#F9FAFB] right-0 flex-col justify-between items-center gap-2`}>
                <div className="px-4 text-[30px] font-bold">Product List</div>
                <div className="flex justify-between items-center gap-2">
                    <ul className="list-none flex items-center space-x-2 p-4 basis-1/2">
                        <li>
                            <button className="w-24 py-1 px-5 bg-green-500 text-center text-[18px] font-bold rounded-2xl border-[#ddd] border-solid border-2">
                                All
                            </button>
                        </li>
                        <li>
                            <button className="w-24 py-1 px-5 bg-none text-center text-[18px] font-bold rounded-2xl border-[#ddd] border-solid border-2">
                                Active
                            </button>
                        </li>
                        <li>
                            <button className="w-24 py-1 px-5 bg-none text-center text-[18px] font-bold rounded-2xl border-[#ddd] border-solid border-2">
                                Hidden
                            </button>
                        </li>
                    </ul>
                    <div className="flex justify-around items-center basis-1/2">
                        <input
                            className="border-4 border-[#EBA72E] rounded-2xl w-9/12 h-9"
                            type="text"
                            placeholder="Search.."
                        />
                        <button onClick={toggleModal} className="m-2 p-2 text-white mr-5 bg-green-600 text-[12px] font-bold rounded-2xl">
                            + Add product
                        </button>

                        {modal && <ModalProduct closeModal={setModal} />}
                    </div>
                </div>
            </div>
            <div className=" mt-[20px] relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && (data || [] ).map((item, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td className="px-6 py-2">
                                    {item.product_id}
                                </td>
                                <td className="px-6 py-2 ">
                                    <img className="w-auto h-12 object-cover" src={item.image} alt={item.name} />
                                </td>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="px-6 py-2">
                                    {item.Category.category_name}
                                </td>
                                <td className="px-6 py-2">
                                    {item.price}
                                </td>
                                <td className="px-6 py-2 ">
                                    <div className="flex space-x-2">
                                        <FaRegEdit onClick={toggleModal} className="cursor-pointer"/>
                                        <FaRegTrashAlt onClick={()=> (handleDelete(item.product_id))}  className="cursor-pointer"/>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination
                currentPage={currentPage}
                itemPerPage={itemPerPage}
                totalPage={totalPage}
                onPageChange={(page) => setCurrentPage(page)}
            />
        </>
    )
}

export default ProductList