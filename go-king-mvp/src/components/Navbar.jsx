import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div className="bg-white p-4 text-gray-800 flex">
            <Link to="/">
              <div className="logo">
                <img src="/logogoking.png" alt="logo" />
              </div>
            </Link>
            <div>
              <p>About Us</p>
              <p>FaQs</p>
              <div>
                <button className='bg-Emerald-600 hover:bg-Emerald-700 text-white'>Cari Kursus</button>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar