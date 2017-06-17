/**
 * Created by kirill on 6/17/17.
 */
import React from "react"
import Link from "gatsby-link"

export default () =>
    <div className="container">
        <header style={{"display":"flex",
            "width": "500px",
            flexDirection: "row",
            justifyContent: "space-around"}}>
            <Link to="">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
        </header>
        <div>
            <h1>Contacts</h1>
            <span style={{width:"500px"}}>
                <p>+380633367733</p>
                <a href="mailto:golodenkokv@gmail.com">golodenkokv@gmail.com</a>
            </span>
        </div>
    </div>