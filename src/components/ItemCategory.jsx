import React from 'react'

const ItemCategory = ({ nodes }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{
                display: 'inline-block',
                marginTop: "5px",

                color: "grey"
            }}>{nodes.name}</span>
            <span style={{
                display: 'inline-block',
                width: "23px", height: "23px",
                borderRadius: "50%",
                textAlign: "center",
                backgroundColor: "grey",
                margin: "5px",
                color: "black"
            }}>{nodes.childCategories ? nodes.childCategories.length : 0}</span>
        </div>
    )
}

export default ItemCategory