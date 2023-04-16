import { useParams } from 'react-router-dom'

export const CommitsTable = () => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl h-full scrollbar">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-5">
                            Автор коммита
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Хеш коммита
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Дата коммита
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-5">Silver</td>
                        <td className="px-6 py-5">Laptop</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-5">White</td>
                        <td className="px-6 py-5">Laptop PC</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-5">Black</td>
                        <td className="px-6 py-5">Accessories</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-5">Gray</td>
                        <td className="px-6 py-5">Phone</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-5">Red</td>
                        <td className="px-6 py-5">Wearables</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-5">Silver</td>
                        <td className="px-6 py-5">Laptop</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-5">White</td>
                        <td className="px-6 py-5">Laptop PC</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-5">Black</td>
                        <td className="px-6 py-5">Accessories</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-5">Gray</td>
                        <td className="px-6 py-5">Phone</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-5">Red</td>
                        <td className="px-6 py-5">Wearables</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-5">Silver</td>
                        <td className="px-6 py-5">Laptop</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-5">White</td>
                        <td className="px-6 py-5">Laptop PC</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-5">Black</td>
                        <td className="px-6 py-5">Accessories</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-5">Gray</td>
                        <td className="px-6 py-5">Phone</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-5">Red</td>
                        <td className="px-6 py-5">Wearables</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
