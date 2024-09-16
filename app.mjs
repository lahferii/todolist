import http from "http"
import {Todo} from "./response/service.mjs"

const service = new Todo()

const server = http.createServer((request, response) => {
  if(request.url == "/api/" && request.method == "GET"){
    service.getAllTodos(response)
  } 
  else if(request.url == "/api/create-todo" && request.method == "POST"){
    service.createTodo(request, response)
  }
  else if(request.url == "/api/edit-todo" && request.method == "PUT"){
    service.editTodo(request, response)
  }
  else if(request.url == "/api/delete-todo" && request.method == "DELETE"){
    service.deleteTodo(request, response)
  }
  else {
    service.notFound(response)
  }
})

server.listen(3000)