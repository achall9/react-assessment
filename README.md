## React Assessement

Build a simple multiple route system with a list and a detail component to show detail using mock data with the following mock API (Use your creativity):

Here's the :

Add a service that makes the following HTTP GET requests
1. https://jsonplaceholder.typicode.com/todos

Returns: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]

- Clicking on item makes the 2nd request (pass in ID)

2. https://jsonplaceholder.typicode.com/todos/1

- Make use of that service in new view
- Display the title and completed status as a list
- Add CSS class to differentiate between completed status
  •	Add HTML navigation bar to route to each view
  •	Use Redux for state management
  •	Use Tests
  •	Use Hooks
  •	Add a user login form (just the user name)
  •	Save user name to session storage
  •	Create your GIT public repos and leave a commit history
