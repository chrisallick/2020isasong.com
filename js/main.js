/*
    todo

    - if playlist mode is activated play next after end
*/

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
    //if( _song.approved ) {
        var el = $("#song-template").clone();
        $(el).addClass("song").removeAttr("id");

        $(el).data("category", _song.fileunder );

        $(".song-title p", el).text(_song.title);
        $(".song-band p", el).text(_song.artist);
        $(".song-user-name p", el).text(_song.submittedby);
        $(".song-user-location p", el).text(_song.location);
        $(".song-user-description", el).text(_song.description);
        $(".song-file-under p", el).text(_song.fileunder);

        $(".expand", el).click(function() {
            if( $(this).hasClass("open") ) {
                $(this).removeClass("open");
                $(this).parents(".song").removeClass("open")
            } else {
                $(this).parents(".song").addClass("open")
                $(this).addClass("open");
            }
        });

        if( !_song.approved ) {
            $(el).addClass("pending");
            $(".play", el).hide();
        }

        if( _song.sourceurl && _song.approved ) {
            $(el).data("url", _song.sourceurl );

            $(".play", el).click(function() {
                playListMode = false;

                $(".audio-player")[0].pause();
                $(".song.playing").removeClass("playing");

                $(this).parents(".song").addClass("playing");

                $(".audio-player").attr("src", $(el).data("url") );
                $(".audio-player")[0].currentTime = 0;
                $(".audio-player")[0].play();
            });

            $(".playing-anim", el).click(function() {
                playListMode = false;

                $(this).parents(".song").removeClass("playing");

                $(".audio-player")[0].pause();
                $(".audio-player")[0].currentTime = 0;
            });
        }

        $(".songs").append( el );
    //}
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
                $(".expand", this).removeClass("open");
            });
        } else {
            $(this).addClass("on");
            $("ul.songs li.song").each(function(index,value) {
                $(this).addClass("open")
                $(".expand", this).addClass("open");
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

    $(".play-all-button").click(function() {
        playListMode = true;

        $(".search-wrapper").addClass("playing");

        $(".songs .song").first().removeClass("playing");

        $(".audio-player")[0].pause();
        $(".audio-player")[0].currentTime = 0;

        $(".songs .song").first().addClass("playing");

        $(".audio-player").attr("src", $(".songs .song").first().data("url") );
        $(".audio-player")[0].currentTime = 0;
        $(".audio-player")[0].play();
    });

    $(".search-wrapper .playing-anim").click(function(){
        playListMode = false;
        $(".search-wrapper").removeClass("playing");

        $(".audio-player")[0].pause();
        $(".song.playing").removeClass("playing");
    });

    $(".audio-player")[0].addEventListener('ended', function() {
        console.log("ended");

        $(".audio-player")[0].pause();
        var _el = $(".song.playing")[0];
        $(".song.playing").removeClass("playing");

        if( playListMode ) {
            if( $(_el).next().length ) {
                if( !$(_el).next().hasClass("pending") ) {
                    $(_el).next().addClass("playing");

                    $(".audio-player").attr("src", $(_el).next().data("url") );
                    $(".audio-player")[0].currentTime = 0;
                    $(".audio-player")[0].play();
                }
            } else {
                playListMode = false;
                $(".search-wrapper").removeClass("playing");
            }
        }
        
    },false);
});


