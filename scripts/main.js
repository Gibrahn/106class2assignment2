let nonImportantIcon = "fas fa-thumbs-up"
let importantIcon = "far fa-thumbs-up"
let isImportant = true;
let isPanelVisible =  true;
// let btnLabel = "Show"


function toggleImportance() {
  console.log("icon clicked");

  if(isImportant) {
    //switch to no imp
    $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon)
    isImportant = false;
  }
  else {
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon)
    isImportant = true;
  }
}

function toggleVisibility() {
  if(isPanelVisible) {
    $("#form").css({display: 'none'})
    $("#btnVisibility").text("Show Form")
    isPanelVisible = false
  }
  else {
    $("#form").css({display: 'block'})
    $("#btnVisibility").text("Hide Form")

    isPanelVisible = true
  }
}

function saveTask(){
    console.log("Saving Task...");

    //read values 
    var title = $("#txtTitle").val();
    var desc = $("#txtDescription").val();
    var dueDate = $("#selDueDate").val();
    var startDate = $("#selStartDate").val();
    var category = $("#selCategory").val();
    var color = $("#selColor").val();

    let task = new Task (title, desc, dueDate, startDate, category, color);

    console.log(task);
    // send the task to the server

    // display the  task
    displayTask(task);
}

function displayTask(task) {
    let syntax = `
        <div class="task">
            <div class="info">
                <h5>${task.title}</h5>
                <p>${task.desc}</p>
            </div>
            <div class="dates">
                <label>${task.startDate}</label>
                <label>${task.dueDate}</label>
            </div>
        </div>
    `;

    $("#task-container").append(syntax);
}

function test () {
    $.ajax({
        type: "GET",
        url: "https://restclass.azurewebsites.net/api/test",
        success: function(response){
                console.log("Server says:", response);
        },
        error: function(errorDetails){
            console.log(errorDetails);
        }
    })
}

function init() {
    console.log("Task manager");
  
    //load data
  
    //hook events
    $("#iImportant").click(toggleImportance);
    $("#btnTogglePanel").click(toggleVisibility)
    $("#btnSave").click(saveTask);
    
  }
window.onload = init;