function calc_gpa() {
    const credit = document.querySelectorAll(".credit")
    const grade = document.querySelectorAll(".grade")
    let total_credit = 0
    let total_grade = 0

    credit.forEach((credit_input, index) => {
        const tmp_credit = parseFloat(credit_input.value)
        const tmp_grade = parseFloat(grade[index].value)

        if (!isNaN(tmp_credit) && !isNaN(tmp_grade)) {
            total_credit += tmp_credit
            total_grade += tmp_credit * tmp_grade
        }
    })

    if (total_credit === 0) {
        return 0
    }

    const gpa = total_grade / total_credit
    return gpa.toFixed(2)
}

function reset_form() {
    document.querySelectorAll("input").forEach(input => input.value = "")
    document.getElementById("display").innerHTML = ""
}

function display() {
    const gpa = calc_gpa()
    document.getElementById("display").innerHTML = "GPA = " + gpa
}

document.querySelector('button[type="reset"]').addEventListener('click', reset_form)
document.querySelector('button[onclick="calc_gpa()"]').addEventListener('click', calc_gpa)