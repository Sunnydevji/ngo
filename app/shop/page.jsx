import React from 'react'
import ShopHero from '../../components/shop/ShopHero'
import ShopGrid from '@/components/shop/ShopGrid'
function ShopPage() {
  return (
    <main>
      <ShopHero />
      {/* Other sections go here */}
      <ShopGrid/>
    </main>
  )
}

export default ShopPage