import ResponseFormat from "./responseFormatter.mjs"

export class Todo {
  // array where all datas is stored
  dataTodos = []

  notFound(response){
    const ress = new ResponseFormat()
    const body = ress.error(404, "Not Found", "Page you were searching for did not exist")

    response.write(JSON.stringify(body))
    response.end()
  }
  
  getAllTodos(response){
    const ress = new ResponseFormat()
    const json = ress.success(200, "success", "Parsing Data Success", this.dataTodos)
    
    response.write(json)
    response.end()
  }

  createTodo(request, response){
    request.addListener("data", (data) => {
      const newTodo = JSON.parse(data.toString())
      this.dataTodos.push(newTodo.todo)

      const ress = new ResponseFormat()
      const json = ress.success(200, "success", "Creating Data Success", null)

      response.write(json)
      response.end()
    })
  }

  editTodo(request, response){
    request.addListener("data", (data) => {
      const ress = new ResponseFormat()
      
      const body = JSON.parse(data)
      const findData = this.dataTodos[body.id]

      if(findData){
        this.dataTodos[body.id] = body.value
        const json = ress.success(200, "OK", "Edit Data Success", null)
        response.write(json)
        response.end()
      } else {
        const json = ress.error(404, "Not Found", "Data you were searching for did not exist")
        response.write(json)
        response.end()  
      }
    })
  }

  deleteTodo(request, response){
    request.addListener("data", (data) => {
      const res = new ResponseFormat()

      const req = JSON.parse(data)
      if(this.dataTodos[req.id]){
        this.dataTodos.splice(req.id, 1)
        const json = res.error(200, "OK", "Delete Data Success", null)
        response.write(json)
        response.end()
      } else {
        const json = res.error(404, 'Not Found', "Data you were searching for did not exist") 
        response.write(json)
        response.end()
      }
    })
  }
}