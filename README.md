![cf](http://i.imgur.com/7v5ASc8.png) 32: Combining Reducers
===

#### Documentation 
##### expense
* in this app an expense contains the following properties
  * `id` a uuid
  * `categoryID` an id that corresponds to an existing category
  * `timestamp` a date from when the category was created
  * `name` a string that is the name of the category
  * `price` a number that is the total amount of $ in the category 

##### redux
###### app reducer
* exports a reducer that holds the entire app state from `reducer/index.js`
* creates a reducer that will combine your categories reducer and expenses reducer

###### expenses reducer
* creates a category reducer in your your reducer directory
* this reducer supports the following interactions 
  * `EXPENSE_CREATE` -- stores an expense
  * `EXPENSE_UPDATE` -- updates an existing expense
  * `EXPENSE_DELETE` -- deletes an existing expense

##### Components
components and structure as per below diagram.  
``` 
App
  Provider 
    BrowserRouter
      Route / Dashboard
        CategoryForm -- for creating categories
        [CategoryItem] -- list of CategoryItems
           CategoryForm  -- for updating categories
           ExpenseForm -- for creating expenses
           [ExpenseItem]  -- list of ExpenseItems
              ExpenseForm -- for updating an expense
```
##### ExpenseItem Component 
* delete button from expense item deletes the expense from the Apps `onClick`
* displays the `name` and `price` of the component
* displays an ExpenseForm that will enable the user to update the expense in the app state

#### Test
* Tested all of action creators
* Tested each reducer used in combineReducers