import { comments } from "./data";

export async function handler(req, res) {
  if (req.method === "GET") {
    return res.json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };

    comments.push(newComment);
    res.status(201).json(newComment);
  }
}
