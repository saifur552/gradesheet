function calculateGrade() {
    // Get input values
    const subject1 = parseFloat(document.getElementById('subject1').value) || 0;
    const subject2 = parseFloat(document.getElementById('subject2').value) || 0;
    const subject3 = parseFloat(document.getElementById('subject3').value) || 0;
    const subject4 = parseFloat(document.getElementById('subject4').value) || 0;
  
    // Calculate total and average
    const total = subject1 + subject2 + subject3 + subject4;
    const average = total / 4;
  
    // Determine grade
    let grade;
    if (average >= 90) grade = 'A';
    else if (average >= 80) grade = 'B';
    else if (average >= 70) grade = 'C';
    else if (average >= 60) grade = 'D';
    else grade = 'F';
  
    // Display result
    const result = `
      <p>Total Marks: ${total}</p>
      <p>Average Marks: ${average.toFixed(2)}</p>
      <p>Grade: ${grade}</p>
    `;
    document.getElementById('result').innerHTML = result;
  }
  