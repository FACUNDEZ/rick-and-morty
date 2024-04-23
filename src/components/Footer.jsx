import Link from "next/link"

function Footer() {
  return (
    <footer class="bg-[#f1f2f3]">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-16">
    <div class="sm:flex sm:items-center sm:justify-between">
      <div class="flex justify-center sm:justify-start">
     <Link href="/"><h1 className='font-black text-xl'>Rick & Morty <span className='text-blue-500'>WIKI</span></h1></Link>
      </div>

      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        Copyright &copy; Facundo Fernández 2023. All rights reserved. 
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer