import React from "react";

export default function About() {
    return (
        <div className="bg-gradient-to-tr from-orange-100 to-orange-500">
            <img
                src="https://images.unsplash.com/photo-1692610365998-c628604f5d9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=2000&h=400&q=60"
                alt=""
                className=""
            />
            <div className="container grid grid-rows-10 text-left mx-auto gap-10 rounded-xl">
                <div id="intro" className="px-4 mx-4 rounded-xl row-span-1">
                    <div className="flex justify-between items-center">
                        <span className="text-5xl">Bio</span>
                        <img
                            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244363.jpg"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="my-10 rounded-full"
                        />
                    </div>
                    <p className="text-xl mb-10">
                        This is about me... I am a BTech student from DYPU Ambi. I like to
                        do coding and playing video games <br />
                        My expertise is Python and JS.
                    </p>
                </div>

                <div id="Academics" className="p-4 bg-slate-300 mx-4 rounded-xl border-4 border-blue-600 row-span-2"
                >
                    <h2 className="text-5xl">Academics</h2>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-xl underline my-2">High School</h2>
                            <h2 className="text-lg">Graduation: 2018</h2>
                            <h2 className="text-lg">School: St. Francis' College, Lucknow</h2>
                            <h2 className="text-lg">Board: ICSE Board (92.6%)</h2>
                        </div>

                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HgTxn8C_-3WMzDVOqSjxrlMzZ3Bb6zpgYA&usqp=CAU"
                                alt="school"
                                width={200}
                                className="rounded-lg mx-10 inline"
                            />
                            <img
                                src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/18/Pictures/_da0308dc-e3d9-11e7-b094-c21f82b60b0b.jpg"
                                alt="icse"
                                width={150}
                                className="inline rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-xl underline my-2">Senior Secondary School</h2>
                            <h2 className="text-lg">Graduation: 2020</h2>
                            <h2 className="text-lg">School: St. Francis' College, Lucknow</h2>
                            <h2 className="text-lg">Board: ISC Board (74.6%)</h2>
                        </div>

                        <div>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7HgTxn8C_-3WMzDVOqSjxrlMzZ3Bb6zpgYA&usqp=CAU"
                                alt="school"
                                width={200}
                                className="rounded-lg mx-10 inline"
                            />
                            <img
                                src="https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/18/Pictures/_da0308dc-e3d9-11e7-b094-c21f82b60b0b.jpg"
                                alt="icse"
                                width={150}
                                className="inline rounded-full"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-xl underline my-2">Bachelors of Technology (B.Tech.)</h2>
                            <h2 className="text-lg">Graduation: 2024</h2>
                            <h2 className="text-lg">First Year CGPA: 8.92</h2>
                            <h2 className="text-lg">Second Year CGPA: 8.64</h2>
                            <h2 className="text-lg">Third Year CGPA: 8.60</h2>
                            <h2 className="text-lg">Fourth Year CGPA: not yet completed </h2>
                        </div>

                        <div>
                            <img
                                src="https://storage.googleapis.com/ezap-prod/colleges/1185/padmashree-dr-dy-patil-vidyapeeth-navi-mumbai-logo.jpg"
                                alt="school"
                                width={200}
                                className="rounded-lg mx-10 inline"
                            />

                        </div>
                    </div>
                </div>

                <div id="Experience" className="p-4 bg-slate-300 m-4 rounded-xl border-4 border-blue-600 row-span-2"
                >
                    <h2 className="text-5xl">Experience</h2>
                    <div className="flex justify-between">
                        <div className="my-2">
                            <h2 className="text-xl underline my-2">
                                Computer Vision using Python
                            </h2>
                            <h2 className="text-lg">Pantech E-Learning</h2>
                            <h2 className="text-lg">
                                <b>Duration:</b> 1 month
                            </h2>
                            <p className="text-lg">
                                <b>Description:</b> <br />I learned about various machine
                                learning algorithms and also studied about OpenCV library to
                                perform various tasks <br />
                                such as Face recognition, noise filtering, image plane
                                separation, use of appJar and HAAR Cascade
                            </p>
                        </div>
                    </div>
                </div>

                <div id="Skills" className="p-4 bg-slate-300 m-4 rounded-xl border-4 border-blue-600 row-span-3"
                >
                    <h2 className="text-5xl">Skills</h2>
                    <div className="flex justify-between my-4">
                        <div>
                            <h2 className="text-xl underline">JavaScript</h2>
                            <h2 className="my-2 text-lg">
                                <b>Level:</b> Intermediate
                            </h2>
                            <h2>
                                I have learned all the basics including Promises, Callback
                                functions, async/await. <br /> I have also created some projects
                                using NodeJS including "PDF Merger App"
                            </h2>
                        </div>

                        <div>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png"
                                alt=""
                                width={150}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <br />

                    <div className="flex justify-between my-2">
                        <div>
                            <h2 className="text-xl underline">Python</h2>
                            <h2 className="my-2 text-lg">
                                <b>Level:</b> Intermediate
                            </h2>
                            <h2>
                                I had studied about comprehensions, lambda functions, File handling and also done <br />
                                a project using mysql connector library to create a database named "Banking Database"
                            </h2>
                        </div>

                        <div>
                            <img
                                src="https://banner2.cleanpng.com/20180412/kye/kisspng-python-programming-language-computer-programming-language-5acfdc3636bac7.8891188615235717662242.jpg"
                                alt=""
                                width={150}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <br />

                    <div className="flex justify-between my-2">
                        <div>
                            <h2 className="text-xl underline">C++</h2>
                            <h2 className="my-2 text-lg">
                                <b>Level:</b> Intermediate
                            </h2>
                            <h2>
                                I had studied about OOPS, STL and also done DSA using this language.
                            </h2>
                        </div>

                        <div>
                            <img
                                src="https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png"
                                alt=""
                                width={150}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
