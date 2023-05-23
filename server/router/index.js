const Router = require("express").Router
const router = Router()


//роутер в свою очередь смотрит на эдпоинт и вызывает соответствующий метод из
// контроллера ("/users" "adduser" "/deluser" и так далее это эндпоинты)
// .get .post .delete это тип http запроса
// в круглых скобках передаются аргументы они разделяются между собой запятой
// первый аргумент эндпоинт второй какой метод вызвать или какой функционал выполнить
// переходим в контроллер
const users = require("../controllers/user_controller")
router.get("/users", users.GetUser)
router.post("/adduser",users.AddUser)
router.delete("/deluser",users.DelUser)
router.post("/upduser",users.UpdateUser)

const users = require("../controllers/pc_controller")
router.get("/pcs", users.GetPC)
router.post("/addpc",users.AddPC)
router.delete("/delpc",users.DelPC)
router.post("/updpc",users.UpdatePC)

module.exports = router