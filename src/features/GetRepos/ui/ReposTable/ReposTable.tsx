import { useNavigate } from 'react-router-dom'
import { RoutePath } from 'shared/config/RouterConfig/RouterConfig'

export const ReposTable = () => {
    const navigate = useNavigate()
    const user = 'qbic'

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-6xl h-full scrollbar">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-5">
                            Наименование
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Язык программирования
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Описание
                        </th>
                        <th scope="col" className="px-6 py-5">
                            Количество звезд
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th
                            onClick={() =>
                                navigate(
                                    `../${user}${RoutePath.commits}Apple MacBook Pro 17/commits`,
                                )
                            }
                            scope="row"
                            className="cursor-pointer px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-5">Silver</td>
                        <td className="px-6 py-5">Laptop</td>
                        <td className="px-6 py-5">$2999</td>
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
                        <td className="px-6 py-5">$1999</td>
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
                        <td className="px-6 py-5">$99</td>
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
                        <td className="px-6 py-5">$799</td>
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
                        <td className="px-6 py-5">$999</td>
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
                        <td className="px-6 py-5">$2999</td>
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
                        <td className="px-6 py-5">$1999</td>
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
                        <td className="px-6 py-5">$99</td>
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
                        <td className="px-6 py-5">$799</td>
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
                        <td className="px-6 py-5">$999</td>
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
                        <td className="px-6 py-5">$2999</td>
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
                        <td className="px-6 py-5">$1999</td>
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
                        <td className="px-6 py-5">$99</td>
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
                        <td className="px-6 py-5">$799</td>
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
                        <td className="px-6 py-5">$999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
