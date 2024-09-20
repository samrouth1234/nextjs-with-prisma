import Link from "next/link";

const Navbar = () => {
  return (
    <ul className="flex gap-5 bg-[#fad6cf] p-5 font-medium">
      <li>
        <Link href="/" className="" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="/about-us" className="" aria-current="page">About</Link>
      </li>
      <li>
        <Link href="/service" className="" aria-current="page">Services</Link>
      </li>
      <li>
        <Link href="#" className="" aria-current="page">Blog</Link>
      </li>
    </ul>
  )
}

export default Navbar;