import React , { useState }from 'react';


function Fortext(props) {
    const [text,setText] = useState('')
    const toggle = (event)=>{
    setText(event.target.value)
    
}
const clear=()=>{
    const x= ""
    setText(x)
}
const uppercase =()=>{
    const x = text.toUpperCase()
    setText(x)
}
const lowercase = ()=>{
    const x= text.toLowerCase()
    setText(x)
}
const copy=()=>{
    var text=document.getElementById('area1')
    text.select()
    navigator.clipboard.writeText(text.value)
}
const remover=()=>{
    let newtext= text.split(/[ ]+/)
    setText(newtext.join(" "))
}
  return (
      
  <>
  <div className="container mb-8" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color: props.mode==='light'?'black':'white'}}>Example textarea</label>
  <textarea placeholder='WRITE TEXT HERE...' className="form-control" value={text} onChange={toggle} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="area1" rows="8"></textarea>
   <button className="btn btn-primary my-1 mx-1"onClick={uppercase}>uppercase</button>
   <button className="btn btn-primary my-1 mx-1" onClick={lowercase}>lowercase</button>
   <button className="btn btn-primary my-1 mx-1" onClick={clear}>clear</button>
   <button className="btn btn-primary my-1 mx-1" onClick={copy}>copy</button>
   <button className="btn btn-primary my-1 mx-1" onClick={remover}>extra space remover</button>
   

<h1 style={{color: props.mode==='light'?'black':'white'}}>text summary</h1>
<p style={{color: props.mode==='light'?'black':'white'}}>you have {text.split(" ").length}words and {text.length} characters</p>
</div>
  </>);
}

export default Fortext;
