var songs = [{
        Name: 'Positions',
        Artist: 'Ariana Grande',
        Album: 'Positions',
        Cover: 'img/positions.png'
    },
    {
        Name: 'Forever After All',
        Artist: 'Luke Combs',
        Album: "What You See Ain't Always What You Get",
        Cover: 'img/forever-after-all.png'
    },
    {
        Name: 'Mood',
        Artist: '24kGoldn ft. Iann Dior',
        Album: 'Mood',
        Cover: 'img/mood.png'
    },
    {
        Name: 'Laugh Now Cry Later',
        Artist: 'Drake ft. Lil Durk',
        Album: 'Laugh Now Cry Later',
        Cover: 'img/laugh-now-cry-later.png'
    },
    {
        Name: 'Blinding Lights',
        Artist: 'The Weeknd',
        Album: 'After Hours',
        Cover: 'img/blinding-lights.png'
    },
    {
        Name: 'I Hope',
        Artist: 'Gaby Barrett ft. Charlie Puth',
        Album: 'Goldmine',
        Cover: 'img/i-hope.png'
    },
    {
        Name: 'WAP',
        Artist: 'Cardi B ft. Megan Thee Stallion',
        Album: 'WAP',
        Cover: 'img/wap.png'
    },
    {
        Name: 'Savage Love (Laxed - Siren Beat)',
        Artist: 'Jawsh 685 x Jason Derulo',
        Album: 'Savage Love (Laxed - Siren Beat)',
        Cover: 'img/savage-love.png'
    },
    {
        Name: 'Lemonade',
        Artist: 'Internet Money & Gunna ft. Don Toliver & NAV',
        Album: 'B4 The Storm',
        Cover: 'img/lemonade.png'
    },
    {
        Name: 'Holy',
        Artist: 'Justin Bieber ft. Chance The Rapper',
        Album: 'Holy',
        Cover: 'img/holy.png'
    },
    {
        Name: 'Rockstar',
        Artist: 'DaBaby ft. Roddy Ricch',
        Album: 'Blame It on Baby',
        Cover: 'img/rockstar.png'
    },
    {
        Name: 'Dynamite',
        Artist: 'BTS',
        Album: 'Dynamite',
        Cover: 'img/dynamite.png'
    },
    {
        Name: 'Before You Go',
        Artist: 'Lewis Capaldi',
        Album: 'Divinely Uninspired to a Hellish Extent',
        Cover: 'img/before-you-go.png'
    },
    {
        Name: 'For The Night',
        Artist: 'Pop Smoke ft. Lil Baby & DaBaby',
        Album: 'Shoot for the Stars, Aim for the Moon',
        Cover: 'img/for-the-night.png'
    },
    {
        Name: 'Watermelon Sugar',
        Artist: 'Harry Styles',
        Album: 'Fine Line',
        Cover: 'img/watermelon-sugar.png'
    },
    {
        Name: 'Go Crazy',
        Artist: 'Chris Brown & Young Thug',
        Album: 'Slime & B',
        Cover: 'img/go-crazy.png'
    },
    {
        Name: 'Said Sum',
        Artist: 'Moneybagg Yo',
        Album: 'Code Red',
        Cover: 'img/said-sum.png'
    },
    {
        Name: 'Circles',
        Artist: 'Post Malone',
        Album: "Hollywood's Bleeding",
        Cover: 'img/circles.png'
    },
    {
        Name: 'Be Like That',
        Artist: 'Kane Brown With Swae Lee & Khalid',
        Album: 'Mixtape, Vol. 1',
        Cover: 'img/be-like-that.png'
    },
    {
        Name: 'Whats Poppin',
        Artist: 'Jack Harlow ft. DaBaby, Tory Lanez & Lil Wayne',
        Album: 'Sweet Action',
        Cover: 'img/whats-poppin.png'
    }
];

var searchedSongs = [];

var searchInput = document.getElementById('searchInput');

$(function() {
    loadSongs();
});

function loadSongs() {
    var tableString = '';

    //Add to the table all the songs in the songs array
    for (i = 0; i < songs.length; i++) {
        tableString += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${songs[i].Name}</td>
                <td>${songs[i].Artist}</td>
                <td>${songs[i].Album}</td>
                <td><img src = "${songs[i].Cover}" class = "it"></td>
            </tr>
        `;
    }

    $('#songs').html(tableString);
}

function search() {
    //Clear the searchedSongs array
    searchedSongs = [];
    //Remove spaces of the search text (trim) and convert it to lower case
    var inputText = searchInput.value.trim().toLowerCase();

    //Executes the code once for each array element
    songs.forEach(song => {
        //Conver to lower case the data in the array
        var songName = song.Name.trim().toLowerCase();
        var songArtist = song.Artist.trim().toLowerCase();
        var songAlbum = song.Album.trim().toLowerCase();

        //If the term that the user is looking for is equal to the name, artist or album of the song, we add it to the searchedSongs array
        if ((songName.includes(inputText) == true) || (songArtist.includes(inputText) == true) || (songAlbum.includes(inputText) == true)) {
            searchedSongs.push(song);
        }
    });

    //Clear the table of the Search Page
    $('#songs').empty();

    var tableString = '';

    //Add to the table all the songs in the searchedSongs array
    for (i = 0; i < searchedSongs.length; i++) {
        tableString += `
            <tr>
                <th scope="row">${i + 1}</th>
                <td>${searchedSongs[i].Name}</td>
                <td>${searchedSongs[i].Artist}</td>
                <td>${searchedSongs[i].Album}</td>
                <td><img src = "${songs[i].Cover}" class = "it"></td>
            </tr>
        `;
    }

    $('#songs').html(tableString);

}
