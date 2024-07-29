<!-- header -->
 <header class="ease"> 
    <div class="contain">
        <div class="logo">
            <a href="index.php" style="display:block;">
                <img src="images/logo.png" alt="">
            </a>
        </div>
        <div class="toggle">
            <span></span>
        </div>
        <div id="lang" class="dropDown">
            <div class="dropBtn">
                <div class="ico">
                    <img src="images/us.svg" alt="">
                </div>
            </div>
            <ul class="dropCnt">
                <li class="active">
                    <a href="?">
                        <span>English</span> 
                        <div class="ico">
                            <img src="images/us.svg" alt="">
                        </div>
                    </a>
                </li>
                <li class="">
                    <a href="?">
                        <span>Chines</span> 
                        <div class="ico">
                            <img src="images/chi.png" alt="">
                        </div>
                    </a>
                </li>
                
            </ul>
        </div>
        <nav class="ease">
            <div nav>
                <ul id="nav">
                    <li>
                        <a class="<?=($page == 'index' || $page == '') ? 'active' : '' ?>" href="index.php">Home</a>
                    </li>
                    <li>
                        <a href="insight.php" class="<?=($page == 'about') ? 'active' : '' ?>">Insight
                        </a>
                    </li>
                    <li>
                        <a href="service.php" class="<?=($page == 'service') ? 'active' : '' ?>">Services
                        </a>
                    </li>
                    <li>
                        <a href="team.php" class="<?=($page == 'fleet') ? 'active' : '' ?>">Our Team
                        </a>
                    </li>
                    <li>
                        <a href="event.php" class="<?=($page == 'fleet') ? 'active' : '' ?>">Our Events
                        </a>
                    </li>
                </ul>
                <div id="cta">
                        <a href="contact.php" class="webBtn colorBtn" class="<?=($page == 'contact') ? 'active' : '' ?>">
                           Contact Us
                        </a>
                </div>
                <!-- <div class="langOpt">
                    <a href="?">En</a>
                    <span>/</span>
                    <a href="?">Chi</a>
                </div> -->
            </div>
        </nav>

    </div>
</header>