function addTodo(){
    let name = document.getElementById ("todo-name");
    let content = document.getElementById("todo-content");
    let taskName = name.value.trim();
    let taskContent = content.value.trim();

    if (taskName !== "" && taskContent !== "") {
        var taskList = document.getElementById("task-list");
        var li = document.createElement("li");
        
        // Création du conteneur pour le contenu de la tâche et l'icône de poubelle
        var taskContainer = document.createElement("div");
        taskContainer.style.display = "flex";
        taskContainer.style.alignItems = "center";
        
        // Création du contenu de la tâche avec le nom et le contenu
        var taskElement = document.createElement("p");
        taskElement.textContent = taskName + ": " + taskContent;
        
        taskContainer.appendChild(taskElement);
        
        // Ajout de l'icône de poubelle pour supprimer la tâche
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash-alt";
        deleteIcon.style.marginLeft = "10px";
        deleteIcon.style.cursor = "pointer";
        deleteIcon.onclick = function() {
          li.remove();
        };
        
        taskContainer.appendChild(deleteIcon);
        
        li.appendChild(taskContainer);
        
        taskList.appendChild(li);
        

        name.value = "";
        content.value = "";
      }
}