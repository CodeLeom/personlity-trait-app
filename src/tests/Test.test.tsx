import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import mockAxios from "jest-mock-axios";
import NewTest from "../Pages/NewTest";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
// Define the mock response data
const mockResponse = {
  data: [
    {
      id: 1,
      text: "Do you prefer reading to partying?",
      introvertScore: 2,
      extrovertScore: 0,
    },
    {
      id: 2,
      text: "Do you enjoy large gatherings?",
      introvertScore: 0,
      extrovertScore: 2,
    },
    {
      id: 3,
      text: "Do you often prefer solitude?",
      introvertScore: 2,
      extrovertScore: 0,
    },
    {
      id: 4,
      text: "Do you feel energized around people?",
      introvertScore: 0,
      extrovertScore: 2,
    },
  ],
};

describe("fetch questions", () => {
  afterEach(() => {
    mockAxios.reset();
  });

  beforeEach(() => {
    render(
      <MemoryRouter>
        <NewTest />
      </MemoryRouter>
    );
  });
  describe("when API call is successful", () => {
    it("should return questions list", async () => {
      const mockGet = jest.fn();

      mockGet.mockImplementation(() => {
        const questions = [
          {
            id: 1,
            text: "Do you prefer reading to partying?",
            introvertScore: 2,
            extrovertScore: 0,
          },
          {
            id: 2,
            text: "Do you enjoy large gatherings?",
            introvertScore: 0,
            extrovertScore: 2,
          },
          {
            id: 3,
            text: "Do you often prefer solitude?",
            introvertScore: 2,
            extrovertScore: 0,
          },
          {
            id: 4,
            text: "Do you feel energized around people?",
            introvertScore: 0,
            extrovertScore: 2,
          },
        ];

        const myResponse = {
          status: 200,
          data: questions,
        };

        return Promise.resolve(myResponse);
      });
      mockedAxios.get.mockImplementation(mockGet);

      const result = await axios.get("http://localhost:3500/questions");

      expect(axios.get).toHaveBeenCalledWith(`http://localhost:3500/questions`);
      expect(mockResponse.data).toEqual(result.data);

      // const vv = await screen.getByRole("button", {
      //   name: /yes/i,
      // });
      // expect(await screen.queryAllByText(/Yes?/i)).toBeInTheDocument();
    });
  });
});