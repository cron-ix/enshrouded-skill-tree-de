import React from "react";
import Image from "next/image";
import { classNames } from "@/utils/utils";

type Labels = {
  name: string;
  asset: string;
  width: number;
  height: number;
  angle: number;
  distance: number;
};

const labels: Labels[] = [
  {
    name: "Gauner",
    angle: 257,
    distance: 530,
    asset: "GAUNER",
    width: 384,
    height: 112,
  },
  {
    name: "Zauberer",
    angle: 286,
    distance: 700,
    asset: "ZAUBERER",
    width: 433,
    height: 112,
  },
  {
    name: "Heiler",
    angle: 316,
    distance: 610,
    asset: "HEILER",
    width: 325,
    height: 112,
  },
  {
    name: "Kampfmagier",
    angle: 347,
    distance: 540,
    asset: "KAMPFMAGIER",
    width: 490,
    height: 112,
  },
  {
    name: "Tank",
    angle: 16,
    distance: 590,
    asset: "TANK",
    width: 224,
    height: 112,
  },
  {
    name: "Krieger",
    angle: 50,
    distance: 630,
    asset: "KRIEGER",
    width: 379,
    height: 112,
  },
  {
    name: "Barbar",
    angle: 78,
    distance: 670,
    asset: "BARBAR",
    width: 387,
    height: 112,
  },
  {
    name: "Athlet",
    angle: 108,
    distance: 550,
    asset: "ATHLET",
    width: 353,
    height: 112,
  },
  {
    name: "Überlebender",
    angle: 136,
    distance: 650,
    asset: "ÜBERLEBENDER",
    width: 492,
    height: 112,
  },
  {
    name: "Bestienmeister",
    angle: 170,
    distance: 605,
    asset: "BESTIENMEISTER",
    width: 500,
    height: 112,
  },
  {
    name: "Waldläufer",
    angle: 196,
    distance: 520,
    asset: "WALDLÄUFER",
    width: 441,
    height: 112,
  },
  {
    name: "Assassine",
    angle: 227,
    distance: 630,
    asset: "ASSASSINE",
    width: 373,
    height: 112,
  },
];

const INIT_DISTANCE = 250;
const TO_SCALE_DOWN = 0.3;

const TreeLabels = () => {
  return (
    <>
      <div className="absolute rounded-full border border-purple-400 border-opacity-30 bg-transparent -left-[200px] -bottom-[200px]" />
      {labels.map((label) => (
        <div
          key={label.name}
          className="absolute top-0 left-0 h-full"
          style={{
            transformOrigin: "0% 0%",
            transform: `rotate(${label.angle}deg)`,
          }}
        >
          <div
            className={`relative`}
            style={{ marginTop: INIT_DISTANCE + label.distance }}
          >
            <div
              className={classNames("absolute uppercase")}
              style={{
                transformOrigin: "center",
                transform: `rotate(-${label.angle}deg)`,
                width: label.width * TO_SCALE_DOWN,
                height: label.height * TO_SCALE_DOWN,
              }}
            >
              <Image
                src={`/assets/labels/${label.asset}.png`}
                alt={label.name}
                height={label.height * TO_SCALE_DOWN}
                width={label.width * TO_SCALE_DOWN}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TreeLabels;
