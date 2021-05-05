import React from 'react';
export interface Props{
    
    color: string;
    label?: React.ReactNode;
    input?:React.ReactNode;
    height: string;
    onClick: () => void;
    radius: string
    width: string;
  }
 
  
  const GenBtn: React.FC<Props> = ({ 
    label,
    input,
    color ,
    children,
    height,
    onClick, 
    radius,
    width
  }) 
=> { 
  return (
    <button 
      onClick={onClick}
      
      style={{
         backgroundColor: "light-blue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
         
         borderRadius: "35%",
         height,
         width,
         marginLeft:"50%",
         
      }}
    >
    {label="submit"}
    
    
    </button>
    
  );
}

export default GenBtn;