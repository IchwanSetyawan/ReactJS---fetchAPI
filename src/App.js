import { useState, useEffect } from "react";
import List from './components/List';


function App() {
  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res =>res.json())
  .then(dataApi=>{
    setData(dataApi)
  })
  .catch(err=> setError('Error ketika mengambil data dari third party API!'))  
  .finally(()=> setLoading(false))


},[]) 
  return (
    <div className="App">      
        <h1>Fetc API in React</h1>
        {
          loading === true ? <h2>Loading ...</h2> : 
          <ul>
            {data.map(item=>
              <List 
                key={item.id}
                title={item.title} />            
            )}
          </ul>
      
        }
      
      {/* dijalankan ketika ada error yang muncul jika tidak ada maka tidak akan ditampilkan */}
      {error && <h2 style={{color: 'red'}}>{error}</h2>}
        
    </div>
  );
}

export default App;
