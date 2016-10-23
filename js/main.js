// jQuery(function() {



$.ajax({
    url: 'https://api.github.com/users/johncpatterson',
    success: function successHandler(result) {
        console.log(result);
        $('#profile-picture').html(`
            <img src="${result.avatar_url}" class="profile-picture-main">
            `)
        $('#name').html(`
            ${result.name}
            `)
        $('#user-name').html(`
            ${result.login}
            `)
        $('#bio').append(`
            ${result.bio}
            `)
        $('#location').append(`
            ${result.location}
            `)
        $('#blog').append(`
            <a href="https://medium.com/@johncpatterson">${result.blog}</a>
            `)
        $('#joined').append(`
            ${result.created_at}
            `)
        $('#followers').prepend(`
            ${result.followers} <br>
            `)
        $('#starred').prepend(`
            ${result.public_repos} <br>
            `)
        $('#following').prepend(`
            ${result.following} <br>
            `)


    }
})

$.ajax({
    url: 'https://api.github.com/users/johncpatterson/repos',
    success: function(data) {
        console.log(data);
        var arrayOfRepos = data.forEach(function(repos) {
            $('#repository-data-goes-here').html(`
            
            ${repos.description}
            ${repos.full_name}
            ${repos.language}
            `)
        })
    }
})

//     $.ajax({
//     url: 'https://api.github.com/users/johncpatterson/events',
//     success: function(result) {
//         console.log(result);
//         $('#event-data-goes-here').html(`
//         ${result.name}
//     `)

//     }
// })





// end of jQuery function tag:
// });
