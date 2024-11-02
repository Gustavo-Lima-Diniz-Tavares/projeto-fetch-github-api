const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    following: '',
    followers: '',
    repositories: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    }
}

//forks, stargazers_count, watchers, language

export { user }