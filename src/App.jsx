const App = () => {
  return (
   <>

   <div id="top">
   <div id="preloader">
        <div id="loader"></div>
    </div>

    <div id="page" className="s-pagewrap">
      

    <header className="s-header">

<div className="row s-header__inner">

    <div className="s-header__block">
        <div className="s-header__logo">
            <a className="logo" href="index.html">
                {/* <img src="./src/logo.png" alt="Homepage"/> */}
            </a>
        </div>

        <a className="s-header__menu-toggle" href="#0"><span>Menu</span></a>
    </div>

    <nav className="s-header__nav">

        <ul className="s-header__menu-links">
            <li className="current"><a href="#intro" className="smoothscroll">Intro</a></li>
            <li><a href="#about" className="smoothscroll">About</a></li>
            <li><a href="#services" className="smoothscroll">Services</a></li>
            <li><a href="#folio" className="smoothscroll">Work</a></li>
            <li><a href="#footer" className="smoothscroll">Contact</a></li>
        </ul>

        <ul className="s-header__social">
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}} ><path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z"></path></svg>
                    <span className="u-screen-reader-text">Facebook</span>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"></path></svg>
                    <span className="u-screen-reader-text">Twitter</span>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z"></path></svg>
                    <span className="u-screen-reader-text">Instagram</span>
                </a>
            </li>
            <li>
                <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z"></path></svg>
                    <span className="u-screen-reader-text">Dribbble</span>
                </a>
            </li>
        </ul> 

    </nav>

</div> 

</header> 


<section id="content" className="s-content">



 <section id="intro" className="s-intro target-section">

    <div className="s-intro__bg"></div>

    <div className="row s-intro__content">

        <div className="s-intro__content-bg"></div>

        <div className="column lg-12 s-intro__content-inner">
            
            <h1 className="s-intro__content-title">
            We provide creative <br/>
            solutions to turn your <br/>
            ideas into digital reality.
            </h1>

            <div className="s-intro__content-buttons">
                <a href="#about" className="btn btn--stroke s-intro__content-btn smoothscroll">More About Us</a>
                {/* <a href="https://player.vimeo.com/video/14592941?color=f26522&title=0&byline=0&portrait=0" className="s-intro__content-video-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M7 6v12l10-6z"></path></svg>
                </a>  */}
            </div>
            
        </div> 

    </div> 
    <div className="s-intro__scroll-down">
        <a href="#about" className="smoothscroll">
            <span>Scroll Down</span>
        </a>
    </div> 

</section> 

<section id="about" className="s-about target-section">

    <div className="row section-header" data-num="01">
        <h3 className="column lg-12 section-header__pretitle pretitle text-pretitle">Who We Are</h3>
        <div className="column lg-6 stack-on-1100 section-header__primary">
            <h2 className="title text-display-1">
                Crafting Exceptional Digital Experiences
            </h2>
        </div>
        <div className="column lg-6 stack-on-1100 section-header__secondary">
            <p className="desc">
                At NPNG, were more than just a web design and development company - were pioneers of exceptional digital experiences. With a steadfast commitment to quality and service, weve assembled a dedicated team of experts who consistently exceed expectations and deliver outstanding results.
            </p>
        </div>
    </div>  

    <div className="row process-list list-block show-ctr block-lg-one-half block-tab-whole">

        <div className="column list-block__item">
            <div className="list-block__title">
                <h3 className="h5">Innovation and Collaboration</h3>
            </div>
            <div className="list-block__text">
                <p>
                    We thrive on innovation and collaboration, harnessing the latest technologies and methodologies to create digital solutions that stand out.
                </p>
            </div>
        </div> 

        <div className="column list-block__item">
            <div className="list-block__title">
                <h3 className="h5">Tailored Strategies</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Understanding market trends and user behaviors, we tailor our strategies to meet the unique needs of each client, whether its designing sleek e-commerce platforms, dynamic mobile apps, or implementing cutting-edge SEO techniques.
                </p>
            </div>
        </div> 

        <div className="column list-block__item">
            <div className="list-block__title">
                <h3 className="h5">Transparency and Communication</h3>
            </div>
            <div className="list-block__text">
                <p>
                    We prioritize clear and open dialogue, ensuring our clients are informed and involved every step of the way, fostering trust and building lasting partnerships.
                </p>
            </div>
        </div> 

        <div className="column list-block__item">
            <div className="list-block__title">
                <h3 className="h5">Community Engagement and Sustainability</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Beyond our commitment to excellence, we give back to our community and minimize our environmental impact through initiatives such as pro bono work and sustainable business practices.
                </p>
            </div>
        </div> 

    </div>
</section>

 <section id="services" className="s-services target-section">

    <div className="row section-header" data-num="02">
        <h3 className="column lg-12 section-header__pretitle text-pretitle">What We Do</h3>
        <div className="column lg-6 stack-on-1100 section-header__primary">
            <h2 className="title text-display-1">
                Tailored Services to Fuel Your Business Growth
            </h2>
        </div>
        <div className="column lg-6 stack-on-1100 section-header__secondary">
            <p className="desc">
                Discover how our personalized solutions can help your business thrive.
                From strategic planning to execution,
                were here to make your journey to success smoother and more rewarding.

            </p>
        </div>
    </div> 

     <div className="row services-list list-block block-lg-one-half block-tab-whole">

        <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z"></path></svg>
                </div>
                <h3 className="h5">MOBILE APP DEVELOPMENT</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Elevate your business with our custom mobile applications,
                    engineered for intuitive user experiences, seamless
                    functionality, and lasting impact on the go.
                </p>
            </div>
        </div> 

        <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="m21.406 6.086-9-4a1.001 1.001 0 0 0-.813 0l-9 4c-.02.009-.034.024-.054.035-.028.014-.058.023-.084.04-.022.015-.039.034-.06.05a.87.87 0 0 0-.19.194c-.02.028-.041.053-.059.081a1.119 1.119 0 0 0-.076.165c-.009.027-.023.052-.031.079A1.013 1.013 0 0 0 2 7v10c0 .396.232.753.594.914l9 4c.13.058.268.086.406.086a.997.997 0 0 0 .402-.096l.004.01 9-4A.999.999 0 0 0 22 17V7a.999.999 0 0 0-.594-.914zM12 4.095 18.538 7 12 9.905l-1.308-.581L5.463 7 12 4.095zM4 16.351V8.539l7 3.111v7.811l-7-3.11zm9 3.11V11.65l7-3.111v7.812l-7 3.11z"></path></svg>
                </div>
                <h3 className="h5">Web APP DEVELOPMENT</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Transforming your ideas into powerful web applications with
                    custom development, responsive design, and reliable support,
                    we drive your digital success at <b>NPNG TECH</b>.
                </p>
            </div>
        </div>  

        <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M6 14c-2.206 0-4 1.794-4 4s1.794 4 4 4a4.003 4.003 0 0 0 3.998-3.98H10V16h4v2.039h.004A4.002 4.002 0 0 0 18 22c2.206 0 4-1.794 4-4s-1.794-4-4-4h-2v-4h2c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4v2h-4V5.98h-.002A4.003 4.003 0 0 0 6 2C3.794 2 2 3.794 2 6s1.794 4 4 4h2v4H6zm2 4c0 1.122-.879 2-2 2s-2-.878-2-2 .879-2 2-2h2v2zm10-2c1.121 0 2 .878 2 2s-.879 2-2 2-2-.878-2-2v-2h2zM16 6c0-1.122.879-2 2-2s2 .878 2 2-.879 2-2 2h-2V6zM6 8c-1.121 0-2-.878-2-2s.879-2 2-2 2 .878 2 2v2H6zm4 2h4v4h-4v-4z"></path></svg>
                </div>
                <h3 className="h5">UI / UX Designs</h3>
            </div>
            <div className="list-block__text">
                <p>
                    From sleek and intuitive UI/UX designs to seamless user
                    experiences, we elevate your web applications to captivate
                    and engage users, ensuring optimal digital interaction.
                </p>
            </div>
        </div>  

         <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h4l-1.8 2.4 1.6 1.2 2.7-3.6h3l2.7 3.6 1.6-1.2L16 18h4c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 16V5h16l.001 11H4z"></path><path d="M6 12h4v2H6z"></path></svg>
                </div>
                <h3 className="h5">E-Commerce Application</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Empower your online business with our tailored e-commerce
                    applications, designed for seamless transactions, enhanced
                    customer experiences, and scalable growth.
                </p>
            </div>
        </div> 

        <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>
                </div>
                <h3 className="h5">POS Software</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Revolutionize your business operations with our POS software
                    solutions, delivering seamless transactions, robust
                    inventory management, and enhanced customer experiences..
                </p>
            </div>
        </div> 

         <div className="column list-block__item">
            <div className="list-block__title">
                <div className="list-block__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{width: 24, height: 24, viewBox: '0 0 24 24', fill: "#fff"}}><path d="M21 6c0-1.654-1.346-3-3-3a2.993 2.993 0 0 0-2.815 2h-6.37A2.993 2.993 0 0 0 6 3C4.346 3 3 4.346 3 6c0 1.302.839 2.401 2 2.815v6.369A2.997 2.997 0 0 0 3 18c0 1.654 1.346 3 3 3a2.993 2.993 0 0 0 2.815-2h6.369a2.994 2.994 0 0 0 2.815 2c1.654 0 3-1.346 3-3a2.997 2.997 0 0 0-2-2.816V8.816A2.996 2.996 0 0 0 21 6zm-3-1a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm-2.815 12h-6.37A2.99 2.99 0 0 0 7 15.184V8.816A2.99 2.99 0 0 0 8.815 7h6.369A2.99 2.99 0 0 0 17 8.815v6.369A2.99 2.99 0 0 0 15.185 17zM6 5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm0 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2zm12 0a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"></path></svg>
                </div>
                <h3 className="h5">Management Systems</h3>
            </div>
            <div className="list-block__text">
                <p>
                    Streamline your business operations with our comprehensive
                    management system, offering efficient workflows, insightful
                    analytics, and seamless collaboration for optimized
                    performance.
                </p>
            </div>
        </div> 

    </div> 

 </section>  



 <section id="folio" className="s-folio target-section">

    <div className="row section-header light-on-dark" data-num="03">
        <h3 className="column lg-12 section-header__pretitle text-pretitle">Recent Works</h3>
        <div className="column lg-6 stack-on-1100 section-header__primary">
            <h2 className="title text-display-1">
                Here are some of our favorite projects we have done lately. Feel free to check them out.
            </h2>
        </div>
        <div className="column lg-6 stack-on-1100 section-header__secondary">
            <p className="desc">
            Quia iusto totam facilis ut atque quidem quis maiores iure. 
            Facilis mollitia enim illo sed et totam commodi. Velit a 
            recusandae sequi consequatur est dolorum eaque.
            </p>
        </div>
    </div> 

    <div id="bricks" className="row bricks">
        <div className="column lg-12 masonry">
            <div className="bricks-wrapper">

                <div className="grid-sizer"></div>

                <article className="brick brick--double entry">
                    <a href="#modal-01" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/white_turban@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">Frontend Design</div>
                            <h4 className="entry__title">White Turban</h4>
                        </div>
                    </a>
                </article>  

                <article className="brick brick--double entry">
                    <a href="#modal-02" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/caffeine_and_tulips@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">Brand Identity</div>
                            <h4 className="entry__title">Caffeine & Tulips</h4>
                        </div>
                    </a>
                </article> 
                <article className="brick entry">
                    <a href="#modal-03" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/grayscale@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">Product Design</div>
                            <h4 className="entry__title">Grayscale</h4>
                        </div>
                    </a>
                </article>  

                 <article className="brick entry">
                    <a href="#modal-04" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/lamp@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">E-Commerce</div>
                            <h4 className="entry__title">Lamp</h4>
                        </div>
                    </a>
                </article>  
                 <article className="brick entry">
                    <a href="#modal-05" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/tropical@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">Frontend Design</div>
                            <h4 className="entry__title">Tropical</h4>
                        </div>
                    </a>
                </article>
                <article className="brick entry">
                    <a href="#modal-06" className="entry__link">
                        <div className="entry__thumb">
                            <img src="images/folio/woodcraft@2x.jpg" alt=""/>
                        </div>
                        <div className="entry__info">
                            <div className="entry__cat">E-Commerce</div>
                            <h4 className="entry__title">Woodcraft</h4>
                        </div>
                    </a>
                </article>  
             </div>  
            
        </div> 
     </div> 

    

   
     <div id="modal-01" hidden>
        <div className="modal-popup">
            <img src="images/folio/gallery/g-turban.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>White Turban</h5>
                <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                <ul className="modal-popup__cat">
                    <li>UX Research</li>
                    <li>Frontend Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div>  

    <div id="modal-02" hidden>
        <div className="modal-popup">
            <img src="images/folio/gallery/g-tulips.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>Caffeine & Tulips</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <ul className="modal-popup__cat">
                    <li>Brand Identity</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div> 
    

    <div id="modal-03" hidden>
        <div className="modal-popup">
            <img src="images/folio/gallery/g-grayscale.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>Grayscale</h5>
                <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                <ul className="modal-popup__cat">
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div> 

    <div id="modal-04" hidden>
        <div className="modal-popup">
            <img src="images/folio/gallery/g-lamp.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>The Lamp</h5>
                <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                <ul className="modal-popup__cat">
                    <li>E-Commerce</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div> 

    <div id="modal-05" hidden>
        <div className="modal-popup">

            <img src="images/folio/gallery/g-tropical.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>Tropical</h5>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                <ul className="modal-popup__cat">
                    <li>Frontend Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div> 

    <div id="modal-06" hidden>
        <div className="modal-popup">
            <img src="images/folio/gallery/g-woodcraft.jpg" alt=""/>

            <div className="modal-popup__desc">
                <h5>Woodcraft</h5>
                <p>Quisquam vel libero consequuntur autem voluptas. Qui aut vero. Omnis fugit mollitia cupiditate voluptas. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                <ul className="modal-popup__cat">
                    <li>E-Commerce</li>
                    <li>Product Design</li>
                </ul>
            </div>

            <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
        </div>
    </div> 
     <div className="s-clients row">
        <div className="column lg-12">

            <div className="row section-header">
                <div className="column lg-12">
                    <h3 className="title text-display-1">Brands we have had priveledge to work with</h3>
                </div>
            </div>  

            <div className="row clients-list block-lg-one-fourth block-md-one-third block-tab-one-half block-stack">

                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/snowflake.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/flash.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/rise.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/pinpoint.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/proline.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/vision.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/volume.svg" alt=""/>
                    </a>
                </div>
                <div className="column clients-list__item">
                    <a href="#0">
                        <img src="images/clients/hitech.svg" alt=""/>
                    </a>
                </div>

            </div> 
        </div> 
    </div> 

</section> 

<section id="testimonials" className="s-testimonials">

    <div className="row s-testimonials__content">
        <div className="column lg-12">

            <div className="swiper-container s-testimonials__slider">

                <div className="swiper-wrapper">

                    <div className="s-testimonials__slide swiper-slide">
                        <div className="s-testimonials__author">
                            <img src="images/avatars/user-02.jpg" alt="Author image" className="s-testimonials__avatar"/>
                            <cite className="s-testimonials__cite">
                                <strong>John Rockefeller</strong>
                                <span>Standard Oil Co.</span>
                            </cite>
                        </div>
                        <p>
                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.
                        Laudantium quia consequatur molestias.
                        </p>
                    </div> 
    
                    <div className="s-testimonials__slide swiper-slide">
                        <div className="s-testimonials__author">
                            <img src="images/avatars/user-03.jpg" alt="Author image" className="s-testimonials__avatar"/>
                            <cite className="s-testimonials__cite">
                                <strong>Andrew Carnegie</strong>
                                <span>Carnegie Steel Co.</span>
                            </cite>
                        </div>
                        <p>
                        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                        Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                        Quasi voluptas eius distinctio. Atque eos maxime.
                        </p>
                    </div> 
    
                    <div className="s-testimonials__slide swiper-slide">
                        <div className="s-testimonials__author">
                            <img src="images/avatars/user-01.jpg" alt="Author image" className="s-testimonials__avatar"/>
                            <cite className="s-testimonials__cite">
                                <strong>John Morgan</strong>
                                <span>JP Morgan & Co.</span>
                            </cite>
                        </div>
                        <p>
                        Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                        Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                        Voluptatem dignissimos ut.
                        </p>
                    </div> 

                    <div className="s-testimonials__slide swiper-slide">
                        <div className="s-testimonials__author">
                            <img src="images/avatars/user-06.jpg" alt="Author image" className="s-testimonials__avatar"/>
                            <cite className="s-testimonials__cite">
                                <strong>Henry Ford</strong>
                                <span>Ford Motor Co.</span>
                            </cite>
                        </div>
                        <p>
                        Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                        quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                        Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                        </p>
                    </div> 

                </div> 

                <div className="swiper-pagination"></div>

            </div> 

        </div> 
    </div> 

</section> 

</section> 

</div>
   </div>
   </>
  )
}

export default App