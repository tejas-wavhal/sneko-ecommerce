import HeroBanner from '@/components/HeroBanner'
import { Product } from '@/types/productTypes'
import ProductCard from '@/components/ProductCard'
import { STRAPI_API_TOKEN } from '@/utils/urls'
import { API_URL } from '@/utils/urls'

export default async function Home() {

  const res = await fetch(`${API_URL}${"/api/products?populate=*"}`,
    {
      cache: 'force-cache',
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    }
  );

  const products = await res.json();

  return (
    <main>
      <HeroBanner />
      <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
        <>
          <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
              Cushioning for Your Miles
            </div>
            <div className="text-md md:text-xl">
              A lightweight Nike ZoomX midsole is combined with
              increased stack heights to help provide cushioning
              during extended stretches of running.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            {products?.data?.map((product: Product) => (
              <ProductCard key={product?.id} data={product} />
            ))}
          </div>
        </>
      </div>
    </main>
  )
}
