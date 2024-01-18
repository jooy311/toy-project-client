'use client';

import Image from "next/image";
import ProductCategory from "./products/product-category";

export function Header() { 
    return (
    <div className="flex flex-col min-h-screen">
        <div className="ga4_main_top_banner flex h-[60px] w-full cursor-pointer max-[480px]:hidden z-20 fixed top-0">
            <a target="_self" className="w-full bg-[#141313]" href="/search">
            <Image alt="중고나라 검색페이지 이동 이미지" src={'/app-download-banner.73ae73fe.png'} width="1920" height="60" decoding="async" data-nimg="1" className="object-cover h-full mx-auto" style={{ color: "transparent" }} />
            </a>
            </div>
            {/* <ProductCategory/> */}
        <header id="siteHeader" className="relative z-20 w-full h-16 sm:h-20 lg:h-36 xl:h-40 lg:mt-[60px] headerThree is-scrolling">
            <div id="header_items_wrapper" className="fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-36 xl:h-40 md:px-8 lg:px-0">
            <div className="flex items-center mx-auto px-0 lg:px-8 2xl:px-16 max-w-[1280px] h-full lg:h-20 xl:h-24 relative before:absolute before:w-screen before:bg-[#F1F1F1] before:bottom-0 box-content justify-around">
                <button aria-label="Menu" className="flex flex-col items-center justify-center flex-shrink-0 outline-none menuBtn start-0 focus:outline-none lg:hidden basis-[24px] w-[24px] h-[24px]"></button>
                <div className="flex items-center 2xl:me-12 3xl:me-20 place-self-stretch max-[1023px]:flex-auto max-[1023px]:ml-[10px]">
                <a style={{ width: "200px", height: "30px" }} className="ga4_main_top_logo max-[1023px]:!w-[97px] max-[1023px]:!h-[16px] inline-flex focus:outline-none relative" href="/">
                    <span style={{
                    boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: "1", border: "0",
                    margin: "0", padding: "0", position: "absolute", top: 0, left: "0", bottom: "0", right: "0"
                    }}>
                    <Image alt="Joonggonara" src={`/custom-logo.svg`} decoding="async" data-nimg="fill" width={200} height={30}
                        style={{ position: "absolute", top: "0", left: "0", bottom: "0", right: "0", boxSizing: "border-box", padding: "0", border: "none", margin: "auto", display: "block", minWidth:"100%", maxWidth:"100%", minHeight:"100%", maxHeight:"100%"}} />
                    </span>

                    <div className="relative hidden w-1/2 ms-7 me-7 xl:ms-9 lg:block">
                    <div className="relative flex items-center justify-between w-full rounded-md bg-borderBottom">
                    <form className="w-full" role="search">
                        <label className="flex items-center justify-between">
                        <span className="absolute top-0 left-0 flex items-center justify-center flex-shrink-0 w-12 h-full cursor-pointer md:w-14 focus:outline-none"></span>
                        <input type="search" id="search-header" className="w-full h-10 text-sm placeholder-gray-400 bg-transparent rounded-md outline-none ga4_main_top_search pe-4 ps-14 text-heading lg:text-base placeholder:text-sm" placeholder="어떤 상품을 찾으시나요? 카페상품, 앱상품 모두 검색" aria-label="search-header"/>
                        </label>
                    </form>
                    </div>
                    </div>
                </a>
                </div>
            </div>
            </div>
                </header>
        </div>
                
    );
} 