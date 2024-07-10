import React from 'react';
import Uwaterloo from '../../assets/images/uwaterloo.png';
import Tiet from '../../assets/images/tietpng.png';

const eduLogos = {
    'University of Waterloo': Uwaterloo,
    'Thapar Institute of Engineering and Technology': Tiet,
};

const EduItem = ({ educationItems }) => (
    <div className="space-y-4 w-full flex flex-col lg:flex-row">
        {educationItems.map((item, index) => (
            <div key={index} className="w-full bg-white dark:bg-gray-800 p-6">
                <div className="flex flex-col lg:flex-row items-center pb-10">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center align-center w-full md:w-1/3 mb-4 md:mb-0">
                        <img className="w-24 h-24lg:mb-0 lg:mr-6 rounded-full shadow-lg" src={eduLogos[item.college]} alt={item.college} />
                    </a>
                    <div className="text-center lg:text-left">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.startDate} - {item.endDate}</span>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.degree} in  {item.major}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.college}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default EduItem;
