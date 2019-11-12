import React,{useState} from 'react'
import arraySort from 'array-sort'
import data from '../data/data.json'

export default ()=>{

  const [frontendTeam,setfronEndTeam]=useState(data);
  const [sortTypes,setsortTypes]=useState("");

  const sortByName=()=>{
    if(!sortTypes || sortTypes==="DESC")
    {
      setfronEndTeam(arraySort(frontendTeam,"name"));
      setsortTypes("ASC");
    }
    else
    {
      setfronEndTeam(arraySort(frontendTeam,"name",{reverse:true}));
      setsortTypes("DESC");
    }
  }
  return(
    <>
    <button onClick={sortByName}>{sortTypes&&sortTypes==="ASC"?"ASCENDING":"DESCENDING"}</button>
    <ul>
      {frontendTeam.map(single=>
        <li>{single.name}</li>
      )

      }
    </ul>
    </>
  );
}