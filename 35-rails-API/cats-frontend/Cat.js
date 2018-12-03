class Cat{
  constructor(id, name, breed, age, quote, image, hobbies){
    this.id = id,
    this.name = name,
    this.breed = breed,
    this.age = age,
    this.quote = quote,
    this.image = image
    this.hobbies = []

    hobbies.forEach(hobby => {
      this.hobbies.push(new Hobby(hobby.name, hobby.description))
    })

    Cat.all.push(this)
  }

  render(){
    let div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
      <h3>${this.name}</h3>
      <img alt=${this.name} src=${this.image} />
      <p>Breed: ${this.breed}</p>
      <p>Age: ${this.age}</p>
      <p>Bio: ${this.quote}</p>
      <ul>Hobbies: </ul>
        `
    this.hobbies.forEach(hobby => {
      div.querySelector('ul').appendChild(hobby.render())
    })

    return div
  }

}
Cat.all = []
