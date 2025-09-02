
function Navbar() {
    return (
      <div className="flex h-[50px] w-full items-center justify-between bg-gray-600 px-6 text-white shadow-md">
        <div className="flex items-center gap-2">
          <img 
            src="/planet-earth.png" 
            alt="Earthquake Logo" 
            className="h-8 w-8"
          />
          <span className="font-bold text-lg">Earthquake</span>
        </div>
  
        
        <div className="flex items-center gap-6">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/about" className="hover:text-yellow-300">About</a>
        </div>
      </div>
    )
  }
  
  export default Navbar;