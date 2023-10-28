import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="bg-white p-4 text-gray-800 flex flex-row">
            <Link to="/">
              <div className="logo">
                <h2 className="text-emerald-700">GOKing</h2>
                {/* <img src="/logogoking.png" alt="logo" /> */}
              </div>
            </Link>
            <div className="flex items-center">
              <div className="m-4">
                <p>About Us</p>
              </div>
              <div className="m-4">
                <p>FaQs</p>
              </div>
              <Link to="course-search">
              <div>
                <button className='bg-emerald-600 hover:bg-emerald-700 text-white'>Cari Kursus</button>
              </div>
              </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar