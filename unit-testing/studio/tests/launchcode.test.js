// launchcode.test.js code:
const launchcode = require('../index.js');

describe("launchcode", function(){

  // Write your unit tests here!
  test("should have organization property set to 'nonprofit'", function(){
    expect(launchcode.organization).toBe('nonprofit');
  });
  test("should have executiveDirector property set to 'Jeff'", function(){
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test("should have percentageCoolEmployees property set to '100'", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("should have programsOffered property with correct values and size", function(){
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });
});

describe("launchOutput", function(){

  test("returns 'Launch!' when passed a number that is ONLY divisible by 2", function(){
    let output = launchcode.launchOutput(4);
    expect(output).toBe('Launch!');
  });
  test("returns 'Code!' when passed a number that is ONLY divisible by 3", function(){
    let output = launchcode.launchOutput(9);
    expect(output).toBe('Code!');
  });
  test("returns 'Rocks!' when passed a number that is ONLY divisible by 5", function(){
    let output = launchcode.launchOutput(25);
    expect(output).toBe('Rocks!');
  });
  test("returns 'LaunchCode!' when passed a number that is divisible by 2 AND 3", function(){
    let output = launchcode.launchOutput(12);
    expect(output).toBe('LaunchCode!');
  });
  test("returns 'Code Rocks!' when passed a number that is divisible by 3 AND 5", function(){
    let output = launchcode.launchOutput(15);
    expect(output).toBe('Code Rocks!');
  });
  test("returns 'Launch Rocks!' when passed a number that is divisible by 2 AND 5", function(){
    let output = launchcode.launchOutput(10);
    expect(output).toBe('Launch Rocks! (CRASH!!!!)');
  });
  test("returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, AND 5", function(){
    let output = launchcode.launchOutput(30);
    expect(output).toBe('LaunchCode Rocks!');
  });
  test("returns 'Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2, 3, or 5", function(){
    let output = launchcode.launchOutput(43);
    expect(output).toBe("Rutabagas! That doesn't work.");
  });
});