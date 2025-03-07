require("./helpers.js");

scuberGreetingForFeet = (feet) => {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet > 400 && feet <= 2000) {
    return "That will be twenty bucks.";
  } else if (feet > 2000 && feet <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
};

describe("index.js", function () {
  describe("scuberGreetingForFeet()", function () {
    it("gives customers a free sample if the ride is less than or equal to 400 feet", function () {
      expect(scuberGreetingForFeet(199)).to.equal("This one is on me!");
    });

    it("charges 20 dollars for a distance between 400 and 2000 feet", function () {
      expect(scuberGreetingForFeet(1500)).to.equal(
        "That will be twenty bucks."
      );
    });

    it("charges 30 dollars for a distance over 2000 feet", function () {
      expect(scuberGreetingForFeet(2001)).to.equal(
        "I will gladly take your thirty bucks."
      );
    });

    it("does not allow rides over 2500 feet", function () {
      expect(scuberGreetingForFeet(2501)).to.equal("No can do.");
    });
  });

  ternaryCheckCity = (city) => {
    return city === "NYC" ? "Ok, sounds good." : "No go.";
  };

  describe("ternaryCheckCity()", function () {
    it('returns "Ok, sounds good." when the city is NYC', function () {
      expect(ternaryCheckCity("NYC")).to.equal("Ok, sounds good.");
    });

    it('should return "No go." if the destination city is not NYC', function () {
      expect(ternaryCheckCity("Pittsburgh")).to.equal("No go.");
    });
  });

  switchOnCharmFromTip = (tip) => {
    switch (tip) {
      case "generous":
        return "Thank you so much.";
      case "not as generous":
        return "Thank you.";
      default:
        return "Bye.";
    }
  };

  describe("switchOnCharmFromTip()", function () {
    it('should return "Thank you so much." if the tip is generous', function () {
      expect(switchOnCharmFromTip("generous")).to.equal("Thank you so much.");
    });

    it('should return "Thank you." if the tip is not as generous', function () {
      expect(switchOnCharmFromTip("not as generous")).to.equal("Thank you.");
    });

    it('should return "Bye." if anything else', function () {
      expect(switchOnCharmFromTip("thanks for everything")).to.equal("Bye.");
    });
  });
});
