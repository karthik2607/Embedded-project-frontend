// index.ts
import express, { Request, Response } from "express";
import prisma from "./db";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api", async (_: Request, res: Response) => {
  const users = await prisma.user.findMany();
  res.json({ message: "Hello from the server!", users });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
