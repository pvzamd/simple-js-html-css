//<input type="text" @input="panValidate">

const panValidate = (e) => {
    e.target.value = e.target.value.replace(/[^\d\w]/g, "")
    if (e.target.value.length <= 5) e.target.value = e.target.value.replace(/[^a-zA-Z]/g, "")
    else if (e.target.value.length <= 9) e.target.value = e.target.value.substring(0, 5).concat(e.target.value.substring(5, 9).replace(/[^\d]/g, ""))
    else if (e.target.value.length <= 10) {
        e.target.value = e.target.value.substring(0, 9).concat(e.target.value.substring(9, e.target.value.length).replace(/[^a-zA-Z]/g, ""))
        if (e.target.value.length == 10) e.target.value = e.target.value.toUpperCase()
    }
    else if (e.target.value.length > 10) e.target.value = e.target.value.substring(0, 10)
}