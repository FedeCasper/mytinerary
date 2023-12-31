import Navbar from './Navbar.jsx'

const Header = () => {
   return (
      <header className=' bg-teal-100 h-[20]'>
         <div className='flex justify-center py-2 gap-10'>
            <img className='h-12' src="src/assets/logo-mockup.png" alt="" />
            <h1 className="text-3xl self-center font-extrabold tracking-tight text-slate-800">
               Welcome to your dreams
            </h1>
         </div>
         <Navbar />
      </header>
   )
}

export default Header