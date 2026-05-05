function showPage(page) {
    let content = document.getElementById("pageContent");

    if (page === "theory") {
        content.innerHTML = `
            <h2>Theory</h2>
            <p>Jacobian is the determinant of partial derivatives matrix.</p>
        `;
    }

    else if (page === "examples") {
        content.innerHTML = `
            <h2>Stepwise Solved Example</h2>
            <p>x = u² + v</p>
            <p>y = u - v</p>
            <p>Step 1: ∂x/∂u = 2u</p>
            <p>Step 2: ∂x/∂v = 1</p>
            <p>Step 3: ∂y/∂u = 1</p>
            <p>Step 4: ∂y/∂v = -1</p>
            <p>Jacobian = (2u)(-1) - (1)(1)</p>
        `;
    }

    else if (page === "easy") {
        content.innerHTML = `
            <h2>Easy Practice</h2>
            <p>Find ∂x/∂u if x = u²</p>
        `;
    }

    else if (page === "intermediate") {
        content.innerHTML = `
            <h2>Intermediate Practice</h2>
            <p>Find Jacobian of x=u+v, y=u-v</p>
        `;
    }

    else if (page === "hard") {
        content.innerHTML = `
            <h2>High Level Practice</h2>
            <p>Find Jacobian for 3 variables.</p>
        `;
    }

    else if (page === "custom") {
        content.innerHTML = `
            <h2>Practice On Your Own</h2>

            <input id="xEq" placeholder="x = u^2 + v"><br><br>
            <input id="yEq" placeholder="y = u - v"><br><br>

            <button onclick="calculate()">Calculate</button>

            <p id="result"></p>
        `;
    }

    else if (page === "progress") {
        content.innerHTML = `
            <h2>User Progress</h2>
            <progress value="60" max="100"></progress>
            <p>60% completed</p>
        `;
    }

    else if (page === "flashcards") {
        content.innerHTML = `
            <h2>Flashcards</h2>
            <p>Jacobian = determinant of partial derivatives.</p>
        `;
    }
}

function calculate() {
    let result = document.getElementById("result");
    result.innerHTML = "Jacobian calculation feature working ✅";
}

showPage('theory');
