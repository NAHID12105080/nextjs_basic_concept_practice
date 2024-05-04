import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className='relative flex h-screen w-full flex-row'>
        <Navigation />
        <section className='ml-20 flex w-full flex-col gap-5 p-10'>
          <h1 className='text-4xl text-neutral-200'>Dashboard</h1>
          <div className='h-80 w-full rounded border border-neutral-500/50 bg-neutral-800/20'>
            <section className='py-24'>
              <div className='container'>
                <h1 className='font-serif text-3xl font-bold text-slate-700'>
                  Intercepting Routes
                </h1>
              </div>
            </section>
            <div className='mt-10'>
              <Link
                href='/photos'
                className='font-semibold italic text-sky-600 underline'
              >
                Go to photos
              </Link>
            </div>
          </div>

          <div className='flex w-full flex-row gap-5'>
            <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
            <div className='h-60 w-1/2 rounded border border-neutral-500/50 bg-neutral-800/20' />
          </div>
        </section>
      </main>
    </>
  )
}
