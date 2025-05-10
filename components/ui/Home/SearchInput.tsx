import React from 'react'
import { Input } from '../input'
import { Label } from '../label'
import { Search } from 'lucide-react'

const SearchInput = () => {
  return (
    <form action="">
<div className='relative'>
<Search className='absolute left-3 top-0 h-4 w-4 translate-y-1/2 text-muted-foreground'></Search>
<Input type="text" name="search" placeholder="Search articles..." className='pl-10 w-48 focus-visible:ring-1'></Input>
</div>
    </form>
  )
}

export default SearchInput