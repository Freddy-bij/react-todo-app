

const Todo = ({name,text}) => {
  return (
    <div className="bg-yellow-950 p-4 rounded-md text-center text-white ">
        <h2 className="text-black font-extrabold text-3xl">{name}</h2>
        <p className="font-bold text-xl">{text}</p>
    </div>
  )
}

export default Todo