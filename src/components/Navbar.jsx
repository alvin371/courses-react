import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="bg-white text-gray-800 h-auto w-full p-2 px-6">
        <div className="flex flex-row items-center m-auto max-w-screen-xl">
              <div className="h-[40px]">
                <img src="/logogoking.png" alt="logo" className="hover:cursor-pointer h-full w-full"
                onClick={()=> navigate('/')}/>
              </div>
            <div className="flex w-full items-center justify-end gap-8">
              <div>
                <p className="hover:cursor-pointer">About Us</p>
              </div>
              <div>
                <p onClick={()=> navigate('/AIChat')} className="hover:cursor-pointer">C</p>
              </div>
              <div>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white hover:cursor-pointer' onClick={()=> navigate("course-search")}>Cari Kursus</button>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar