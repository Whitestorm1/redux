import React from 'react'

export default function Button(props) {
    const dstyle = {
        width: props.width || "10px",
        color: props.color || "black"
    }
    
    return (
        <div>
        <input type ={props.type} value={props.value} onChange={(e)=>props.changed(e.target.value)} placeholder={props.default} />
        <button style = {dstyle} onClick={props.clickedFunction}>{props.content}</button>
            
        </div>
    )
}
