class MovieModel {
    constructor(title, director, relese, overview, popularity, pic ) {
        this.title = title;
        this.director = director;
        this.relese = relese;
        this.overview  = overview;
        this.popularity = popularity;
        this.pic = "https://image.tmdb.org/t/p/w500" +pic;
    }
}

export default MovieModel;

