"use client"

import ProductCard from '@/components/ProductCard';
import { CategoryProductsDatum } from '@/types/categoryProductsTypes';
import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls';
import React, { useState } from 'react'

const maxResult = 3;

const Categories = async ({ params: { slug } }: any) => {

  const [pageIndex, setPageIndex] = useState(1);

  const res = await fetch(`${API_URL}${`/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}`}`,
    {
      cache: "no-cache",
      method: "GET",
      headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
      },
    }
  );

  const categoryProducts = await res.json();

  return (
    <div className="w-full md:py-20 relative">
      <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            {slug}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {categoryProducts?.data?.map((product: CategoryProductsDatum) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>

        {categoryProducts?.meta?.pagination?.total > maxResult && (
          <div className="flex gap-3 items-center justify-center my-16 md:my-0">
            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={pageIndex === 1}
              onClick={() => setPageIndex(pageIndex - 1)}
            >
              Previous
            </button>

            <span className="font-bold">{`${pageIndex} of ${categoryProducts && categoryProducts.meta.pagination.pageCount
              }`}</span>

            <button
              className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
              disabled={
                pageIndex ===
                (categoryProducts && categoryProducts.meta.pagination.pageCount)
              }
              onClick={() => setPageIndex(pageIndex + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Categories