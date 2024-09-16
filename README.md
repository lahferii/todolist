# Todolist API

yaa todolist, apa yang mau dijelaskan.

btw ini project NodeJS pertamaku, gabakal direfactor meski banyak cacatnya (malas)

## Get All Todos

- endpoint : localhost:3000/api/

- method: GET

## Create Todo

- endpoint : "localhost:3000/api/create-todo"

- method : POST

- body
  ```json
  {
    "todo": "value yang mau dibuat"
  }
  ```

## Edit Todo

- endpoint : localhost:3000/api/edit-todo

- method : PUT

- body
  ```json
  {
    "id": "id todo yang mau diedit"
  }
  ```

## Delete Todo

- endpoint : localhost:3000/api/delete-todo

- method : DELETE

- body
  ```json
  {
    "id": "id todo yang mau dihapus"
  }
  ```