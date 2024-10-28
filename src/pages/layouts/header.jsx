import React from 'react'
import { xgLogo } from '../../assets'
import { PrimaryButton } from '../components/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[180px] flex justify-center items-center'>
        <div className='lg:h-[98.81px] h-[70px] fixed z-50 rounded-[40px] lg:w-[80%] md:w-[95%] w-[90%] bg-[#0B0202]'>
            <div className='w-full h-full flex justify-between items-center md:px-8 px-4'>
                <Link to={'/'}>
                    <img src={xgLogo} alt="" className="w-[100px] h-[100px]" />
                </Link>

                <ul className='text-white text-[19.69px] hidden gap-4 md:flex'>
                    <Link to={"/about"}><li className=''>About Xogen</li></Link>
                    <Link to={"/what-we-do"}><li className=''>What we do</li></Link>
                    <Link to={"/use-cases"}><li className=''>Use Cases</li></Link>
                    <Link to={"/contact"}><li className=''>Contact us</li></Link>
                </ul>
                <div className='lg:w-[141.92px] w-[120px]  bg-[#FE0C0B] lg:text-[25px] lg:h-[63.37px] h-[40px] rounded-[5.91px]'>
                    <PrimaryButton label={"Try Xogen"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header