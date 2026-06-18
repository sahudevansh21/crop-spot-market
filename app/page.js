import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className='bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl font-bold mb-6'>CropSpot Market</h1>
          <p className='text-lg mb-8'>
            Connect farmers with local buyers through real‑time price lists and demand alerts.
          </p>
          <div className='space-x-4'>
            <Link href='/browse' className='bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition'>
              Browse Listings
            </Link>
            <Link href='/contact' className='border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition'>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='py-16 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-12'>How CropSpot Works</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Feature 1 */}
            <div className='bg-white p-6 rounded-lg shadow flex flex-col items-center text-center'>
              <div className='mb-4'>
                <svg className='h-12 w-12 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-3'>Real‑Time Price Lists</h3>
              <p className='text-gray-600'>
                See up‑to‑the‑minute prices for specialty produce in your area.
              </p>
            </div>
            {/* Feature 2 */}
            <div className='bg-white p-6 rounded-lg shadow flex flex-col items-center text-center'>
              <div className='mb-4'>
                <svg className='h-12 w-12 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 10c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-3'>Demand Alerts</h3>
              <p className='text-gray-600'>
                Get notified when buyers are looking for your crops.
              </p>
            </div>
            {/* Feature 3 */}
            <div className='bg-white p-6 rounded-lg shadow flex flex-col items-center text-center'>
              <div className='mb-4'>
                <svg className='h-12 w-12 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h18M7 15h10m-5-5a2 2 0 11-4 0 2 2 0 014 0z' />
                </svg>
              </div>
              <h3 className='text-lg font-semibold mb-3'>Local Buyer Network</h3>
              <p className='text-gray-600'>
                Build relationships with nearby restaurants, markets, and co‑ops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='bg-white py-12'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl font-bold mb-6'>Ready to get fair prices for your produce?</h2>
          <Link href='/browse' className='bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition'>
            Start Selling Today
          </Link>
        </div>
      </section>
    </>
  );
}