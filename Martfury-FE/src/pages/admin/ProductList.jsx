import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ModalProduct from "../../Components/Modal/ModalProduct"
import { useOutletContext } from "react-router-dom";

function ProductList() {
    const {open} = useOutletContext();
    
    const [data, setData] = useState([])

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(true)
    }

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://localhost:8080/api/products'
            const response = await fetch(url)
            const result = await response.json();
            setData(result);
        }
        fetchData()
    }, [])

    return (
        <>
            <div className={`fixed top-[85px] ${open ? 'left-[260px]' : 'left-[100px]'} duration-500  z-10 bg-[#F9FAFB] right-0 flex-col justify-between items-center gap-2`}>
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
                        <button onClick={toggleModal} className="m-2 p-2 text-white mr-5 bg-yellow-300 text-[12px] font-bold rounded-2xl">
                            + Add product
                        </button>

                        {modal && <ModalProduct closeModal={setModal} />}
                    </div>
                </div>
            </div>
            <div class="mt-[120px] relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && (data || [] ).map((item) => (
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td class="px-6 py-4">
                                    {item.product_id}
                                </td>
                                <td class="px-6 py-4 ">
                                    <img className="w-auto h-12 object-cover" src={item.image} alt={item.name} />
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td class="px-6 py-4">
                                    {item.Category.category_name}
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4">
                                    <NavLink to='/' class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default ProductList