class Github {
    constructor() {
        this.client_id = "f8b3c8417b00cc8697cd";
        this.client_secret = "d585435beed06dedc4e9fcfff1dffaeea1e89938";
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const reposData = await repoResponse.json();

        return {
            profile: profileData,
            repos: reposData
        };
    }
}