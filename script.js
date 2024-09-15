document.getElementById("resumeForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Type Assertions
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const phoneElement = document.getElementById("phone");
    const qualificationElement = document.getElementById("qualification");
    const experienceElement = document.getElementById("experience");
    const skillsElement = document.getElementById("skills");

    if (
        nameElement instanceof HTMLInputElement &&
        emailElement instanceof HTMLInputElement &&
        phoneElement instanceof HTMLInputElement &&
        qualificationElement instanceof HTMLTextAreaElement &&
        experienceElement instanceof HTMLTextAreaElement &&
        skillsElement instanceof HTMLTextAreaElement
    ) {
        // Accessing values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const qualification = qualificationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Display resume output
        const resumeOutput = document.getElementById("resumeOutput");
        if (resumeOutput) {
            resumeOutput.innerHTML = `
                <h2>Generated Resume</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Qualification:</strong> ${qualification}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Skills:</strong> ${skills}</p>
            `;
        }
    } else {
        console.error("One or more form elements are not correctly identified.");
    }
});
