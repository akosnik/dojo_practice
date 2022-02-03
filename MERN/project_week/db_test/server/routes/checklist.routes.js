
const ChecklistController = require("../controllers/checklist.controller");

module.exports = function (app) {
  app.get("/api", ChecklistController.test);

  app.get("/api/checklists", ChecklistController.getAllChecklists);

  app.post("/api/checklists", ChecklistController.createChecklist);

  app.get("/api/checklists/:id", ChecklistController.getOneChecklist);

  app.put("/api/checklists/:id", ChecklistController.editOneChecklist);

  app.delete("/api/checklists/:id", ChecklistController.deleteOneChecklist);
};
