import React from 'react'
import { Landing } from './'
import { FaGithub } from "react-icons/fa";

const Layout = () => {
    return (
        <div className='min-h-screen'>
            <Landing />
            <a href='https://github.com/TheGaurav123/todo' target='_blank'>
                <FaGithub className='absolute top-5 right-5 text-4xl' />
            </a>
        </div>
    )
}

export default Layout