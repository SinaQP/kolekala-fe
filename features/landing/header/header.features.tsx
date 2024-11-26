import Image from "next/image"
import { LoginBtn } from "../../../components/landing/header/LoginBtn"
import { RegisterBtn } from "../../../components/landing/header/RegisterBtn"
import { SearchBar } from "../../../components/landing/header/SearchBar"
import markazieLogo from "./../../../public/images/markazieLogo.png"
import { BeSellerBtn } from "../../../components/landing/header/beSellerBtn"
import { InstallmentPurchaseBtn } from "../../../components/landing/header/InstallmentPurchaseBtn"
import { Cart } from "../../../components/landing/header/Cart"
import { Menu } from "../../../components/landing/menu/menu"

export const Header = () => {
    return (
        <>
         <div className="_272727 flex flex-row-reverse justify-between px-12 items-center">
            <div className="flex flex-col gap-2.5">
                <LoginBtn />
                <RegisterBtn classnames={'border-[#D2AC47] _272727'} />
            </div>

            <SearchBar />
            <Image alt="markazieLogo" className="ml-[84.8px]" src={markazieLogo} />
            <div className="flex gap-2.5">
                <BeSellerBtn />
                <InstallmentPurchaseBtn />
            </div>
            <Cart />
        </div>
        <Menu />
        
        </>
       
    )
}