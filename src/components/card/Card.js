import React from "react";
import QrCode from "../qrCode/QrCode";
import CardTitle from "../cardTitle/CardTitle";
import CardTextBody from "../cardTextBody/CardTextBody";

export default function Card() {
  return (
    <div className="rounded-2xl bg-white max-w-xs p-2 shadow-xl text-center pb-10">
      <QrCode />
      <CardTitle />
      <CardTextBody />
    </div>
  );
}
