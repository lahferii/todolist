export default class ResponseFormat{
  json = {
    "code": null,
    "status": null,
    "message": null,
    "body": {
      data: []
    }
  }

  success(code, status, message, data){
    this.json.code = code
    this.json.status = status
    this.json.message = message
    if(data != null){
      this.json.body.data = data.map((value, index) => {
        return {
          "id": index,
          "value": value
        }
      })
    }

    return JSON.stringify(this.json)
  }

  error(code, status, message){
    this.json.code = code
    this.json.status = status
    this.json.message = message

    return JSON.stringify(this.json)
  }
}