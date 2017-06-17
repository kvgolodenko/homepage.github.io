/**
 * Created by kirill on 6/17/17.
 */
import React from "react"
import Link from "gatsby-link"

export default () =>
    <div>
        <header style={{"display":"flex",
            "width": "500px",
            "flex-direction": "row",
            "justify-content": "space-around"}}>
            <Link to="/about/">About</Link>
            <Link to="">Home</Link>
        </header>
        <div>
            <h1>Kirill`s personal homepage</h1>
            <img style={{width: "400px"}} src="https://scontent.xx.fbcdn.net/v/t1.0-9/16473596_866135486861850_3048239217832092488_n.jpg?oh=51058c083194641b55f9f35c1f69255d&oe=59DDD577" />
        </div>
    </div>
