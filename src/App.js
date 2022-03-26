import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './components/Products/Products';
// import Lists from './components/Lists/Lists';
function App() {
  // const [check, setCheck] =useState([]);
  // useEffect(()=>{
  //   fetch('cases.json')
  //   .then(res=>res.json())
  //   .then(data=>setCheck(data))
  // },[]);
  return (
    <div className="App">
      <h1 className='website-name'>Case Wala</h1>
     <Products></Products>
    </div>
  );
}

export default App;
