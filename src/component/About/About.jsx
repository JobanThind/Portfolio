import Skills from '../Skills/Skills';

const About = () => {
    return (
        <>
            <section id="about">
                <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Hi, I'm a Software Developer Engineer</h1>
                        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Software developer with 2.5 years of experience, eager to grow, learn, and tackle real-world challenges while contributing to innovative solutions.</p>
                    </div>
                </div>
                <div className="px-4 py-8 bg-gray-100">
                    <h1 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl md:text-5xl dark:text-white">
                        ABOUT <mark className="px-2 text-white bg-indigo-600 rounded dark:bg-indigo-500">ME</mark>
                    </h1>
                    <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-4">
                        <div className="w-full lg:max-w-[calc(50%-16px)] p-6">
                            <a href="#" className="text-blue-700 dark:text-blue-300 hover:underline">
                                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Get to know me!</h2>
                            </a>
                            <p className="mb-4 leading-7 text-gray-700 dark:text-gray-400">
                                I'm a dedicated software engineer with a passion for building scalable and high-performance systems. With a strong foundation in backend development and extensive experience in fintech, I've spearheaded teams to deliver cutting-edge products and infrastructure solutions. Let's connect and innovate together! Check out some of my work in the Projects section.
                               <br /><br />
                                I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, please don't hesitate to contact me.
                            </p>
                            <a href="https://www.linkedin.com/in/joban-thind/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                LinkedIn
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M22.23 0H1.77C.79 0 0 .8 0 1.77v20.46C0 23.2.79 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.66c-1.14 0-1.87-.78-1.87-1.75 0-.99.75-1.76 1.91-1.76 1.16 0 1.87.77 1.87 1.75-.01.97-.72 1.76-1.91 1.76zm15.02 12.79h-3.56v-5.93c0-1.49-.53-2.5-1.85-2.5-1.01 0-1.61.68-1.88 1.34-.1.24-.13.57-.13.9v6.19h-3.56s.05-10.05 0-11.08h3.56v1.57c.47-.73 1.31-1.77 3.18-1.77 2.33 0 4.07 1.52 4.07 4.78v6.5h-.01z" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full lg:max-w-[calc(50%-16px)] p-6">
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
