
const modules = import.meta.glob('./*.vue', { eager: true })

let switchLayoutList = []

for (const path in modules) {
    console.log(path)
    switchLayoutList.push(modules[path].default)
}

export default switchLayoutList
