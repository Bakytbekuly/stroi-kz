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
                <Menu />
                <Outlet />
            </main>


        </>
    )
}

export { Layout }