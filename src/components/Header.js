import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className="absolute w-full h-[5rem] overflow-hidden " >
        <div className="hidden lg:flex items-center w-full h-full xl:max-w-[1250px] mx-auto px-4  " >
            {/* <p className="font-bold text-[1.5rem] cursor-pointer " >LOGO</p> */}
            <img src={logo} class="img-fluid logo" alt=""></img>

            <div className="flex-1 flex items0center justify-end space-x-10 " >
                <ul className="flex items-center space-x-6" >
                    <a className="text-sm cursor-pointer hover:text-gray-200" href='#home' >Home</a>
                    <a className="text-sm cursor-pointer hover:text-gray-200 "href='#about' >About Us</a>
                    <a className="text-sm cursor-pointer hover:text-gray-200 "href='#portfolio' >Portfolio</a>
                    <a className="text-sm cursor-pointer hover:text-gray-200 "href='#contact' >Contact</a>
                </ul>

                <button className="w-[8rem] py-2 bg-[#d80027] rounded-md " >Contact us</button>
            </div>

        </div>

        <div className="w-full h-full flex items-center px-4" >
            <AiOutlineMenu size={18} className="lg:hidden" />
        </div>
    </div>
  )
}

export default Header