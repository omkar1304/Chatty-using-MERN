import mongoose from "mongoose";
import Message from "../models/message.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getSidebarUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: mongoose.Types.ObjectId(loggedInUser) },
    });

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error while fetching users for sidebar", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const myId = req.user._id;
    const { id: userToChatId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ],
    });

    return res.status(200).json(messages);
  } catch (error) {
    console.log("Error while fetching messages", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    if (!image && !text) {
      return res
        .status(400)
        .json({ message: "Please provide either text or an image" });
    }

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();

    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error while saving message", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
