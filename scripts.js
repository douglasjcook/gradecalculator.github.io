let assignmentCount = 1;
function addAssignment(){
    assignmentCount++;

    let assignments = document.getElementById('assignments')

    let newAssignment = document.createElement('div')
    newAssignment.classList.add('assignment')

    newAssignment.innerHTML = `
        <label>Assignment Grade:</label>
        <input type="number" class="grade" min="0" max="100" required>
        <label>Weight (%):</label>
        <input type="number" class="weight" min="0" max="100" required>
        <button type="button" class="remove-btn" onclick="removeAssignment(this)">Remove</button>
    `;

    assignments.appendChild(newAssignment);
}

function removeAssignment(button){
    if (assignmentCount > 1){
        button.parentElement.remove();
        assignmentCount--;
    }

}

function calculateFinalGrade(){
    let totalGrade = 0;
    let totalWeight = 0;

    const grades = document.querySelectorAll('.grade');
    const weights = document.querySelectorAll('.weight');
            
    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const weight = parseFloat(weights[i].value);

        if (!isNaN(grade) && !isNaN(weight)) {
            totalGrade += (grade * weight / 100);
            totalWeight += weight;
        }
    }

    if (totalWeight > 100){
        document.getElementById("result").innerText = "Total Weight Greater than 100, lol";
    } 
    else if (totalWeight < 1){
        document.getElementById("result").innerText = "Total Weight Less than 1, lol"
    }
    else {
        document.getElementById("result").innerText = "You currently have a grade of " + (Math.round(totalGrade/totalWeight * 10000) / 100) + " and " + (100 - totalWeight) + "% remaining weight!";
    }

}
