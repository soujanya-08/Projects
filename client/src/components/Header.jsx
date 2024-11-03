import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
function Header() {
    const path = useLocation().pathname;
    return (
        <Navbar className='border-b-2'>
            <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white">
                <span className='px-2 py-1 bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-500 text-white rounded'>SVT's</span>
                Blog
            </Link>
            <form >
                <TextInput type='text' placeholder='Search...'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button className='w-12 h-10 lg:hidden' color='gray' pill>
                <AiOutlineSearch />
            </Button>
            <div className='flex gap-2 md:order-2'>
                <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
                    <FaMoon />
                </Button>
                <Link to='/sign-in'>
                    <Button gradientDuoTone='purpleToBlue' outline>
                        Sign In
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === '/'} as={Link} to="/">Home</Navbar.Link>
                <Navbar.Link active={path === '/about'} as={Link} to="/about">About</Navbar.Link>
                <Navbar.Link active={path === '/projects'} as={Link} to="/projects">Projects</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;