export function loadFromStorage(key, defaultValue) {
    return localStorage.getItem(key) || defaultValue;
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, value);
}

export function removeFromStorage(key) {
    localStorage.removeItem(key);
}