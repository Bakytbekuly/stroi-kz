import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import AppBar from "../components/AppBar"
import Menu from "../components/Menu"


const Layout = () => {



    return (
        <>
            <header>
                <AppBar></AppBar>

            </header>
            <main className='container'>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Menu />
                    <Outlet /></div>

            </main>


        </>
    )
}

export { Layout }