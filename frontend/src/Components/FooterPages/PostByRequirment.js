
const bcrypt = require("bcrypt");
const PostByRequirement = require("../model/PostByRequirment");

// Create a new post by requirement
exports.createPostByRequirement = async (req, res) => {
  try {
    const {
      productName,
      quality,
      moq,
      sale,
      packaging,
      deliveryPlace,
      email,
      requirement,
      purpose,
      description,
      payment,
      phone,
      location,
    } = req.body;

    if (!phone) {
      return res.status(400).json({ error: "Phone number is required" });
    }

    const saltRounds = 10;
    const hash = await bcrypt.hash(phone.toString(), saltRounds);

    const form = new PostByRequirement({
      quality,
      moq,
      sale,
      packaging,
      productName,
      deliveryPlace,
      email,
      payment,
      requirement,
      phone,
      purpose,
      location,
      description,
    });

    // Save the form without validation
    await form.validate({ validateBeforeSave: false });
    await form.save();

    res.status(201).json({ form });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getForms = async (req, res) => {
  try {
    const forms = await PostByRequirement.find({ approved: true }).exec();
    res.status(200).json({ forms });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
