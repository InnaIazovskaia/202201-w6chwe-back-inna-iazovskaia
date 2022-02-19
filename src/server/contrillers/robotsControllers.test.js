const Robot = require("../../db/models/Robot");
const getRobots = require("./robotsControllers");

describe("Given a getRobots controller", () => {
  describe("When it receves a response", () => {
    test("Then it should call method json with array of robots of the received response", async () => {
      const res = {
        json: jest.fn(),
      };
      const robots = [
        {
          id: "2022",
          name: "Bender",
        },
      ];
      Robot.find = jest.fn().mockResolvedValue(robots);

      await getRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});
