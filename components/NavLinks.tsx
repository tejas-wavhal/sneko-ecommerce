"use client";

import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Dropdown, CustomFlowbiteTheme } from 'flowbite-react';
import { CategoryAttributes } from '@/types/categoryTypes';
import { useAppSelector } from '@/redux/hooks';
import { BsCart } from 'react-icons/bs';


const NavLinks = async ({ categories }: any) => {
  const [nav, setNav] = useState(true)
  const pathname = usePathname()



  const cart = useAppSelector((state) => state.cartReducer.cartItems);

  const customTheme: CustomFlowbiteTheme = {
    dropdown: {
      inlineWrapper: 'text-maincolor2-100 inline-block lg:hover:scale-125 transition duration-100 py-2 px-4 inline-flex',
      arrowIcon: 'mt-1 ml-1'
    }
  };

  return (
    <>
      <input onClick={() => setNav(!nav)} className="hidden" type="checkbox" id="menu-toggle" />
      <div className={`${nav ? 'hidden' : 'block'} lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1 font-semibold`} id="menu">
        <nav>
          <div className="lg:flex items-center justify-between text-base pt-4 lg:pt-0 relative">
            <div className={`${pathname == "/" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="/">Home</Link></div>
            <div className={`${pathname == "/about" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="/about">About</Link></div>
            <Dropdown
              inline
              label="Categories"
              theme={customTheme.dropdown}
            >
              <>
                {categories?.data?.map(({ attributes: c, id }: { attributes: CategoryAttributes, id: number }) => {
                  return (
                    <Link
                      key={id}
                      href={`/category/${c?.slug}`}
                    >
                      <Dropdown.Item>
                        {c?.name} <span className='ml-5'>{`(${c?.products?.data?.length})`}</span>
                      </Dropdown.Item>
                    </Link>
                  );
                }
                )}
              </>
            </Dropdown>
            <div className={`${pathname == "/contact" ? "underline underline-offset-8" : ""}`}><Link onClick={() => setNav(!nav)} className={`text-maincolor2-100 inline-block hover:scale-125 transition duration-100 py-2 px-4`} href="/contact">Contact</Link></div>
            <Link href="/cart">
              <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative" onClick={() => setNav(!nav)}>
                <BsCart className="text-[20px] pl-0" />
                <>
                  {cart?.length > 0 && (
                    <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                      {cart?.length}
                    </div>
                  )}
                </>
              </div>
            </Link>
          </div>
        </nav >
      </div >
    </>
  )
}

export default NavLinks