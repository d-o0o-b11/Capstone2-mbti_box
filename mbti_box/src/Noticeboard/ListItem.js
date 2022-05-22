import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ann.css'
import { Container, Row, Col} from "react-bootstrap";
import { FormOutlined } from '@ant-design/icons';
import qs from 'qs';
import axios from "axios";

function ListItem({ id, title,  createdAt}) { //start_date -> date

   

    return (
    <>

        {/* <Link to={{
            pathname:"/announcement"+`/${id}`,
            // search:`/${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}> */}


        {/* <Link to={`/announcement/${board_id}`} style={{ textDecoration: 'none', color: 'black'}}> */}

        <Link to={{
            pathname:"/detail",
            search:`?id=${id}`
        }} style={{ textDecoration: 'none', color: 'black'}}>


{/* <Link to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'black'}}> */}

            <table class="blueone tablecenter">
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>관리자</td>
                    <td>{createdAt}</td>
                </tr>
            </table>

        </Link>

    </>
    )
}

export default ListItem;