import React from 'react'

const PrimaryButton = ({ label = "Label", disabled = false, onClick }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`btn ${disabled && 'btn-disabled'}`}>{label}</button>
    )
}

export { PrimaryButton }