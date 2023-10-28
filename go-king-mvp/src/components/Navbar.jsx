import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
        <div className="bg-white p-4 text-gray-800 flex flex-row h-[60px]">
              <div className="logo h-[40px]">
                <img src="/logogoking.png" alt="logo" onClick={()=> navigate('/')}/>
              </div>
            <div className="flex items-center w-3/4 justify-end">
              <div className="m-4">
                <p>About Us</p>
              </div>
              <div className="m-4">
                <p>FaQs</p>
              </div>
              <div>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white m-4' onClick={()=> navigate("course-search")}>Cari Kursus</button>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar