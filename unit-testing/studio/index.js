
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
  launchOutput: function(number) {
    if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {
        return 'LaunchCode Rocks!';
    }
    if (number % 2 === 0 && number % 3 === 0) {
        return 'LaunchCode!';
    }
    if (number % 2 === 0 && number % 5 === 0) {
        return 'Launch Rocks! (CRASH!!!!)';
    }
    if (number % 3 === 0 && number % 5 === 0) {
        return 'Code Rocks!';
    }
    if (number % 2 === 0) {
        return 'Launch!';
    }
    if (number % 3 === 0) {
        return 'Code!';
    }
    if (number % 5 === 0) {
        return 'Rocks!';
    }
    return "Rutabagas! That doesn't work.";
  }
};

module.exports = launchcode;

