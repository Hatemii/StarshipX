import React from 'react'

function ActiveHandle() {
    return (
        <div className="my-3" style={{
            textAlign: "left",
            width: "150px",
            marginLeft: "16px"
        }}>
            <p>
                <span className="px-3 mr-2 bg-success" /><b>- Active</b>
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger" /><b>- Not Active</b>
            </p>
        </div>
    )
}

export default ActiveHandle