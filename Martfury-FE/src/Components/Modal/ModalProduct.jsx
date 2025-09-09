import { useEffect, useState } from "react"
import { getCategoryList } from "../../Services/categoryService"
import { postProduct } from "../../Services/productService"

function ModalProduct({ closeModal }) {
    
    const [data, setData] = useState("")
    const [listCategory, setListCategory] = useState([])

    const listStatus = [
        {
            title : 'Active',
            color : 'text-green-500',
            status: 1
        },
        {
            title : 'Hidden',
            color : 'text-red-500',
            status: 0
        }
    ]

    useEffect(()=> {
        const fetchApi = async () => {
            const result = await getCategoryList()
            setListCategory(result)
        }
        fetchApi()
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <>
            <div className="bg-black/50 fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center">
                <div className="bg-dark-purple w-[600px] h-[calc(100% - 20px)] p-10 rounded-3xl shadow-lg relative overflow-y-auto">
                    <button className="absolute top-2 right-2 bg-[#5ACDE0] text-xs rounded-full px-2 py-1 text-white border-solid font-bold cursor-pointer" onClick={() => { closeModal(false) }}>X</button>
                    <form onSubmit={handleSubmit} method="post">
                        <div className="w-full text-center text-white border-b border-gray-200"><div className="mb-4 font-bold text-xl">Add Item</div></div>
                        <table className="overflow-y-scroll w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Name
                                    </th>
                                    <td className="px-6 py-4">
                                        <input className="rounded-xl px-3 text-black font-medium w-full" onChange={handleChange} placeholder="Type here ...." name="name" id="name" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Category
                                    </th>
                                    {listCategory.length > 0 && (
                                        <td className="px-6 py-4">
                                            <select name="category" id="category" className="w-full text-center rounded-xl px-3 text-black font-medium" onChange={handleChange}>
                                                <option className='text-gray-400' value='default'>--Choose category--</option>
                                                {(listCategory || []).map((item, index) => (
                                                    <option className='text-gray-400' key={index} value={item.category_id}>{item.category_name}</option>
                                                ))}
                                            </select>
                                        </td>
                                    )}
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Status
                                    </th>
                                    <td className="px-6 py-4">
                                        <ul className="flex justify-around">
                                            {listStatus.map((item, index) => (
                                                <li key={index} className="flex mr-2">
                                                    <input type="radio" className=" w-5 h-5 rounded-xl px-3 mr-2 font-medium" name="status" id="status" value={item.status} onChange={handleChange} /><span className={`${item.color}`}>{item.title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Quantity
                                    </th>
                                    <td className="px-6 py-4">
                                        <input className="rounded-xl px-3 text-black font-medium w-full" placeholder="Type here ...." name="quantity" id="quantity" onChange={handleChange}/>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Price
                                    </th>
                                    <td className="px-6 py-4">
                                        <input className="rounded-xl px-3 text-black font-medium w-full" onChange={handleChange} placeholder="Type here ...." name="price" id="price" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                        Discount
                                    </th>
                                    <td className="px-6 py-4">
                                        <input className="rounded-xl px-3 text-black font-medium w-full" onChange={handleChange} placeholder="Type here ...." name="discount" id="discount" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="w-4/5 text-right">
                            <input value="Submit" type="submit" className="hover:bg-green-500 text-white cursor-pointer w-auto mt-5 text-xs border border-black bg-gray-500 inline-block text-center rounded-3xl py-1 px-5 " />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ModalProduct