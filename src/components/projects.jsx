import React from 'react'

export default function Projects() {
    return (
        <div className='bg-gradient-to-l from-rose-800 to-orange-400 flex justify-center p-4'>
            <div className='grid grid-rows-1 container bg-gradient-to-br from-blue-700 to-green-400 rounded-xl p-4 text-left'>
                <div>
                    <h1 className='text-3xl underline'>My Projects</h1>
                    <br />

                    <div className='bg-white rounded-lg p-4 m-4'>
                        <h2 className='text-2xl font-bold italic mb-4'>1. iNotebook</h2>
                        <p>This is a JS project which uses <b>MERN stack</b> to create a full-stack website</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>This project includes the following key features:
                                    <li className='ml-3 mt-4'>CRUD operations on notes</li>
                                    <li className='ml-3'>Separate Accounts for managing notes of users</li>
                                    <li className='ml-3'>Maintaining privacy and security by encrypting the credentials</li>
                                </p>
                            </div>

                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeWW5Cf62RrxgI7a3OYQ4ileWPo8h0Cs6xMA&usqp=CAU" alt="iNotebook" />
                            </div>
                        </div>
                        <p className='mt-2'>The aim of the project is to create a webapp where people can create their
                            notes without any issue of being read by others. This ensures privacy and integrity of the user's data.
                            The webapp uses bcryptjs node package that takes the user's password and encrypts it into hash and adds a salt value to it to prevent it from getting breached by hackers! It also uses jsonwebtoken package which will generate an authtoken whenever the user tries to login into his account so that he doesn't have to login again by enetering credentials to make it user-friendly to use.
                        </p>

                        <p className='mt-2'>You can check out my project using this github link ---
                            <a className='text-blue-500 underline hover:text-blue-700' href="https://github.com/Aayush-1333/iNotebookApp" target='_blank' rel='noreferrer'> iNotebook</a>
                        </p>
                    </div>

                    <div className='bg-white rounded-lg p-4 m-4'>
                        <h2 className='text-2xl font-bold italic mb-4'>2. TextUtils</h2>
                        <p>This is a JS project which uses <b>ReactJS</b> to create a simple website</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p>This project includes the following key features:
                                    <li className='ml-3 mt-4'>Analyzing texts including word counts and number of characters</li>
                                    <li className='ml-3'>Applying different styles to the text</li>
                                    <li className='ml-3'>Preview screen to see the effect of styles on the text</li>
                                </p>
                            </div>

                            <div>
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAY1BMVEX///8AAADPz89jY2NnZ2fLy8svLy+bm5v39/fa2tpUVFRRUVHS0tL7+/s6Ojp2dnaBgYEjIyMTExO2trZqamqOjo4ICAhwcHAZGRm8vLwPDw/t7e2pqamfn58oKCjk5ORJSUmIaeh6AAABnklEQVR4nO3da0/iQBiG4VZBQEU87uJx9///yv1gNhGttQ6j88Rc1+cOee8UQpNJpl0HAAAAAAAA+ZbnF/13ujz67/iqasfZt2bsmlUMuW7Y0fc31TqWv5qGXFYLOW3a0ferWiHzxiEHQoQIESJEiJAvCzk+mOZkYKSytV8UMvWx+nAgpGytkNeECBEyTogQIeOECBEyTogQIeOECBEybnfH6nfRMJ8Lme2sOi0d/LX19uXHTt0v3idk8XLR3bJ08Ddu7z5/Q/YK2dkPfyycesj9w+LZ4/TbvE9It15cz55t5kUTV7RXSBIhaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEZJGSBohaYSkEdLGfHP4jqeBkKf3Lp7d3LftOB+Ytsy22lnkJWoe13rWMmRTMaT/0zBk6AddrNrxJ0KECBHy40N+zP/IquK7Yv427Oi6q+3HE07saPzUuF5NPAr+Ay2/VwAAAAAAwCT/AKXNIStr6n0YAAAAAElFTkSuQmCC" alt="iNotebook Image" />
                            </div>
                        </div>
                        <p className='mt-2'>The aim of the project is to create a webapp to use different tools to analyze and modify the text using different styling techniques. This is a simple ReactJS site to show the working pf state variables and the JS functions to stylize the user's text according to his requirements.
                        </p>

                        <p className='mt-2'>You can check out my project using this github link ---
                            <a className='text-blue-500 underline hover:text-blue-700' href="https://github.com/Aayush-1333/TextUtils-ReactJS" target='_blank' rel='noreferrer'> TextUtils</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
