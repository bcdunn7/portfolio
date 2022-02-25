const Home = () => {
    return (
        <div>
            <h1 className='text-6xl md:text-8xl text-left text-purple-800 m-8 mt-36 md:mx-60'>
                <span>Hi, </span>
                <br className='md:hidden' />
                I'm Bryce
            </h1>
            <div className='text-purple-900 text-left m-8 mt-14 md:mx-60 leading-loose text-2xl md:text-3xl md:leading-loose'>
                This is my software portfolio. <br className='md:hidden' /><span className='hidden md:inline'>You can f</span><span className='inline md:hidden'>F</span>ind out <a href='#aboutMe'><span className='transition ease-in-out duration-300 hover:bg-rose-100 bg-sky-100 pb-1 px-1 rounded-sm'>more about me</span></a>, <br className='md:hidden xl:inline' />
                check out <span className='hidden md:inline'>some of </span><a href='/projects'><span className='bg-sky-100 pb-1 px-1 transition ease-in-out duration-300 hover:bg-rose-100 rounded-sm'>my projects</span></a>,<br className='md:hidden' />
                or <span className='hidden md:inline'>reach out and </span><a href='/contact'><span className='bg-sky-100 pb-1 px-1 transition ease-in-out duration-300 hover:bg-rose-100 rounded-sm'>get in touch</span></a>.
            </div>
            <div className='text-9xl mt-24 mb-32'>
                <a href='#aboutMe'>
                    <i className='fa-solid fa-arrow-down-long text-purple-600' />
                </a>
            </div>
            <h2 id='aboutMe' className='text-purple-800 text-4xl m-20 md:text-5xl'>About me</h2>
        </div>
    )
}

export default Home;