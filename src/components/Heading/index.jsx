import React from 'react'

const Heading = ({ title = "Title", className }) => {
    return <h2 className={`font-semibold text-center ${className}`}>{title}</h2>
}

export { Heading }