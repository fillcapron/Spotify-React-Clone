async function getData(url: string, token: string) {
    if (url) {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        });

        const json = await res.json();

        return {
            error: !!json.error,
            status: true,
            data: json
        }

    } else {
        return {
            error: true,
            status: false,
            data: null
        }
    }
}

export async function getFeaturedPlaylists(token: string) {
    const res = await getData('https://api.spotify.com/v1/browse/featured-playlists?country=RU', token);
    return res;
}

export async function getNewReleasesPlaylist(token: string) {
    const res = await getData('https://api.spotify.com/v1/browse/new-releases?country=RU', token);
    return res;
}