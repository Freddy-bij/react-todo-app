
import { BrowserRouter, Routes ,Route} from 'react-router'
import NavBar from './Components/NavBar'
import Add from './Pages/Add'
import Home from './Pages/Home'
import Todo from './Pages/Todo'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <NavBar/>
   
 
  {/* <Add/>  */}
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/' element={  <div className=' grid grid-cols-3 gap-4 p-4'>
   <Todo name ='living room cleaning' text='to i will clearning my house with living room cleaning'/>
    <Todo name ='Dining Room Cleaning' text='to i will use dining Room to clean my house'/>
    <Todo name ='towel' text='to i will clearning my house with  towel'/>
    <Todo name ='squeegee' text='to i will clearning my house with squeegee'/>
    <Todo name ='Dust' text='to i will clearning my house with dust'/>
   </div>} />
    </Routes>
    </BrowserRouter>
   <Footer/> 
    </>
  )
}

export default App