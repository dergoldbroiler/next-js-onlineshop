'use client'

import Link from "next/link"

const Menu = ({handleMenuItemClick}:{handleMenuItemClick:(page: string) =>void}) => {
    return (
        <ul>
            <li>
                <Link href="/">
                    <span onClick={(e) => handleMenuItemClick('home')}>Home</span>
                </Link>
            </li>
            <li>
                <Link href="/products">
                    <span onClick={(e) => handleMenuItemClick('products')}>Products</span>
                </Link>
            </li>
        </ul>
    )
}

export default Menu