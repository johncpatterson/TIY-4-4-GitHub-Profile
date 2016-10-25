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
            ${moment(result.created_at).format("MMMM Do YYYY")}
            `)
        $('#followers').prepend(`
            <span class="followers">${result.followers}</span> <br>
            `)
        $('#starred').prepend(`
            <span class="starred">${result.public_repos}</span> <br>
            `)
        $('#following').prepend(`
            <span class="following">${result.following}</span> <br>
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
                <div class="updated-at">Updated ${moment(repos.updated_at).fromNow()}</div>
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
            // var string = events.payload.ref;
            // var array = string.split('/');
            // var repoName = array[2];
            // console.log(repoName);
            if (events.type === "PushEvent") {
                var commitKey = events.payload.head;
                var commitKeyLast7 = commitKey.substr(0, 7);
                console.log(commitKeyLast7);
                $('#event-data-goes-here').append(`
            <div class="events-listing-container">
                <div class=""><img src="img/git-commit.svg" class="git-commit-logo">${moment(events.created_at).fromNow()}</div>
                <div class="pushed-to"><a href="https://github.com/johncpatterson">${events.actor.login}</a> pushed to ${events.payload.ref} at <a href="https://github.com/johncpatterson/">${events.repo.name}</a></div>
                <div class="profile-pic-and-commit"><img src="${events.actor.avatar_url}" class="events-profile-pic-large"><img src="${events.actor.avatar_url}" class="events-profile-pic-small">${commitKeyLast7}</div>
            </div>
            `)
            }
        })
    }
})
