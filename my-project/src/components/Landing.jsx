
export default function Landing() {
  return (
      <section className="bg-[#1c2230]">
          
          <div className="container">
              
              <div className="flex justify-center items-center flex-col pt-[200px]">
                  

                    <div className="w-[750px] max-w-full">
                                <img src ="/src/assets/images/landing-img.png" alt="landing" className="w-full h-fit"></img>
                    </div>
                            
                            <div className="text-white text-center">
                                <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">hello every body to my lading page

                                <br />
                                
                                    accessible anywhere  
                                    
                                </h1>
                                
                                <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[15px]">Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
                        dignissim elementum. Mollis tincidunt mattis hendr</p>
                  </div>
                  
                  <a href="/" className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium">Get Started</a>
                  


             </div>
      </div>
      

      <div className="w-full h-[200px]">
        <img
          src="/src/assets/images/bg-curvy-desktop.svg"
          className="w-full h-full"
        />
      </div>
    </section>
  )
}
