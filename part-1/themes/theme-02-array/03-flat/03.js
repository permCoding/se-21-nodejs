let get_flat_arr = (array) => {
    let flat_array = []
    for (let item of array) {
        if (Array.isArray(item)) {
            flat_array.push(...get_flat_arr(item))
        }
        else {
            flat_array.push(item)
        }
    }
    return flat_array
}

let arr = [
    0,
    [10],
    666,
    [[[9]], 111],
    333
]

let flat_arr = get_flat_arr(arr).sort((a, b) => a - b)

console.table(flat_arr)
