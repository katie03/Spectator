import './App.css';

import { useState, useEffect } from 'react';
import Header from './components/header';
import Source from './components/source';
import Input from './components/input';
import './App.css';

function App() {
  
  const [sources, setSources] = useState([]);

  useEffect(() => {fetchData()}, []);

  const fetchData = async () => {
    await fetch('http://localhost:8080/api/sources')
    .then(response => response.json())
    .then(data => {setSources(data)
    console.log(data)});
  };

const addData = async (name, email) => {
  const newSource = {
    id: current_id,
    "name": name,
    "email": email,
  };

  await fetch('http://localhost:8080/api/add_source', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({source:newSource})
})
  .then(response => response.json())
  .then(data => {
    setSources(data);
  })
}

const deleteData = async (id) => {
  console.log("called deleteData")
  await fetch('http://localhost:8080/api/delete_source', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
  body: JSON.stringify({id:id})

})
  .then(response => response.json())
  .then(data => {
    setSources(data);
    console.log(data)

  }).catch(error => {
    console.log(error)
  })
}

  let current_id = sources.length + 1;
  
  /*const deleteSource = (id) => {
    const newSourceList = sources.filter(source => source.id !== id);
    for (var i = 0; i < newSourceList.length; i++) {
      newSourceList[i].id = i+1;
    }

    setSources(newSourceList);
  };*/

  /*const submitSource = (name, email) => {
    const newSource = {
      "id": current_id,
      "name": name,
      "email": email,
    };
    current_id += 1;
    setSources([...sources, newSource]);
  };*/

 return (
  <div>
  <Header />
  <Input submitSource={addData} />
    {sources.map(source => {
      return (
        <Source  source={source} deleteSource = {deleteData}/>
      )
    })}


  </div>
);

}

export default App;
