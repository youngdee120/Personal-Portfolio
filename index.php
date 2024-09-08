<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="name="viewport content="width=device-width, initial-scale=1.0">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rX-UA-Compatible content="IE=edge">
    <link rel="stylesheet" href="style.css">
    <title>My portfolio</title>
    <script src="https://kit.fontawesome.com/0f8336e200.js" crossorigin="anonymous"></script>
</head>

<body>
    <div id="header">
        <div class="container">
            <nav>
                <img src="Images/LOGO3.png" class="logo">
                <ul id="sidemenu">
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <i class="fas fa-times" onclick="closemenu()"></i>
                </ul>
                <i class="fas fa-bars" onclick="openmenu()"></i>
            </nav>
            <div class="header-text">
                <p>DATA SCIENTIST</p>
                <h1>Hi, I'm <span>KUSH</span><br> From Kenya</h1>
            </div>
        </div>

    </div>
    <!-------about------->
    <div id="about">        
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="Images/about.jpeg" alt="">
                </div>
                <div class="about-col-2">
                    <h1 class="sub-title">About me</h1>
                    <p>Being all i have been has been through alot
                        of hardworking ness. You can never expect things to just
                        run smoothly without sweating.😰.
                    </p>
                    <div class="tab-titles">
                        <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                        <p class="tab-links" onclick="opentab('experience')">Experience</p>
                        <p class="tab-links" onclick="opentab('education')">Education</p>
                    </div>
                    <div class="tab-contents active-tab" id="skills">
                        <ul>
                            <li><span>Pythorn</span><br>Profficient in pythorn files</li>
                            <li><span>Web designind</span><br>Web app development</li>
                            <li><span>coding</span><br>coding in different programming languages such as java, c and R
                            </li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="experience">
                        <ul>
                            <li><span>2023-current </span><br>Doing remote jobs using pythorn</li>
                            <li><span>2022</span><br>worked as a team in research of decrease of sales in jumia</li>
                            <li><span>2020-2021</span><br>Internship in Safaricom company</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2023</span><br>South Estaern Kenya university</li>
                            <li><span>2019</span><br>maryland high school</li>
                            <li><span>2016</span><br>Visions academy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-----------services------ -->
    <div id="services">
        <div class="container"></div>
        <h1 class="sub-title">My Services</h1>
        <div class="services-list">
            <div>
                <i class="fas fa-code"></i>
                <h2>Web Design</h2>
                <p>designing all kind of webs and applications</p>
                <a href="#">Learn more</a>
            </div>
            <div>
                <i class="fas fa-crop-alt"></i>
                <h2>App Design</h2>
                <p>designing all kind of webs and applications</p>
                <a href="#">Learn more</a>
            </div>
            <div>
                <i class="fa-brands fa-python"></i>
                <h2>Coding</h2>
                <p>coding at any cost</p>
                <a href="#">Learn more</a>
            </div>

        </div>
    </div>
    <!-- ------portfolio---------- -->
    <div id="portfolio">
        <div class="container">
            <h1 class="sub-title">My Work</h1>
            <div class="work-list">
                <div class="work">
                    <img src="Images/ngota (4).jpg" alt="">
                    <div class="layer">
                        <h3>Social media Adverts</h3>
                        <p>Doing marketing in an easy way. Download the app at playstore</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="Images/ngota (6).jpg" alt="">
                    <div class="layer">
                        <h3>Gaming app</h3>
                        <p>Doing marketing in an easy way. Download the app at playstore</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
                <div class="work">
                    <img src="Images/ngota (3).jpg" alt="">
                    <div class="layer">
                        <h3>Online shopping App</h3>
                        <p>Doing marketing in an easy way. Download the app at playstore</p>
                        <a href="#"><i class="fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" class="btn">See more</a>
        </div>
    </div>
    <!-------contact----- -->
    <div id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-title">Contact me</h1>
                    <p><i class="fas fa-paper-plane"></i> deey440@gmail.com</p>
                    <p><i class="fas fa-phone-square-alt"></i> 0112650257</p>
                    <div class="social-icons">
                        <a href="https://facebook.com/profile.php?id=100066819859186"><i class="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/judas1200?s=09"><i class="fab fa-twitter"></i></a>
                        <a href="https://instagram.com/young.dee120?igshid=ZGUzMzM3NWJiOQ==n="><i class="fab fa-instagram"></i></a>
                        <a href="https://chat.whatsapp.com/GuTruzbclo1DMGlcgSZqJC"><i class="fab fa-whatsapp"></i></a>
                    </div>
                    <a href="images/demo pdf.pdf" download class="btn btn2">Download CV</a>
                </div>
                <div class="contact-right">
                    <form action="db.php" method="POST">
                        <input type="text" name="name" placeholder="Your Name" reguired>
                        <input type="email" name="email" placeholder="Your email" required>
                        <textarea name="message" rows="6" placeholder="Your messsage"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                    <span id="msg"></span>
                </div>
            </div>
        </div>
        <div class="copyright">
            <p>Copyright @ kush. Working together <i class="fas fa-heart"></i> towards a great future.</p>
        </div>
    </div>



    <script>
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
    </script>

    <script>
        var sidemen = document.getElementById("sidemenu");

        function openmenu(){
            sidemen.style.right = "0";
        }
        function closemenu(){
            sidemen.style.right = "-200px";
        }
    </script>
   <script>
 const menuIcon = document.querySelector('.fas.fa-bars');
const sideMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
  sideMenu.classList.toggle('open');
});

</script>

</body>

</html>