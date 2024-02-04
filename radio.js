export class RadioStation {
  id;
  #title;
  #country;
  #description;
  #genre
  #sources;
  #image;

  

  // constructor
  constructor(id, title, country, description, genre, sources, image) {
      this.id = id;
      this.#title = title;
      this.#country = country;
      this.#description = description;
      this.#genre = genre;
      this.#sources = sources;
      this.#image = image;
  }

  // getters

  get_id(){
      return this.id;
  }

  get_title(){
      return this.#title;
  }

  get_country(){
      return this.#country;
  }

  get_description(){
    return this.#description;
}

  get_genre(){
    return this.#genre;
}

  get_sources(){
    return this.#sources;
}

  get_image(){
    return this.#image;
}



  // setters
  set_id(id){
      this.id = id;
  }

  set_title(title){
      this.#title = title;
  }

  set_country(country){
      this.#country = country;
  }

  set_description(description){
    this.#description = description;
}

    set_genre(genre){
    this.#genre = genre;
}   

  set_sources(sources){
    this.#sources = sources;
}

set_image(image){
    this.#image = image;
}

}


