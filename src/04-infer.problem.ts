// CODE

import { z } from "zod";

const StarWarsPerson = z.object({
  name: z.string(),
});

const StarWarsPeopleResults = z.object({
  results: z.array(StarWarsPerson),
});

type StarWarsPeopleType = z.infer<typeof StarWarsPeopleResults>

const logStarWarsPeopleResults = (data: StarWarsPeopleType) => {
  //                                    ^ 🕵️‍♂️
  data.results.map((person) => {
    console.log(person.name);
  });
};
