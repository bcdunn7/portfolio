import NavItem from "./NavItem";

const Navbar = () => {

    return (
        <nav className="fixed md:static bottom-0 inset-x-0 bg-purple-100 h-14 md:h-24 border-t-2 border-purple-200 md:border-t-0 md:pt-6">
            <a href='/' className='hidden md:inline text-purple-900 text-3xl font-semibold' >Bryce Dunn</a>
            <div className="grid gap-4 grid-cols-3 grid-rows-1 md:inline h-14 ">
                <NavItem icon='fa-solid fa-home' name='Home' home='true' />
                <NavItem icon='fa-solid fa-pen-ruler' name='Projects' />
                <NavItem icon='fa-solid fa-envelope-open-text' name='Contact' />
            </div>
        </nav>
    )
}

export default Navbar;