import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <div className='bg-[#120B48] text-[#fff]  py-20'>
      <div className='w-[70rem] mx-auto flex items-center justify-between'>
        <div>
        <Link href="#" className="flex items-center gap-4">
            <Image width={137} height={40} src='/assets/logo2.png' alt='logo'/>
        </Link>
        </div>
        <div>
            <h3 className="font-semibold">Menu</h3>
            <ul className="flex flex-col gap-7 mt-5">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Converter</Link></li>
                <li><Link href="#">How it Works</Link></li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold">About</h3>
            <ul className="flex flex-col gap-7  mt-5">
                <li><Link href="#">About</Link></li>
                <li><Link href="#">Contact Us</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
            </ul>
        </div>
        <div>
            <h3 className="font-semibold">Screen Record</h3>
            <ul className="flex flex-col gap-7 mt-5">
                <li><Link href="#">Browser Window</Link></li>
                <li><Link href="#">Desktop</Link></li>
                <li><Link href="#">Application</Link></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer