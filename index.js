const stringClean = (string) => {
    let finalString = ""
    let stringArray = string.split("")
    for (let i = 0; i < stringArray.length; i++) {
        if (!(stringArray[i] >= 0)) {
            finalString += stringArray[i]
        }
    }
    console.log(finalString)
    return finalString


}

stringClean("holis88")
