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
        <h1>About</h1>
        <p style={{width:"500px"}}>I like to make beautiful sites and their mobile versions. I pay special attention to functionality, usability and appearance. I think that a small departure from the strict canons of layout is quite acceptable for the sake of external "pleasantness" and ergonomics, especially for tablet versions and mobile applications. And I really love coffee;)</p>
    </div>
</div>