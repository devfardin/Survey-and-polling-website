const HistoryCard = ({ payment }) => {
    const { userName, userEmail, planName, price, transactionId, date } = payment
    const convertDate = new Date(date)
    const daTe = (convertDate.toLocaleDateString('en-US'));
    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">
                    <div className='text-center'>
                        <div className="text-lg font-normal text-black1 text-left mt-1">
                            <h1 className="text-gray-600">{userName}</h1>
                            <h1 className="text-gray-500 text-base">{userEmail}</h1>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-4">
                    <div className='text-center'>
                        <div className="text-lg font-normal text-black1 text-left mt-1">
                            <h1 className="text-gray-600">{planName}</h1>
                            <h1 className="text-gray-500 text-base">$ {price}</h1>
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-base text-textColor font-normal'>
                <div className='flex gap-1'>
                    <h1 className="text-gray-600">{transactionId}</h1>
                </div>
            </td>
            <td >
                <h1 className='text-lg text-textColor font-normal px-3 py-1 rounded-lg '>{daTe}</h1>
            </td>
            
        </tr>
    )
}

export default HistoryCard