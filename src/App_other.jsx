import { useCallback, useState } from 'react'
import './App.css'
import { fetchData } from './api/api'
import Table from './component/table'

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  const getData = useCallback(async () => {
    const new_data = await fetchData();
    setData(new_data)
  },[])

  return (
    <>
      <div>
      </div>
      <h1>React แบบง่ายๆ อ่อนๆ</h1>
      <div className="card">
        <button onClick={getData}>
          Create wip
        </button>
        <button onClick={getData}>
          Read
        </button>
        <button onClick={getData}>
          Update wip
        </button>
        <button onClick={getData}>
          Delete wip
        </button>
      </div>
      <div className='table'>        
        {data?.length > 0 ? <Table data={data}/> : <p>No Data</p>}
      </div>
    </>
  )
}

export default App
