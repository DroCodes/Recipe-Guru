import { Test } from "../models/TestSchema";

const TestController = {
  getAllPosts: async (req: any, res: any) => {
    try {
      const posts = await Test.find();
      res.json(posts);
    } catch (err) {
      res.json({ message: err });
    }
  },

  savePost: async (req: any, res: any) => {
    const test = new Test(req.body);

    ({
      name: req.body.name,
      age: req.body.age,
    });

    try {
      const savedPost = await test.save();
      res.json(savedPost);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getSpecificPost: async (req: any, res: any) => {
    try {
      const post = await Test.findById(req.params.Id);
      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updatePost: async (req: any, res: any) => {
    try {
      const updatedPost = await Test.updateOne(
        { _id: req.params.id },
        { $set: { name: req.body.name, age: req.body.age } }
      );

      res.json(updatedPost);
    } catch (err) {
      res.json({ message: err });
    }
  },

  deletePost: async (req: any, res: any) => {
    try {
      const removedPost = await Test.remove({ _id: req.params.id });
      res.json(removedPost);
    } catch (err) {
      res.json({ message: err });
    }
  },
};

export { TestController };
