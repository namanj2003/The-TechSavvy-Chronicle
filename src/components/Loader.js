import React from 'react';
import ReactLoading from 'react-loading';
const Loader1 = () => {
    return (
        <>
        <div style={{justifyContent:"center", display:"flex", height:"30px", margin:"20px"}}>

        <ReactLoading type="spin" color="#0000FF"
                height={100} width={50} />
        </div>
        
</>
    );
}
export default Loader1;