import React from 'react';
import { AutoscrollRunner } from "@tripetto/runner-autoscroll";

const Tripetto = () => {
  return (
    <div>
      <h1>Tripetto Form</h1>
      <AutoscrollRunner
        definition={{
          "name": "Practice",
          "sections": [
            {
              "id": "ebef07c003034dace7a6e904e9444302dbcdaa92435018f6268e00292048f884",
              "name": "👋 Hi there! Click the block below to start",
              "nodes": [
                {
                  "id": "f03a572dbdada5317e43d9be46a65e80a0fb2e71872c0fa48c5ef2fc3746dfb2",
                  "name": "Enter your name",
                  "nameVisible": true,
                  "slots": [
                    {
                      "id": "a4da6a6d0b042fd551ab78e0d95ae5704761bf3aefad2264a7ea2a4e3a3f9480",
                      "type": "text",
                      "kind": "static",
                      "reference": "value",
                      "label": "Text"
                    }
                  ],
                  "block": { "type": "@tripetto/block-text", "version": "6.0.2" }
                },
                {
                  "id": "81ed67ccc2816fe1dab0d527ea4abf7ffe3a792cbf1787841c288cc0d2d632cf",
                  "name": "What is your DOB",
                  "nameVisible": true,
                  "slots": [
                    {
                      "id": "ede099755e565e54241f4eb26b15993e6ff10eca95f3cd39fa83d3d4bf51e393",
                      "type": "date",
                      "kind": "static",
                      "reference": "date",
                      "label": "Date",
                      "precision": "days"
                    }
                  ],
                  "block": { "type": "@tripetto/block-date", "version": "4.0.3" }
                }
              ]
            }
          ],
          "builder": { "name": "@tripetto/builder", "version": "6.2.1" }
        }}
      />
    </div>
  );
};

export default Tripetto;
