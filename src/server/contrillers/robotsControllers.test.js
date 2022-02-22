const Robot = require("../../db/models/Robot");
const { getRobots, getRobot } = require("./robotsControllers");

describe("Given a getRobots controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
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
        {
          id: "2022",
          name: "Fender",
        },
      ];
      Robot.find = jest.fn().mockResolvedValue(robots);

      await getRobots(null, res);

      expect(Robot.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith({ robots });
    });
  });
});

describe("Given a getRobot controller", () => {
  describe("When it receives a response with valid id", () => {
    test("Then if robot exists it should call method json withe the robot", async () => {
      const req = {
        params: {
          id: "superrobot",
        },
      };
      const res = {
        json: jest.fn(),
      };
      const next = jest.fn();
      const robot = {
        id: "superrobot",
        name: "Uran",
        image: "",
        speed: 5,
        strenght: 3,
        date_of_creation: "01-01-2022",
      };

      Robot.findById = jest.fn().mockResolvedValue(robot);

      await getRobot(req, res, next);

      expect(res.json).toHaveBeenCalledWith({ robot });
      expect(next).not.toHaveBeenCalled();
    });

    test("Then if the id format is invalid it should call next", async () => {
      const req = {
        params: {
          id: "superrobot",
        },
      };
      const next = jest.fn();
      const error = new Error("Incorrect id");

      Robot.findById = jest.fn().mockRejectedValue(error);

      await getRobot(req, null, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
