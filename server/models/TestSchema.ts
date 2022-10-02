import mongoose, { Schema, model } from "mongoose";

interface ITest {
  name: String;
  age: Number;
}

const testSchema = new Schema<ITest>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const Test = model<ITest>("Test", testSchema);

export { Test };
