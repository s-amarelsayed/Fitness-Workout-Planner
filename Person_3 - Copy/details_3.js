
const exercises = {
    squats: {
        name: "Squats",
        muscle: "Legs",
        equipment: "Bodyweight",
        level: "Beginner",
        image: "images/squats.jpg",
        steps: [
            "Stand with your feet shoulder-width apart.",
            "Lower your hips slowly.",
            "Keep your back straight.",
            "Stand back up."
        ],
        tips: "Keep your back straight and control the movement."
    },

    chest: {
        name: "Chest Press",
        muscle: "Chest",
        equipment: "Dumbbells",
        level: "Beginner",
        image: "images/chest.jpg",
        steps: [
            "Lie on the bench.",
            "Hold the weights near your chest.",
            "Push the weights up.",
            "Lower them slowly."
        ],
        tips: "Use a comfortable weight."
    },

    tbar: {
        name: "T-Bar Row",
        muscle: "Back",
        equipment: "T-Bar Machine",
        level: "Intermediate",
        image: "images/tbar.jpg",
        steps: [
            "Stand in a stable position.",
            "Hold the handles.",
            "Pull the weight toward your body.",
            "Lower it slowly."
        ],
        tips: "Keep your back straight."
    },

    lateral: {
        name: "Cable Lateral Raise",
        muscle: "Shoulders",
        equipment: "Cable Machine",
        level: "Beginner",
        image: "images/lateral.jpg",
        steps: [
            "Stand beside the cable machine.",
            "Hold the handle.",
            "Raise your arm to the side.",
            "Lower your arm slowly."
        ],
        tips: "Use a light weight and control your movement."
    },

    biceps: {
        name: "Biceps Curl",
        muscle: "Biceps",
        equipment: "Dumbbells",
        level: "Beginner",
        image: "images/biceps.jpg",
        steps: [
            "Stand straight with dumbbells.",
            "Keep your elbows close to your body.",
            "Curl the weights upward.",
            "Lower them slowly."
        ],
        tips: "Avoid swinging your body."
    },

    front: {
        name: "Front Shoulder Raise",
        muscle: "Shoulders",
        equipment: "Dumbbells",
        level: "Beginner",
        image: "images/front.jpg",
        steps: [
            "Stand straight with dumbbells.",
            "Keep your elbows slightly bent.",
            "Raise your arms forward.",
            "Lower them slowly."
        ],
        tips: "Avoid swinging the weights."
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "squats";
const exercise = exercises[id];

if (exercise) {
    document.getElementById("exercise-name").textContent = exercise.name;
    document.getElementById("muscle").textContent = exercise.muscle;
    document.getElementById("equipment").textContent = exercise.equipment;
    document.getElementById("level").textContent = exercise.level;
    document.getElementById("tips").textContent = exercise.tips;

    const image = document.getElementById("exercise-image");
    image.src = exercise.image;
    image.alt = exercise.name;

    const steps = document.getElementById("steps");
    steps.innerHTML = "";

    exercise.steps.forEach(function (step) {
        const li = document.createElement("li");
        li.textContent = step;
        steps.appendChild(li);
    });
}
