const projectStatus = {
  PENDING: {
    description: "Pending Execution",
  },
  SUCCESS: {
    description: "Executed Successfully",
  },
  FAILURE: {
    description: "Execution Failed",
  },
};

class ProjectIdea {
  status = projectStatus.PENDING;

  constructor(title, description) {
    this.title = title;
    this.description = description;
  }
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(idea) {
    this.ideas.push(idea);
  }

  unpin(idea) {
    const ideasLocation = this.ideas.indexOf(idea);
    if (ideasLocation !== -1) {
      this.ideas.splice(ideasLocation, 1);
    }
  }

  count() {
    return this.ideas.length;
  }

  formatToString() {
    let ideaString = "";
    ideaString += `${this.title} has ${this.count()} idea(s)\n`;
    for (let idea of this.ideas) {
      ideaString += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    }
    return ideaString;
  }
}

const newIdeaHome = new ProjectIdea(
  "Smart Home System",
  "An integrated system to control lighting, temperature, and security devices remotely.",
);
const newIdeaWeather = new ProjectIdea(
  "Smart Weather Dashboard",
  "An integrated system to check weather.",
);
const newIdeaHumidity = new ProjectIdea(
  "Smart Humidity Detector",
  "An integrated system to check humidity.",
);
const techProjects = new ProjectIdeaBoard("Tech Projects Board");
techProjects.pin(newIdeaHome);
techProjects.pin(newIdeaWeather);
techProjects.pin(newIdeaHumidity);
techProjects.unpin(newIdeaHumidity);
newIdeaHome.updateProjectStatus(projectStatus.SUCCESS);
console.log(techProjects.formatToString());
