<?php
    require('env.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>2020 IS A SONG</title>
        <meta name="description" content="A time capsule of music that got us through 2020, as remembered by you.">

        <link rel="icon" type="image/png" sizes="32x32" href="./img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="./img/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./img/favicon-16x16.png">

        <meta property="og:title" content="2020 IS A SONG" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://2020isasong.com/" />
        <meta property="og:description" content="A time capsule of music that got us through 2020, as remembered by you." />
        <meta property="og:image" content="https://2020isasong.com/img/share_this.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="2020 IS A SONG">
        <meta name="twitter:description" content="A time capsule of music that got us through 2020, as remembered by you.">
        <meta name="twitter:image" content="https://2020isasong.com/img/share_this.jpg">

        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <link href='./css/reset.css' media='all' rel='stylesheet' type='text/css' />
        <link href='./css/mobile.css?v=003' media='all' rel='stylesheet' type='text/css' />
        
        <script src='./js/jquery-2.1.1.min.js' type='text/javascript'></script>
        <script src='./js/mobile.js?v=005' type='text/javascript'></script>
        <script>
            var base_url = "<?=$base_url?>";
        </script>

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XBSN7WT3JN"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XBSN7WT3JN');
        </script>
    </head>
    <body>
        <div id="wrapper">
            <div class="title-wrapper">
                <h1 class="title">2020 IS A SONG</h1>
            </div>

            <hr class="one" />

            <div class="subtitle-wrapper">
                <p class="subtitle">A time capsule of music that got us through 2020, as remembered by you.</p>
                <a href="mailto:2020ISASONG@GMAIL.COM">2020ISASONG@GMAIL.COM</a>
            </div>
            
            <hr class="one" />
            
            <div class="about">
                <p>Music has always been a way to feel, heal, and process.<br />In 2020, it helped us to stay connected to our humanity.</p>
                <p>What one song got you through this crazy heavy year?<br />Add yours with a memory to this audio time capsule, closing December 31.</p>
            </div>
            
            <hr class="one" />

            <div class="search-wrapper">
                <div class="expand-all"></div>
                <form class="searchform">
                    <select>
                        <option selected value="all">FILE UNDER</option>
                    </select>
                </form>
                <div class="play-all"></div>
                <div class="playing-anim">
                    <div class="bar one"></div>
                    <div class="bar two"></div>
                    <div class="bar three"></div>
                </div>
            </div>

            <hr class="two" />

            <div class="addasong-wrapper">
                <div class="addasongbutton"><p><span>+</span> ADD YOUR SONG</p></div>
                <form class="addsongform">
                    <input class="_title" type="text" placeholder="Song title..." />
                    <input class="_artist" type="text" placeholder="Artist..." />
                    <input class="_submittedby" type="text" placeholder="First name..." />
                    <input class="_location" type="text" placeholder="City..." />
                    <select class="_fileunder">
                        <option selected value="all">File under:</option>
                    </select>
                    <textarea class="_description" placeholder="Add your associated memory or feeling..."></textarea>
                    <div class="submit"><p>SUBMIT</p></div>
                </form>
                <div class="thanks">
                    <p>Thanks!</p>
                    <p>Your song will be added shortly.</p>
                </div>
            </div>

            <hr class="two" />

            <li id="song-template" data-category="">
                <p class="song-title">Butterfly</p>
                <p class="song-band">311</p>
                <p class="song-user-name">Chris Allick</p>
                <p class="song-user-location">Los Angeles, CA</p>
                <div class="expand">
                    <p class="song-user-description">Blsah blah lakjsdflkjasldkfjalksdjf asdjf lkasjdf klajsdfkl jasdlkfj alksdjflk asjdflk ajsdlfk jaslkdfj alksdfj</p>
                    <p class="song-file-under">Escapism</p>
                    <p class="playsong">PLAY</p>
                </div>
                <div class="toggle-song-view"></div>
            </li>

            <div class="audio-player-wrapper">
                <audio class="audio-player"></audio>
            </div>

            <ul class="songs">
                <!-- populated by CMS -->
            </ul>

            <hr class="two" />

            <div class="contact">
                <p>QUESTIONS, COMMENTS, DEDICATIONS:</p>
                <a href="mailto:2020ISASONG@GMAIL.COM">2020ISASONG@GMAIL.COM</a>
            </div>

            <hr class="one" />

            <div class="rip">
                <img src="./img/flower.svg?v=001" />
                <p>IN LOVING MEMORY</p>
            </div>
        </div>
    </body>
</html>