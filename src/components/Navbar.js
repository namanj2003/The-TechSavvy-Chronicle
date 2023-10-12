
import React from "react"
import "../newsapp.css";
import Search from "./Search";

const Navbar = () => {

    return (
        <>
            <div className="navbar1">
                <Search />
                </div>
                <table className="table1">
                    <tr className="row1">
                        <td><a className="nav-link"href="/home">Home</a></td>
                        </tr>
                        <tr className="row1">
                        <td><a className="nav-link" href="/newslist">News</a></td>
                    </tr>
                    
                </table>
        </>
    )
}
export default Navbar;
