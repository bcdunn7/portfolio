const NavItem = ({ icon, name, home }) => {

    return (
        <div className={`h-14 grid grid-cols-1 grid-rows-2 md:inline md:p-6 text-purple-900 ${home ? 'md:hidden' : ''}`}>
            <a href={`/${home ? '' : `${name}`}`} className="text-2xl md:hidden p-2">
                <i className={icon}></i>
            </a>
            <a href={`/${name}`} className="hidden md:inline md:text-3xl">{name}</a>
        </div>
    )
}

export default NavItem;