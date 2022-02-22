const request = require("supertest");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { default: mongoose } = require("mongoose");
const connectDataBase = require("../../db");
const Robot = require("../../db/models/Robot");
const app = require("..");

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const connectionString = mongoServer.getUri();

  await connectDataBase(connectionString);
});

beforeEach(async () => {
  await Robot.create({
    name: "Bender",
    image:
      "https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png",
    strenght: 5,
    speed: 5,
    date_of_creation: "2022-02-18",
    id: "620fe35f6ac6bb132807b645",
  });
  await Robot.create({
    name: "Robot Devil",
    image:
      "https://gamepedia.cursecdn.com/futuramaworldsoftomorrow_gamepedia_en/0/0b/RobotDevil.png",
    speed: 9,
    strenght: 9,
    date_of_creation: "2011-01-01",
  });
});

afterEach(async () => {
  await Robot.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

describe("Given a /robots/ endpoint", () => {
  describe("When it receives a Get request", () => {
    test("Then it should respond with a 200 status code and robots list", async () => {
      const { body } = await request(app).get("/robots").expect(200);

      expect(body.robots).toHaveLength(2);
      expect(body).toHaveProperty("robots");
    });
  });
});
