import Link from 'next/link'
// import Image from 'next/image'
// import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark mb-2'>
        {/* <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
            <Image src={profileImg} alt='profileImg' className='w-full h-auto rounded-full' />
        </div> */}
        <span className='font-bold text-xl md:text-3xl text-dark'>Tech<span className='text-2xl md:text-4xl text-accent'>Mumba</span></span>
    </Link>
  )
}

export default Logo