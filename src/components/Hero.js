import React from 'react'

export default function Hero({handleLogout}) {
    return (
        <section className='hero'>
            <nav>
                <h2>Hello User</h2>
                <button onClick={handleLogout}>Loggout</button>
            </nav>
        </section>
    )
}
