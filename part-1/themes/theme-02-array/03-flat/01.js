let get_flat_arr = (array) => {
    let flat_array = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            let current_array = get_flat_arr(array[i])
            for (let j = 0; j < current_array.length; j++) {
                flat_array.push(current_array[j])
            }
        }
        else {
            flat_array.push(array[i])
        }
    }
    return flat_array
}

let arr = [0, [], 666, [[[9]], 111], 333]

console.table(get_flat_arr(arr))
