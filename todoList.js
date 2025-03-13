const ul = document.querySelector('.ul');
const btn = document.querySelector('.btn');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = form.elements.query.value.trim();
    if (task) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');
        form.elements.query.value = "";
        checkbox.type = "checkbox";
        checkbox.defaultChecked = false;
        label.innerText = task;
        label.prepend(checkbox);
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }
        })
        const removeBtn = document.createElement('Button');
        removeBtn.innerText = 'Remove';
        li.appendChild(label);
        li.appendChild(removeBtn);
        removeBtn.onclick = () => {
            li.remove();
        }
        removeBtn.classList.add('removeBtn');
        li.classList.add('list');
        ul.classList.add('todoul');
        ul.appendChild(li);
    }
})