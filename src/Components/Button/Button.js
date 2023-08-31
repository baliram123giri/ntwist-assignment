import React from 'react'

const Button = ({ type = "primary", title = "Button", size = "lg", onClick }) => {
    return (
        <button onClick={onClick} style={{ fontWeight: 500, padding: size === "lg" ? "8px 35px" : "8px 25px", borderRadius: 2 }} className={`btn btn-${size}    btn-${type} fs-15 `}>{title}</button>
    )
}

export default Button