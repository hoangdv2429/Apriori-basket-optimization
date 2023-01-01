function getRate(input, output, support, confidence) {
    const allItem = [...input, ...output]
    const countInput = dataList.filter((item) => {
        for (let i = 0; i < input.length; i++) {
            const isIncludeThisInput = item.includes(input[i])
            if (isIncludeThisInput === false) {
                return false
            }
        }
        return true
    }).length

    const countOutput = dataList.filter((item) => {
        for (let i = 0; i < allItem.length; i++) {
            const isIncludeThisInput = item.includes(allItem[i])
            if (isIncludeThisInput === false) {
                return false
            }
        }
        return true
    }).length

    console.log("###### ", input, output)
    console.log("rate: ", ((countOutput * 100) / countInput).toFixed(2), "%")
    console.log("support: ", support)
    console.log("confidence: ", confidence)
}


getRate(["mineral water", "spaghetti"], ["ground beef"], 0.017, 0.286)
getRate(["ground beef"], ["mineral water", "spaghetti"], 0.017, 0.174)
getRate(["french fries"], ["spaghetti"], 0.028, 0.161)