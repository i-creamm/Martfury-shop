function Pagination({currentPage, itemPerPage, totalPage, onPageChange}){
    const allPage = Math.ceil(totalPage.length /itemPerPage)


    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="inline-flex w-full justify-end mt-3 -space-x-px text-sm">
                    {[...Array(allPage)].map((_, index) =>(
                        <li key={index + 1}>
                            <button
                            onClick={() => onPageChange(index + 1)}
                            className={`flex items-center justify-center px-3 h-8 leading-tight
                            ${currentPage === index + 1 ? "bg-blue-500" : "bg-gray-400"}
                            text-black border border-gray-300 hover:bg-gray-100`}>
                                {index + 1}
                            </button>
                        </li>
                    ))}
                                    
                </ul>
            </nav>
        </>
    )
}

export default Pagination