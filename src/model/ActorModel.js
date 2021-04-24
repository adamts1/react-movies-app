class ActorsModel {
    constructor(firstName, lastName, year, pic, imdb ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year  = year;
        this.pic = pic;
        this.imdb = imdb;
    }

    ActorAge(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;    
    }
}

export default ActorsModel;