import React from 'react'

const IconButton = ({ icon: Icon, color, onClick, className }) => {
    return (
        <Icon
            onClick={onClick}
            className={`cursor-pointer text-2xl ${className}`}
            color={color}
        />
    )
}

export { IconButton }