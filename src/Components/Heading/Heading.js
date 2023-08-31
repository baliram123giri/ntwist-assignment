import React from 'react'
function sizeType(type) {
    switch (type) {
        case "h2":
            return 35
        case "h6":
            return 17
        default:
            return 43
    }
}
const Heading = ({ type = "h1", title = "", color = "text-white", lineHeight = 1.2, fontSize, fontWeight }) => {
    return <h1 style={{ fontWeight: fontWeight || "inherit", lineHeight, fontSize: fontSize || sizeType(type), color }} className={`${color}`}>{title}</h1>
}

export default Heading