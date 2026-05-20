import React from 'react'
import Link from 'next/link'

function ConfirmationPage() {
  return (
    <div className='text-center max-w-2xl mx-auto py-20'>
      <h1 className='py-10'>Thank you</h1>
      <p className='mt-6'>Your order has been placed successfully</p>
<Link href="/shop" className='w-fit mt-10 py-3 px-6 inline-block border'>
Back to Shop
</Link>

    </div>
  )
}

export default ConfirmationPage
