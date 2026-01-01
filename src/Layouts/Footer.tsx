export default function Footer() {
  return (
    <footer className="bg-off-black text-white">
      <section className="w-full pt-[2rem] md:pt-[5rem] pb-[0.9375rem]">
        <div className="flex align-center justify-center max-w-[1178px] !mx-auto !px-[1rem]">
          <div className="flex w-full md:w-auto flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-2/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem] md:pb-[0.75rem]">
                <h4 className="">Platform</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Identity Assurance Platform</span>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <span>HYRP Authenticate</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Adapt</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Affirm</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>HYRP Enterprise</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Integrations</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="pb-[1.25rem] md:pb-0">
                <nav>
                  <ul>
                    <li>
                      <a href="#">
                        <span>Pricing</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-3/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem] md:pb-[0.75rem]">
                <h4>Solutions</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>PSD2 SCA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Zero Trust Authentication</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Critical Infrastructure</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Financial Services</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div>
                <nav>
                  <ul className="flex flex-col gap-2">
                    <li className="pb-[0.5rem] md:pb-0">
                      <a href="#">
                        <span>Accesibility</span>
                      </a>
                    </li>
                    <li className="pb-[1.5rem] md:pb-0">
                      <a href="#">
                        <span>Vulnerability Disclosure</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="w-full md:w-2/12 px-[0.75rem] text-left">
              <nav className="pb-[1.25rem]">
                <h4>Resources</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <nav className="pb-[2.5rem] md:pb-0 ">
                <h4>Company</h4>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#">
                      <span>Workforce Access</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>For Your Customers</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Cyber Insurance MFA</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Deploy Passkeys</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>Call Center Identity Verification</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="w-full md:w-5/12 px-[0.75rem] text-left">
              <div className="flex flex-col items-left gap-6 md:gap-12 justify-center md:ml-[15%]">
                <div className="flex flex-col gap-4">
                  {" "}
                  <h3>
                    See Why Identity Security Starts <br />
                    Here
                  </h3>
                  <a className="button">Get a demo</a>
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="!border-none !mb-0">
                    Receive Updates and News from HYPR
                  </h4>
                  <div>
                    <form className="flex flex-col gap-4">
                      <input type="text" placeholder="Enter Your Email" />
                      <button className="submit">submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full border-t-[1px] border-white">
        <div className="flex flex-col align-center !mx-auto px-[1.25rem] max-w-[1178px]">
          <div className="flex flex-row min-h-[95px] justify-between items-center">
            <div>
              <div className="logo"></div>
              <p>Copyright</p>
            </div>
            <div className="flex flex-row items-center gap-8">
              <nav>
                <ul className="flex flex-row gap-2">
                  <li>
                    <a href="#">Status</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Legal</a>
                  </li>
                </ul>
              </nav>
              <nav>
                <ul className="flex flex-row items-center gap-2">
                  <li>
                    <a href="#" aria-label="Facebook">
                      <img
                        src="/socials/facebook-svgrepo-com.svg"
                        alt="Facebook"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="Twitter">
                      <img
                        src="/socials/twitter-svgrepo-com.svg"
                        alt="Twitter"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="LinkedIn">
                      <img
                        src="/socials/linkedin-svgrepo-com.svg"
                        alt="LinkedIn"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>

                  <li>
                    <a href="#" aria-label="YouTube">
                      <img
                        src="/socials/youtube1-svgrepo-com.svg"
                        alt="YouTube"
                        className="w-6 h-6 bg-amber-50 object-contain rounded-sm"
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
