

const NavBar = () => {
  return (
    <div className="flex justify-between bg-yellow-950 py-3 px-2 w-3/4 mx-auto mt-4 rounded-xl text-white items-center">
        <h2 className="text-3xl font-bold">logo</h2>
        <ul className="flex gap-3 text-l font-semibold ">
            <li className="hover:text-yellow-500"><a href="">Home</a></li>
            <li className="hover:text-yellow-500"><a href="">Todo</a></li>
            <li className="hover:text-yellow-500"> <a href="">Add</a></li>
        </ul>
      
  
       
    </div>
  )
}

export default NavBar