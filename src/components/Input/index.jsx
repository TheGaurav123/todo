import React from 'react'

const Input = ({
    value,
    label = "Label",
    onChange,
    className,
    placeholder = "Type here",
    type = "text"
}) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                className={`input input-bordered w-full max-w-xs ${className}`}
            />
        </label>
    )
}

export { Input }