let idCounter = 0;

function idGenerator() {
  idCounter++;
  return idCounter.toString();
}

export default idGenerator;
