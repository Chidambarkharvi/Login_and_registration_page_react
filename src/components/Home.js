import React from 'react'

function Home(props) {
    return (
        <div>
            Home Component
            <p>
                user:{props.userName}
            </p>
        </div>
    )
}

export default Home
