import Link from 'next/link'
import React from 'react'
import { Button } from '../button'
import SearchInput from './SearchInput'
import Toggle from './Toggle'

const Navbar = () => {
  return (
    <div className='sticky top-0 z-50 w-full border border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
     <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
       <div className='flex h-16 items-center justify-between'>
        {/* Left Section */}
        <div className='flex items-center gap-8'>
<Link className='flex items-center space-x-2' href="/">
<span className='font-bold text-2xl'>
<span className='bg-gradient-to-r from-purple-600 to bg-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent'>Byte</span>
<span className='text-foreground'>Code</span></span>
</Link>
 </div>
 {/* DeskTop Section */}
 <div className='hidden md:flex items-center gap-4'>
<Link href="/articles" className='text-md font-medium text-foreground transiton-colors hover:text-fuchsia-500'>Articles</Link>
<Link href="/about" className='text-md font-medium text-foreground transiton-colors hover:text-fuchsia-500'>About</Link>
<Link href="/tutorials" className='text-md font-medium text-foreground transiton-colors hover:text-fuchsia-500'>Tutorials</Link>
<Link href="/dashboard" className='text-md font-medium text-foreground transiton-colors hover:text-fuchsia-500'>DashBoard</Link>
 </div>

 {/* Right Section */}
 <div className='flex items-center gap-4'>
 <SearchInput/>
 <Toggle/>
    <div className='hidden md:flex items-center gap-2'>
    <Button>Login</Button>
    <Button>SignUp</Button>
 </div>
 </div>
        </div> 
        </div>   
    </div>
  )
}

export default Navbar