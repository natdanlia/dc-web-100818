# Rails API
- Dynamic web pages with JS front end and Rails backend
- Single page application

### Why?
- Response with request for data with data (json)
- Manage large database (update/add rows)
- Use relationship between models

### Getting Started
`rails new --api <project_name>`

### Useful Rails Commands
- `rails g model cat`
- `rake db:migrate rake db:seed`
- `rails g controller cats`
- `rails g serializer cat`

### CORS
- Cross Origin Resource Sharing

### Serializers
- to_json(only: [:id, :name, :picture], include: [hobbies: {only: [:name, :description]}])
- Active Model Serializer

### CRUD

### Rails Lab: Ignore the part about
- `Last time out we created a PostSerializer and used it to serialize a Post to JSON.`
- [This mistake](https://github.com/learn-co-curriculum/using-to-json-ruby)

### Transition to Project Mode
- Project Pitches are any time tomorrow morning (of today if you want)
[Setting Up Your Mod 3 Project](https://github.com/learn-co-curriculum/mod3-project-week-setup-example)
