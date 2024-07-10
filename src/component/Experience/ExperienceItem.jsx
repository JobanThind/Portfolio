import React from 'react';
import AmdocsLogo from '../../assets/images/juspay-logo.gif';
import QoreFiLogo from '../../assets/images/amadeus-logo.gif';

const companyLogos = {
    'Juspay': AmdocsLogo,
    'Amadeus': QoreFiLogo,
};

const ExperienceItem = ({ expItems }) => (
    <div className="space-y-4 w-full flex flex-col lg:flex-row">
        {expItems.map((item, index) => (
            <div key={index} className="w-full bg-white dark:bg-gray-800 p-6">
                <div className="flex flex-col lg:flex-row items-center pb-10">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center align-center w-full md:w-1/3 mb-4 md:mb-0">
                        <img className="w-24 h-24lg:mb-0 lg:mr-6 rounded-full shadow-lg" src={companyLogos[item.company]} alt={item.company} />
                    </a>
                    <div className="text-center lg:text-left">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.startDate} - {item.endDate}</span>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.position}</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.company}</span>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default ExperienceItem;
