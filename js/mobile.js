$(window).load(function() {
	$("#wrapper").animate({
		opacity: 1
	});
});

function buildFiledUnder() {
    $.ajax({
        url: base_url + "/api/collections/get/fileunder",
        type: 'GET',
        cache: false,
        success: function(data) {
            for(var i = 0; i < data.entries.length; i++ ) {            
                var el = $("<option />");
                $(el).val(data.entries[i].value);
                $(el).text(data.entries[i].name);

                $(".searchform select").append(el);
                $(".addsongform select").append(el.clone());
            }
        }
    });
}

function addSong( _song ) {
    if( _song.approved ) {
        var el = $("#song-template").clone();
        $(el).addClass("song").removeAttr("id");

        $(el).data("category", _song.fileunder );

        $(".song-title", el).text(_song.title);
        $(".song-band", el).text(_song.artist);
        $(".song-user-location", el).text(_song.location);
        $(".song-user-name", el).text(_song.submittedby);
        $(".song-user-description", el).text(_song.description);
        $(".song-file-under", el).text(_song.fileunder);

        $(".toggle-song-view", el).click(function() {
            if( $(this).hasClass("open") ) {
                $(this).removeClass("open");
                $(this).parent(".song").removeClass("open")
            } else {
                $(this).parent(".song").addClass("open")
                $(this).addClass("open");
            }
        });

        if( _song.sourceurl ) {
            $(el).data("url", _song.sourceurl );
            
            $(".playsong", el).click(function() {
                playListMode = false;

                $(".search-wrapper").removeClass("playing");

                if( $(this).hasClass("playing") ) {
                    $(".playsong.playing").text("PLAY");
                    $(".playsong.playing").removeClass("playing");
                    $(".song.playing").removeClass("playing");
                    
                    $(el).removeClass("playing");
                    
                    $(".audio-player")[0].pause();
                    $(".audio-player")[0].currentTime = 0;
                } else {
                    $(".audio-player")[0].pause();
                    $(".playsong.playing").text("PLAY");
                    $(".playsong.playing").removeClass("playing");
                    $(".song.playing").removeClass("playing");
                    

                    $(this).addClass("playing");
                    $(this).text("PAUSE");

                    $(el).addClass("playing");
                    $(el).parents(".song").addClass("playing");

                    $(".audio-player").attr("src", $(el).data("url") );
                    $(".audio-player")[0].currentTime = 0;
                    $(".audio-player")[0].play();
                }
            });
        } else {
            $(el).addClass("pending");
            $(".playsong", el).hide();
        }

        $(".songs").append( el );
    }
}

function buildSongs() {
    $.ajax({
        url: base_url + "/api/collections/get/songs",
        type: 'GET',
        cache: false,
        success: function(data) {
            for( var i = 0; i < data.entries.length; i++ ) {
                addSong( data.entries[i] );
            }
        }
    });
}

function test() {
    console.log( $(".audio-player")[0].currentTime );
    console.log( $(".audio-player")[0].duration );
    $(".audio-player")[0].currentTime = $(".audio-player")[0].duration - 3;
}

var playListMode = false;
$(document).ready(function() {
    buildFiledUnder();
    buildSongs();

    $(".expand-all").click(function() {
        if( $(this).hasClass("on") ) {
            $(this).removeClass("on");
            $("ul.songs li.song").each(function(index,value) {
                $(this).removeClass("open")
                $(".toggle-song-view", this).removeClass("open");
            });
        } else {
            $(this).addClass("on");
            $("ul.songs li.song").each(function(index,value) {
                $(this).addClass("open")
                $(".toggle-song-view", this).addClass("open");
            });
        }
    });

    $(".searchform select").change(function(){
        var cat = $( "option:selected", this ).val();
        if( cat == "all" ) {
            $(".songs .song").show();
        } else {
            $(".songs .song").each(function(index,value){
                if( $(this).data("category") == cat ) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    })

    $(".addasongbutton").click(function() {
        $(this).hide();
        $(".addsongform").show();
    });

    $(".addsongform .submit").click(function() {
        $(".required").removeClass("required");

        var all_clear = true;
        
        $(".addsongform input").each(function(value,input){
            if( !$(this).val() ) {
                all_clear = false;
                $(this).addClass("required");
            }
        });

        if( $(".addsongform textarea").val() == "" ) {
            all_clear = false;
            $(".addsongform textarea").addClass("required");

        }

        if( $(".addsongform ._fileunder").val() == "all" ) {
            all_clear = false;
            $(".addsongform ._fileunder").addClass("required");
        }

        if( all_clear ) {
            $.post('./admin/addSong.php', {
                "title" : $(".addsongform ._title").val(),
                "artist" : $(".addsongform ._artist").val(),
                "submittedby": $(".addsongform ._submittedby").val(),
                "location" : $(".addsongform ._location").val(),
                "fileunder": $(".addsongform ._fileunder").val(),
                "description" : $(".addsongform ._description").val(),
            }, function(res) {
                $(".addsongform").css("opacity","0");
                $(".thanks").show();
                $(".thanks").delay(2000).animate({
                    opacity: 0
                }, 300, function(){
                    $(".thanks").hide().css("opacity","1");
                    $(".addsongform").hide().css("opacity","1");
                    $(".addasongbutton").show();
                });
            });
        }
    });

    $(".audio-player")[0].addEventListener('ended', function() {
        $(".audio-player")[0].pause();
        var _el = $(".song.playing")[0];
        var _next = $(_el).next()[0];
        
        $(".playsong.playing").text("PLAY");
        $(".playsong.playing").removeClass("playing");
        $(".songs .song.playing").removeClass("playing");

        if( playListMode ) {
            if( $(_el).next().length ) {
                if( !$(_el).next().hasClass("pending") ) {
                    $(_el).next().addClass("playing");
                    $(".playsong", _next).addClass("playing");
                    $(".playsong", _next).text("PAUSE");

                    $(".audio-player").attr("src", $(_next).data("url") );
                    $(".audio-player")[0].currentTime = 0;
                    $(".audio-player")[0].play();
                }
            } else {
                playListMode = false;
                $(".search-wrapper").removeClass("playing");
            }
        }
        
    },false);

    $(".play-all").click(function() {
        playListMode = true;

        $(".search-wrapper").addClass("playing");

        $(".audio-player")[0].pause();
        $(".playsong.playing").removeClass("playing");
        $(".playsong.playing").text("play");

        $(".songs .song").first().addClass("playing");
        $(".songs .playsong").first().addClass("playing");
        $(".songs .playsong").first().text("PAUSE");

        $(".audio-player").attr("src", $(".songs .song").first().data("url") );
        $(".audio-player")[0].currentTime = 0;
        $(".audio-player")[0].play();
    });

    $(".playing-anim").click(function() {
        playListMode = false;
        
        $(".search-wrapper").removeClass("playing");

        $(".songs .song.playing").removeClass("playing");
        $(".playsong.playing").text("PLAY");
        $(".playsong.playing").removeClass("playing");
        
        $(".audio-player")[0].pause();
        $(".audio-player")[0].currentTime = 0;
    });
});