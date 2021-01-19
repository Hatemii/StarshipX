import React from 'react'

function Missions() {
    return (
        <div className="my-3" style={{
            textAlign: "left",
            width: "150px",
            marginLeft: "16px"
        }}>
            <p>
                <span className="px-3 mr-2 bg-success" /><b>- Success</b>
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger" /><b>- Fail</b>
            </p>
        </div>
    )
}

export default Missions