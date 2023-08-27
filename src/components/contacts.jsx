import React from 'react'

export default function Contacts() {
    return (
        <div className='bg-gradient-to-r from-fuchsia-600 to-fuchsia-400 h-screen p-2 flex justify-center'>
            <div className='container grid grid-rows-5 p-4 bg-gradient-to-tr from-yellow-500 to-orange-300
            rounded-lg text-left'>
                <div>
                    <h1 className='text-3xl mb-4'>Contact Information</h1>
                    <h3>Gmail - hellbreath62@gmail.com</h3>
                    <p>You can drop a message on LinkedIn. I'll surely reply back...</p>

                </div>
            </div>
        </div>
    )
}
