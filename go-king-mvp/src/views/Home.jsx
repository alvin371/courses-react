import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-emerald-100 text-stone-800">
      <Navbar/>
      <section className="flex">
        <div className="container">
        <h1 className="text">Going to Kampung Inggris</h1>
        <p>Membantu kamu untuk menemukan kursus di Kampung Inggris Pare yang sesuai dengan preferensimu</p>
        </div>
        <div className="container-right">
          <img src="/English.png" alt="Hero-section-logo" />
        </div>
      </section>

      <section className="">
          <h1>Features</h1>
          <div>
            <div id="courses">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
              <h2>Courses</h2>
              <p>
                Banyak pilihan kursus yang terpilih untuk menambah pengalaman anda di
                Kampung Inggris
              </p>
            </div>
            <div id="chatbot">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
              </svg>
              <h2>Chatbot</h2>
              <p>Chatbot 24/7 untuk menjawab pertanyaan anda</p>
            </div>
          </div>
      </section>

      <section>
        <div className="partner-container flex">
          <div>
          <h1>Our Partner</h1>
          </div>
          <div>
          <img src="/Access.png" alt="Access" />
          <img src="/brilliant.png" alt="Brilliant" />
          <img src="/globalenglish.png" alt="GE" />
          </div>
        </div>
      </section>

      <section className='FaQs'>
        
      </section>
    </div>
  )
}

export default Home