import React, { useEffect } from 'react'
import loginChecker from '../../utils/LoginChecker'
import { useNavigate } from 'react-router-dom'

const ListCourse = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const isLoggedIn = loginChecker()
        if (!isLoggedIn) navigate('/login-admin')
    }, [])

    return (
        <div className="bg-emerald-100 flex">
            <div className="container-left">
                <div className="flex" id="sidebar">
                    <div className="w-full bg-white h-screen text-gray-800 p-4">
                        <h2 className="text-2xl font-semibold mb-4">Go-King</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 hover:bg-gray-300">
                                    Kursus
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container-right text-gray-800">
                <div>
                    <h1 className="">Daftar Kursus</h1>
                    <div>
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th>Nama</th>
                                    <th>Tipe</th>
                                    <th>Durasi</th>
                                    <th>Fasilitas</th>
                                    <th>Aksen</th>
                                    <th>Deskripsi</th>
                                    <th>WhatsApp</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListCourse