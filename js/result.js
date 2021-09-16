let results = []
const loadResults = () => {
    fetch('../json/results.json')
        .then(res => res.json())
        .then(data => {
            results = data
        });
}
loadResults();


const rollInput = document.getElementById('roll')
const resultOutput = document.getElementById('result-out')
const gpa = document.getElementById('allGpa')
const total = document.getElementById('total')
const minG = document.getElementById('min')
const maxG = document.getElementById('max')
const std1 = document.getElementById('std1')
const std2 = document.getElementById('std2')
const compare1 = document.getElementById('compare1')
const compare2 = document.getElementById('compare2')
const submitStd = document.getElementById('submit-std')
const compare = document.getElementById('compare')


/* Single student gpa find */
document.getElementById("submit").addEventListener("click", function () {
    const rollNo = parseInt(rollInput.value)
    if (rollInput.value == "") {
        resultOutput.innerHTML = `<h4>Please Enter A Roll Number</h4>`
    } else {
        resultOutput.innerHTML = `<h4> Please Enter A Valid Roll Number</h4>`
    }
    const singleResult = results.find(result => result.roll == rollNo)
    resultOutput.innerHTML = `
        <h1 class="text-success fw-bold">Roll No: ${singleResult.roll}</h1> 
        <h1 class="text-success fw-bold">GPA: ${singleResult.gpa}</h1>  `
    rollInput.value = ""
})

/*  Get gpa details using min and max gpa */
document.getElementById("submit-minMax").addEventListener("click", function () {
    gpa.innerHTML = ``
    const min = parseFloat(minG.value)
    const max = parseFloat(maxG.value)
    if (minG.value == "" || maxG.value == "") {
        gpa.innerHTML = `<h3 class="text-danger">Please Enter Min And Max GPA</h3>`
    } else {
        i = 0
        for (const result of results) {
            if (parseFloat(result.gpa) >= min && parseFloat(result.gpa) <= max) {
                i++
                const div = document.createElement("div")
                div.classList.add("col")
                div.innerHTML = `<p>Roll No: ${result.roll} & GPA: ${result.gpa}</p>`
                gpa.appendChild(div) /* console.log(result.roll + result.gpa) */
            }
            if (1 > min || 4 < max) {
                gpa.innerHTML = `<h3 class="text-danger">Please enter Min and Max GPA between 1 and 4</h3>`
            }
            minG.value = ""
            maxG.value = ""
        }
        total.innerHTML = `Total Student : ${i}`
    }
})


/* compare between two student */
document.getElementById("submit-std").addEventListener("click", function () {
    const stdInput1 = parseInt(std1.value)
    const stdInput2 = parseInt(std2.value)
    for (let result of results) {
        if (result.roll != stdInput1 || result.roll != stdInput2) {
            compare.innerHTML = `<h3 class="text-danger">Please enter both Roll No correctly to compare</h3>`
        }
        if (std1.value == "" || std2.value == "") {
            compare.innerHTML = `<h3 class="text-danger">Please enter both Roll No to compare</h3>`
        }
    }
    const result1 = results.find(result => result.roll == stdInput1)
    const result2 = results.find(result => result.roll == stdInput2)
    const std1Result = parseFloat(result1.gpa)
    const std2Result = parseFloat(result2.gpa)
    if ((std1Result > 4 || std1Result < 0) && (std2Result > 4 || std2Result < 0)) {
        compare.innerHTML = `<h1>${stdInput2} and ${stdInput1} both failed in exam.</h1>`
    } else if (std2Result > 4 || std2Result < 0) {
        compare.innerHTML = `<h1>${stdInput2} is failed in exam but ${stdInput1} got ${std1Result}</h1>`
    } else if (std1Result > 4 || std1Result < 0) {
        compare.innerHTML = `<h1>${stdInput1} is failed in exam but ${stdInput2} got ${std2Result}</h1>`
    } else if (std1Result > std2Result) {
        compare.innerHTML = `<h1>${stdInput1}<small>(${std1Result})</small> done  ${((25*std1Result).toFixed(2)) - ((25*std2Result).toFixed(2))}%   beter result than ${stdInput2}<small>(${std2Result})</small></h1>`
    } else if (std1Result < std2Result) {
        compare.innerHTML = `<h1>${stdInput2}<small>(${std2Result})</small> done  ${(25*std2Result).toFixed(2) - (25*std1Result).toFixed(2)}%   beter result than ${stdInput1}<small>(${std1Result})</small></h1>`
    } else if (std1Result == std2Result) {
        compare.innerHTML = `<h1>${stdInput2}<small>(${std2Result})</small> and ${stdInput1}<small>(${std1Result})</small> both have same GPA</h1>`
    }
    std1.value = ""
    std2.value = ""

})