const poll = new Map();

function addOption (option) {

  if (!option || option.trim() === "") {
  return `Option cannot be empty.`;
  }

  if (!poll.has(option)) {
    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`
  } else {
    return `Option "${option}" already exists.`
  }
}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const votersSet = poll.get(option);

  if (votersSet.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  } else {
    votersSet.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
  }
}

addOption("Baio")
addOption("Caio")
addOption("Daio")
addOption("Bolsocheiro")
addOption("Squid")
addOption("Pump")

vote("Baio","Bolsocheiro")
vote("Baio","Bolsocheiro")
vote("Baio","Squid")
vote("Caio","Pump")
vote("Pump","Caio")
vote("Squid","Baio")
vote("Bolsocheiro","Baio")

function displayResults() {
  const lines = ["Poll Results:"];
  poll.forEach((votersSet, option) => {
    lines.push(`${option}: ${votersSet.size} votes`);
  });
  return lines.join('\n');
}


console.log(displayResults())
