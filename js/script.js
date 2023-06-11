let addBtn = document.querySelector('#liveToastBtn')
let task = document.querySelector('#task')
let ulDOM = document.querySelector('ul#list')
let liText = li.innerHTML

function newElement () {
    if (task.value === '') {
        alert('Bir şeyler yazmalısın!');
    } else {
        let li = document.createElement('li');
        li.innerHTML = task.value;
        ulDOM.append(li);

        let span = document.createElement("span"); // Yeni bir span elemanı oluşturdum
        span.className = "close"; // Class ekledim
        span.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // İcon HTML kodunu içeren içeriği ayarladım
        li.appendChild(span); // Span'i <li> elemanına ekledim
        span.onclick = function (){
            li.remove();
        }
        li.onclick = function () {
            if (li.classList.contains("checked")){
                li.remove()
            } else {
            li.className = "checked"; 
            }
        }
    }
    
   task.value = ''
   saveData()
}

function saveData () {
    localStorage.setItem("data", task.innerHTML);
}