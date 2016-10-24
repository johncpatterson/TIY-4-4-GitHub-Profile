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
            <a href="https://medium.com/@johncpatterson">${result.blog}</a>...
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
            $('#repository-data-goes-here').append(`
            <div class="repo-listing-container">
                <div class="repos-name"><a href="#">${repos.name}</a></div>
                <div class="repos-forks-count"><img src="img/git-branch.svg" class="git-branch">${repos.forks}</div>
                <div class="repos-stars-count"><img src="img/star.svg" class="star">${repos.stargazers_count}</div>
                <div class="repos-language">${repos.language}</div>
                <div class="updated-at">Updated ${repos.updated_at}</div>
            </div>
            `)
        })
    }
})

$.ajax({
    url: 'https://api.github.com/users/johncpatterson/events',
    success: function(result) {
        console.log(result);
        var arrayOfEvents = result.forEach(function(events) {
            // var commitKey = events.payload.head;
            // console.log(commitKey);
            // var commitKeyLast5 = commitKey.slice(-7);
            $('#event-data-goes-here').append(`
            <div class="events-listing-container">
                <div class=""><img src="img/git-commit.svg" class="git-commit-logo">${events.created_at}</div>
                <div class="pushed-to"><a href="https://github.com/johncpatterson">${events.actor.login}</a> pushed to ${events.payload.ref} at ${events.repo.name}</div>
                <div class="profile-pic-and-commit"><img src="${events.actor.avatar_url}" class="events-profile-pic-large"><img src="${events.actor.avatar_url}" class="events-profile-pic-small">${events.payload.head}</div>
            </div>
            `)
        })
    }
})





//     $.ajax({
//     url: 'https://api.github.com/users/johncpatterson/events',
//     success: function(result) {
//         console.log(result);
//         $('#event-data-goes-here').append(`
//         ${result.name}
//     `)

//     }
// })





// end of jQuery function tag:
// });
