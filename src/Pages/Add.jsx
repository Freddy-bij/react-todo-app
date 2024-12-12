

const Add = () => {
  return (
    <div className=" flex justify-center">
        <form className="flex flex-col p-4 border-2 rounded-xl border-yellow-950" >
            <input type="text" placeholder="Enter..." className=" pl-2 border border-black outline-none"/><br></br>
            <textarea placeholder="Description"  className=" pl-2 border border-black outline-none"></textarea>
        </form>
    </div>
  )
}

export default Add