//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore); //Pt.2 Add First Class Method
    }
    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let avg = sum / this.scores.length;
        return avg.toFixed(1); //Pt.3 Add More Methods
        //return Math.round(avg*10)/10;
    }
    status() {
        let avgScore = this.average();
        if (avgScore >= 90) {
            return 'Accepted';
        } else if (avgScore >= 80) {
            return 'Reserve';
        } else if (avgScore >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        } // Pt.3
    }
}

//create objects for each canidate...
let candidate1 = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let candidate2 = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let candidate3 = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

//Use console.log to verify each object...
console.log(candidate1);
console.log(candidate2);
console.log(candidate3);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
candidate1.addScore(83); //Pt.2
console.log(candidate1.scores); //Pt.2
console.log(candidate2.average()); //Pt.3
console.log(`${candidate1.name} earned an average test score of ${candidate1.average()}% and has a status of ${candidate1.status()}.`); //Pt.3
console.log(`${candidate2.name} earned an average test score of ${candidate2.average()}% and has a status of ${candidate2.status()}.`); //Pt.3
console.log(`${candidate3.name} earned an average test score of ${candidate3.average()}% and has a status of ${candidate3.status()}.`); //Pt.3

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
/*candidate3.addScore(100);
console.log(candidate3.average());
candidate3.addScore(100);
console.log(candidate3.average());
//It takes two tests to reach Reserve status.
candidate3.addScore(100);
console.log(candidate3.average());
candidate3.addScore(100);
console.log(candidate3.average());
candidate3.addScore(100);
console.log(candidate3.average());
candidate3.addScore(100);
console.log(candidate3.average());
//It takes six tests to reach Accepted status.*/