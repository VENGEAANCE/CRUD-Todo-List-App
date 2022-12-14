# Fullstack CRUD Todo List App
ADD, EDIT, AND DELETE TASKS


**Link to project:** https://crud-todolist-app.herokuapp.com/

![alt text](https://github.com/VENGEAANCE/CRUD-Todo-List-App/blob/main/todo-list.png)

## Tech Used:

- HTML
- CSS
- JavaScript
- Express.js
- Node.js
- Mongodb

Started with installing my packages, setup my modules by requiring each one. Added middleware to help interpret things such as rendering ejs files for the view. Connected database via Mongodb to store documents, such as tasks added by the user to be edited or deleted. Added models to build schemas provided by mongoose to set requirements for the text inputs. Setup the routes such as root route to render.ejs and data from mongoose and input boxes for deletion addition and editing. Setup Post method, so users can add data. Setup update method, so users can edit data. Setup delete method, so users can delete data, all via mongoose. Finally styled form with css.

## Optimizations
*Refactored code using MVC architecture*
*pending: updating view with react*


## Lessons Learned:
.env file hides confidential information such as MongoURI so documents cannot be accessed.

Model, View, Controller (MVC) helps us structure our code by breaking it into pieces, resulting in cleaner and more efficient code. Also, when working collaboratively, other engineers can make changes without breaking the code entirely, resulting in easier debugging.


## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Storybook:** https://github.com/VENGEAANCE/Storybooks-App
