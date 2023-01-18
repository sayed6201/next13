'use client'

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()
    const handleSearch = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setSearch("")
        router.push(`/search/${search}`)
    }
  return (
    <form onSubmit={handleSearch}>
        <input
            type={"text"}
            value={search}
            placeholder="Search .."
            onChange={(e)=> setSearch(e.target.value)}
        />

        <button
            className='btn bg-blue-500 text-yellow-50 rounded-lg p-5 hover:bg-blue-300'
            type="submit"
        >Search</button>
    </form>
  )
}

export default Search