import logoTransparent from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 sm:py-12">
     
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logoTransparent} alt="BrightKitty" className="h-6 w-6 sm:h-[200px] sm:w-[200px]" />
            
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Services</h2>
              <ul className="text-body font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Web Development</a>
              </li>
              <li>
                <a href="#" className="hover:underline">AI & Automation</a>
              </li>
               <li className="mb-4">
                <a href="#" className="hover:underline">Data Analytics</a>
              </li>
               <li className="mb-4">
                <a href="#" className="hover:underline">Digital Marketing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Custom Software Engineering</a>
              </li>
              </ul>
            </div>
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow us</h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline ">Blog</a>
                </li>
                <li>
                <a href="#" className="hover:underline">Discord</a>
                </li>
                </ul>
            </div>
            
            <div>
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Legal</h2>
              <ul className="text-body font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          
          </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-body sm:text-center">
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/61575701647859/" className="text-body hover:text-heading">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/></svg>
                <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-body hover:text-heading ms-5">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/></svg>
                <span className="sr-only">Discord community</span>
            </a>
            <a href="" className="text-body hover:text-heading ms-5">
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/></svg>
            <span className="sr-only">Twitter page</span>
            </a>
                        
          </div>
        </div>
    
          <p className="text-xs sm:text-sm opacity-60 text-center">
          © {new Date().getFullYear()} BrightKitty. All rights reserved.
          </p>
      </div>
    </footer>
  );
};

export default Footer;
