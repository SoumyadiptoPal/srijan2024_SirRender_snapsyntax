import React from "react";

const Experience = () => {
  return (
    <div className="exp_cont">
      <div className="exp_cont1">
        <div>RELEVANT</div>
        <div style={{marginTop:"-20px"}}>EXPERIENCE</div>
      </div>
      <div style={{display:"flex", flexDirection:"row"}}>
        <div style={{width:"30vw"}}>{/* Empty div fro styling */}</div>
        <div style={{width:"70vw"}}>
            <ExpItem/>
            <ExpItem/>
            <ExpItem/>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const ExpItem=()=>{
    return(
        <div style={{height:"150px"}}>
            <div style={{fontSize:"30px", fontWeight:"700"}}>
                Crosby
            </div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"80%"}}>
                    Lead UI and UX designer at Crosby. Help build many projects and godd works. Also received many awards for the same
                </div>
                <div>
                    [2020-present]
                </div>
            </div>
        </div>
    )
}