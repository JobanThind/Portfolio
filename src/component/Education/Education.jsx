import { useState } from "react";
import { education } from "../../data/data";
import EduItem from "./EduItem";
import './Education.css';

const Education = () => {
    const [educationItems, setEducationItems] = useState(education);

    return (
        <>
            <section id='education' className=" space-x-4 px-4 py-8 bg-white">
                <h1 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl md:text-5xl dark:text-white">
                EDUCATIONAL <mark className="px-2 text-white bg-indigo-600 rounded dark:bg-indigo-500">BACKGROUND</mark>
                </h1>
                <div className='p-6 '>
                    <EduItem educationItems={educationItems}></EduItem>
                </div>
            </section>
        </>
    )
}

export default Education;