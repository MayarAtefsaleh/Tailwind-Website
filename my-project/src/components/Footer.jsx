/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function Footer() {
  const [contact, setContact] = useState([
    { icon: "icon-phone.svg", text: "+20121212121" },
    { icon: "icon-email.svg", text: "example@fylo.com" },
  ]);

  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src="/src/assets/images/logo.svg"
            alt="logo"
            className="w-[175px] h-[66px] object-contain"
          ></img>
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src="/src/assets/images/icon-location.svg"
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            ></img>

            <p className=" font-normal text-sm tracking-[0.8px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
              fuga.
            </p>
          </div>

          {/* comment */}

          <div>
            {contact.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div
                key={item.text}
                className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
              >
                <img
                  src={`/src/assets/images/${item.icon}`}
                  alt="icon"
                  className="w-[18px] h-[18px] object-contain"
                />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((link) => (
              // eslint-disable-next-line react/jsx-key
              <a
                href={`/${link.toLowerCase()}`}
                className="hover:text-primary transition-colors duration-200 text-base "
              >
                {link}
              </a>
            ))}
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            <a href="" className="group">
              <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                <i className="fa-brands fa-facebook-f"></i>
              </div>
            </a>
            <a href="" className="group">
              <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                <i className="fa-brands fa-whatsapp"></i>
              </div>
            </a>
            <a href="" className="group">
              <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                <i className="fa-brands fa-instagram"></i>
              </div>
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
