import React from 'react'
import { xgLogo } from '../../assets'
import { PrimaryButton } from '../components/button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[180px] flex justify-center items-center'>
        <div className='h-[98.81px] fixed z-50 rounded-[40px] w-[80%] bg-[#0B0202]'>
            <div className='w-full h-full flex justify-between items-center px-8'>
                <Link to={'/'}>
                    <img src={xgLogo} alt="" srcset="" />
                </Link>

                <ul className='text-white text-[19.69px] gap-4 flex'>
                    <Link to={"/about"}><li className=''>About Xogen</li></Link>
                    <Link to={"/what-we-do"}><li className=''>What we do</li></Link>
                    <Link to={"/use-cases"}><li className=''>Use Cases</li></Link>
                    <Link to={"/contact"}><li className=''>Contact us</li></Link>
                </ul>
                <div className='w-[141.92px] bg-[#FE0C0B] text-[25px] h-[63.37px] rounded-[5.91px]'>
                    <PrimaryButton label={"Try Xogen"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header