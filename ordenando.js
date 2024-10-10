const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, num) => {
    for (let i = 0; i < num; i++) {
        const idx1 = Math.floor(Math.random() * arr.length);
        const idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        swap(arr, minIdx, i);
    }
};

const quick_sort = (arr, low, high) => {
    if (low < high) {
        let pivotIndex = particionamento(arr, low, high);
        quick_sort(arr, low, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, high);
    }
};

const particionamento = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};
