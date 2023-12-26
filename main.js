const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

function Counter(props) {
  console.log(props)

  return (
   <div className='counter'>
      <button onClick = {()=>props.hdlUpdate(props.item.id,-1)}> - </button>
      <h3>{props.item.number}</h3>
      <button onClick = {()=>props.hdlUpdate(props.item.id,1)}> + </button>
      <button onClick={() => props.hdlUpdate(props.item.id, -props.item.number)}> C </button>

   </div>
  )
}

function SumInfo(props)  {
  const stTitle = {
    color : props.color,
    fontSize : props.size==='big' ? '50px' : '40px'
  }
  return (
    <div className='suminfo'>
      {/* <h1 style={stTitle}>Sum = 0</h1> */}
      <h1 style={ { color: props.color, fontSize: '50px' } }>Sum = 0</h1>
    </div>
  )
}

function App() {

  const [counters, setCounters] = React.useState([ {id: 1, number: 5} ])
  // let allCounter = Array(counters).fill(<Counter />)
  
  const hdlUpdate = (id, num) => {
    setCounters(prevCounters => {
        return prevCounters.map(counter => {
            if (counter.id === id) {
                let newNumber = counter.number + num;
                newNumber = Math.max(newNumber, 0); // ไม่ให้ค่าลดลงต่ำกว่า 0
                return { ...counter, number: newNumber };
            }
            return counter;
        });
    });
};


  return (
  <>
    <button className='text-center' >Add Counter</button>
    <SumInfo color="red" size="big"/> 

    {counters.map( el => {
      return <Counter key={el.id} item={el} hdlUpdate={hdlUpdate}/> 
    } )}

  </>
  )
}