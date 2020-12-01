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
        <link href='./css/main.css?v=005' media='all' rel='stylesheet' type='text/css' />
        
        <script src='./js/jquery-2.1.1.min.js' type='text/javascript'></script>
        <script src='./js/main.js?v=003' type='text/javascript'></script>
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
        <!--
            Your Mother Fuckin' Boy

            Chr!$ @!!iC|< 8==> https://chris.computer
        -->
        <div id="wrapper">
            <div class="title-wrapper">
                <h1 class="title">2020 IS A SONG</h1>
            </div>

            <hr class="one" />

            <div class="subtitle-wrapper clear">
                <p class="subtitle">A time capsule of music that got us through 2020, as remembered by you.</p>
                <a href="mailto:2020ISASONG@GMAIL.COM">2020ISASONG@GMAIL.COM</a>
            </div>
            
            <hr class="one" />
            
            <div class="about">
                <p>Music has always been a way to feel, heal, and process.<br />In 2020, it helped us to stay connected to our humanity.</p>
                <p>What one song got you through this crazy heavy year?<br />Add yours with a memory to this audio time capsule, closing December 31.</p>
            </div>
            
            <hr class="one" />

            <div class="search-wrapper clear">
                <div class="item expand-all"><div class="expand-all-button"></div></div>
                <div class="title item"><p>SONG TITLE</p></div>
                <div class="artist item"><p>ARTIST</p></div>
                <div class="submittedby item"><p>SUBMITTED BY</p></div>
                <div class="location item"><p>LOCATION</p></div>
                <form class="searchform item">
                    <select>
                        <option selected value="all">FILE UNDER</option>
                    </select>
                </form>
                <div class="play-all item"><div class="play-all-button"></div></div>
                <div class="item playing-anim">
                    <div class="bar one"></div>
                    <div class="bar two"></div>
                    <div class="bar three"></div>
                </div>
            </div>

            <hr class="two" />

            <div class="addasong-wrapper">
                <div class="addasongbutton"><p><span>+</span> ADD YOUR SONG</p></div>
                <form class="addsongform">
                    <div class="top">
                        <input class="_title" type="text" placeholder="Song title..." />
                        <input class="_artist" type="text" placeholder="Artist..." />
                        <input class="_submittedby" type="text" placeholder="First name..." />
                        <input class="_location" type="text" placeholder="City..." />
                        <select class="_fileunder">
                            <option selected value="all">File under:</option>
                        </select>
                    </div>
                    <textarea class="_description" placeholder="Add your associated memory or feeling..."></textarea>
                    <div class="submit"><p>SUBMIT</p></div>
                </form>
                <div class="thanks">
                    <p>Thanks!</p>
                    <p>Your song will be added shortly.</p>
                </div>
            </div>

            <hr class="two" />

            <li id="song-template" class="clear" data-category="">
                <div class="clear">
                    <div class="item expand"><div class="expand-button"></div></div>
                    <div class="item song-title"><p>Butterfly</p></div>
                    <div class="item song-band"><p>311</p></div>
                    <div class="item song-user-name"><p>Chris Allick</p></div>
                    <div class="item song-user-location"><p>Los Angeles, CA</p></div>
                    <div class="item song-file-under"><p>Escapism</p></div>
                    <div class="item play"><div class="play-button"></div></div>
                    <div class="item playing-anim">
                        <div class="bar one"></div>
                        <div class="bar two"></div>
                        <div class="bar three"></div>
                    </div>
                </div>
                <div class="extra">
                    <p class="song-user-description">Blsah blah lakjsdflkjasldkfjalksdjf asdjf lkasjdf klajsdfkl jasdlkfj alksdjflk asjdflk ajsdlfk jaslkdfj alksdfj</p>
                </div>
            </li>

            <div class="audio-player-wrapper">
                <audio class="audio-player"></audio>
            </div>

            <ul class="songs">
                <!-- populated by CMS -->
            </ul>

            <hr class="one" />

            <div class="contact">
                <p>QUESTIONS, COMMENTS, DEDICATIONS: <a href="mailto:2020ISASONG@GMAIL.COM">2020ISASONG@GMAIL.COM</a></p> 
            </div>

            <hr class="one" />

            <div class="rip">
                <img src="./img/flower.svg?v=001" />
                <p>IN LOVING MEMORY</p>
            </div>
        </div>
    </body>
</html>