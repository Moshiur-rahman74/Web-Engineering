// Get elements
const addBtn = document.getElementById('addBtn');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

// Add new item
addBtn.addEventListener('click', () => {
  const itemText = itemInput.value.trim();

  if (itemText === '') {
    alert('Please enter an item!');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = itemText;

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  // Append remove button to list item
  li.appendChild(removeBtn);
  itemList.appendChild(li);

  // Clear input
  itemInput.value = '';

  // Remove item when button clicked
  removeBtn.addEventListener('click', () => {
    li.remove();
  });
});
