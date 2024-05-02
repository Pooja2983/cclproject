const barsContainer = document.getElementById('bars');

function generateBars(arr) {
  barsContainer.innerHTML = '';
  arr.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 3}px`;
    barsContainer.appendChild(bar);
  });
}

async function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    generateBars(arr);
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

function startSorting() {
  const array = generateRandomArray(10); // Generate an array of 10 random numbers
  selectionSort(array);
}

function generateRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.random());
  }
  return randomArray;
}

startSorting();