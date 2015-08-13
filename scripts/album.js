 // Example Album
 var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

//My created Album
 var albumDistract = {
     name: 'Easily Distracted',
     artist: "Joon 'Distract' Choi",
     label: 'Iconic Sounds',
     year: '2015',
     albumArtUrl: 'assets/images/album_covers/DISTRACT.jpg',
     songs: [
         { name: 'Good Time', length: '3:44' },
         { name: 'Heart Attack (Feat. J.Praize, Crush, Command Freaks)', length: '4:01' },
         { name: 'Right Next To You', length: '4:16'},
         { name: 'For The Record (Feat. Andrew Choi)', length: '3:56' },
         { name: 'Go! Stop! (Feat. Sophia Pae)', length: '4:04'} 
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 
 };

 var setCurrentAlbum = function(album) {
    var albumTitle = document.getElementsByClassName('album-view-title')[0];
    var albumArtist = document.getElementsByClassName('album-view-artist')[0];
    var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
    var albumImage = document.getElementsByClassName('album-cover-art')[0];
    var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
    albumTitle.firstChild.nodeValue = album.name;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    albumSongList.innerHTML = '';
    for (i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
    }
 };
 
var albums = [albumDistract, albumPicasso, albumMarconi];

window.onload = function() {
    setCurrentAlbum(albumMarconi);
    function toggleit(discography) {
        for (var i = 0; i < discography.length; i++) {
            if (discography[i] === discography[2]) {
                return document.getElementsByClassName("album-cover-art")[0].addEventListener("click", discography[0]);
            }
            else {
                return discography[i];
            }
        };
    };
};