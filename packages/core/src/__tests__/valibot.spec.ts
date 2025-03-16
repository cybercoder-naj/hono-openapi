import * as v from "valibot";
import { describe, expect, it } from "vitest";
import { resolver } from "../index";

describe("valibot test", () => {
  it("should resolve schema", async () => {
    const result = await resolver(
      v.object({
        name: v.string(),
        age: v.number(),
      }),
    ).builder();
    expect(result).toEqual({
      schema: {
        type: "object",
        additionalProperties: false,
        properties: {
          name: { type: "string" },
          age: { type: "number" },
        },
        required: ["name", "age"],
      },
    });
  });
});
