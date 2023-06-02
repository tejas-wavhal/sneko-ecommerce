import Link from "next/link";
import NavLinks from "./NavLinks";
import { Category } from "@/types/categoryTypes";
import { API_URL, STRAPI_API_TOKEN } from "@/utils/urls";

const Header = async () => {
  const res = await fetch(`${API_URL}${`/api/categories?populate=*`}`,
    {
      cache: "force-cache",
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    }
  );
  const categories: Category = await res.json();
  return (
    <>
      <nav id="header" className="w-full py-0 bg-maincolor-100 text-black bg-white">
        <div className="w-full container mx-auto flex flex-wrap flex-row-reverse items-center justify-between mt-0 px-6 py-3">
          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          {/* @ts-expect-error Server Component */}
          <NavLinks categories={categories} />
          <div className="order-1 lg:order-2 lg:mr-28">
            <Link className="flex items-center tracking-wide no-underline hover:no-underline font-semibold text-lg " href="/">
              <img className='h-11 w-11 lg:h-14 lg:w-14' src='/Logo.svg' alt="logo" />
              <h1 className='mx-2 uppercase font-bold'>Sneko</h1>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header