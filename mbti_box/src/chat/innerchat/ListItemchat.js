import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ListItemchat.css"

function ListItemchat({ roomName, roomId, creator, createDate  }) {


    return (
    <>
    
        {/* <Link to={{
            pathname:"/chatting",
            search:`?roomName=${roomName}`
        }} style={{ textDecoration: 'none', color: 'black'}}> */}


            <div className="list">
                <div className='text'>
                    <h5>🍞{roomName}</h5>
                </div>
                {/* <div style={{paddingBottom:"10px"}}>
                    <span>👑{creator}</span>
                    <span style={{float:"right"}}>{createDate.substr(0,10)}</span>
                </div> */}
            </div>
            

        {/* </Link> */}
    
    </>
    )
}

export default ListItemchat;