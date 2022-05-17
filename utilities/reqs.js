const API_KEY = process.env.API_KEY;

export default {
    fetchTrend: {
        title: 'Trending',
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchToprated: {
        title: 'Toprated',
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchHorror: {
        title: 'Horror',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchComfort: {
        title: 'Comfort',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=36`
    },
    fetchComedy: {
        title: 'Comedy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchAction: {
        title: 'Action',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchSuperhero: {
        title: 'Cowboy',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchthriller: {
        title: 'Thriller',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSad: {
        title: 'Drama',
        url:`/discover/movie?api_key=${API_KEY}&with_genres=18`
    }
}