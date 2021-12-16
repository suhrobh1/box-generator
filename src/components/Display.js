import React, {useState} from 'react';

const Display = (props) => {

const {colorBox, setColorBox } = props;


return(
<div style={{width:"75%", margin:"auto"}}>
            <div style={{ display: "flex", justifyContent:"space-around" }}>
                {colorBox.map((spec, index) => (
                    <div
                        style={{
                            backgroundColor: spec.color,
                            height: spec.height + "px",
                            width: spec.width + "px",
                        }}
                        key={index}
                    >
                        <p></p>
                        
                       
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Display;