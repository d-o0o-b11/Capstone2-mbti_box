import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListItemchat({ name }) {


    return (
    <>
    
        <Link to={{
            pathname:"/chatting",
            search:`?name=${name}`
        }} style={{ textDecoration: 'none', color: 'black'}}>


            <table class="blueone tablecenter">
                <tr>
                    <td>{name}</td>
                </tr>
            </table>
.
        </Link>
    
    </>
    )
}

export default ListItemchat;