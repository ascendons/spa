import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#5c4713] text-white py-10 px-6 md:px-20 font-sans">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">ASCENDONS</h2>
          <p className="text-sm leading-relaxed">
            At ASCENDONS, we’re not just building apps and websites—we’re
            building relationships. Let’s work together to create something
            extraordinary. Your success is our mission.
          </p>
        </div>

        {/*Quick Links*/}
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="" className="text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="services" className="text-white hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/*Contact Information*/}
        <div className="md:w-1/4 text-left">
          <h2 className="text-xl font-bold mb-6">Contact Information</h2>
          <p className="text-sm">
            Plot No. J-72, Vastu Villa, Mansarovar, Godadara, Gujarat - 395012
          </p>
          <p className="mt-2 text-sm">+91 7258078088</p>
          <p className="mt-2 text-sm">contact@ascendons.com</p>
        </div>

        <div className="md:w-1/4 text-left">
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/company/ascendons1/"
              className="bg-[#4b3d0f] p-2 rounded-full hover:bg-[#3a2f0c]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-[#4b3d0f] p-2 rounded-full hover:bg-[#3a2f0c]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ascendonstech/#"
              className="bg-[#4b3d0f] p-2 rounded-full hover:bg-[#3a2f0c]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/*Copyright*/}
      <div className="text-center text-sm mt-10">
        <p>
          Copyright ©2025 All rights reserved by <strong>ASCENDONS</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
