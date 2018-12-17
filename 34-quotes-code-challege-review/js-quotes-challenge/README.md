## Hello, let's build a simple app that allows us to keep track of our favorite quotes and who said it.  

If you don't have json-server installed, run `$ npm i -g json-server`.  
If you already have it installed, run the server by: `$ json-server --watch db.json`.

### Deliverables
* Populate page with quotes with a `GET` request to `http://localhost:3000/quotes`.

* Each quotes should have the following structure:
  ```
  <li class="card">
    <blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <p>Someone famous</p>
      <p>Supporters: 0</p>
      <div>
        <button>Support</button>
        <button>Delete</button>
      </div>
    </blockquote>
  </li>
  ```
* Submitting the form creates a new quote and adds it to the list of quotes without having to refresh the page. (Whether you choose to optimistically render or not is up to you).
* Clicking the delete button should delete the respective quote from the database and remove it from the page without having to refresh.
* Clicking the support button will increase the number of supporters for this particular comment in the database and on the page without having to refresh.

### API Routes

```
GET http://localhost:3000/quotes
```

```
POST http://localhost:3000/quotes
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

data:
{
  quote: "Don't count the days, make the days count.",
  supporters: 0,
  author: "Mike Tyson"
}
```

```
PATCH http://localhost:3000/quotes/:id
headers:
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

data:
{
  supporters: 1
}
```

```
DELETE http://localhost:3000/quotes/:id
```
