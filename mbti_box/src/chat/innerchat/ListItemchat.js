import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./ListItemchat.css"

function ListItemchat({ roomName, roomId }) {


    return (
    <>
    
        <Link to={{
            pathname:"/chatting",
            search:`?roomId=${roomId}`
        }} style={{ textDecoration: 'none', color: 'black'}}>


            <div className="list">
                <div className='text'>
                    <h6>{roomName}</h6>
                </div>
            </div>

        </Link>
    
    </>
    )
}

export default ListItemchat;