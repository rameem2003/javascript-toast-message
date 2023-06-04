const buttons = document.querySelectorAll(".btns .btn");
const notifications = document.querySelector(".notification")


const details = {
    success : {
        icon : "fa-sharp fa-solid fa-circle-check",
        msg : "This is a success toast",
    },

    error : {
        icon : "fa-solid fa-circle-xmark",
        msg : "This is a error toast",
    },

    warning : {
        icon : "fa-solid fa-triangle-exclamation",
        msg : "This is a warning toast",
    },

    info : {
        icon : "fa-solid fa-circle-info",
        msg : "This is a info toast",
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500); 
}

const createToast = (id) => {

    const { icon, msg } = details[id];

    console.log(id);
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="msg">
                        <i class="${icon}"></i>
                        <span>${msg}</span>
                        </div>
                    <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`
    notifications.appendChild(toast);

    setTimeout(() => removeToast(toast), 5000);
}


buttons.forEach(btn => {
    btn.addEventListener("click", () =>  createToast(btn.id));
})