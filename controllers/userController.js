// import userModel from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// const SECRET = "something";
// const profile = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await userModel.findOne({ _id: id });
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };
// const deleteUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const result = await userModel.findByIdAndDelete(id);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };
// const updateUser = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const body = req.body;
//     if (body.password) {
//       body.password = await bcrypt.hash(body.password, 10);
//     }
//     const result = await userModel.findByIdAndUpdate(id, body);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };
// const showUsers = async (req, res) => {
//   try {
//     const result = await userModel.find();
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };

// const getUser = async (req, res) => {
//   try {
//     const id = req.params.id
//     const result = await userModel.findOne({_id:id});
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       const isMatch = await bcrypt.compare(password, existingUser.password);
//       if (isMatch) {
//         const userObj = {
//           firstName: existingUser.firstName,
//           email: existingUser.email,
//           role: existingUser.role,
//         };
//         const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
//         res.status(200).json({ ...userObj, token });
//       } else {
//         res.status(400).json({ message: "Invalid Password" });
//       }
//     } else {
//       res.status(400).json({ message: "User not found" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };
// const register = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     const hashedpwd = await bcrypt.hash(password, 10);
//     const user = {
//       firstName,
//       lastName,
//       email,
//       password: hashedpwd,
//     };
//     const result = await userModel.create(user);
//     res.status(201).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

// const updateProfile = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const { firstName, lastName, email, password } = req.body;
//     const hashedpwd = await bcrypt.hash(password, 10);
//     const userObj = {
//       firstName,
//       lastName,
//       email,
//       password: hashedpwd,
//     };
//     const result = await userModel.findByIdAndUpdate(id, userObj);
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }
// };

// export {
//   register,
//   login,
//   showUsers,
//   deleteUser,
//   updateUser,
//   profile,
//   updateProfile,
//   getUser
// };
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const SECRET = "something";
const profile = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findByIdAndDelete(id);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    if (body.password) {
      body.password = await bcrypt.hash(body.password, 10);
    }
    const result = await userModel.findByIdAndUpdate(id, body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await userModel.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        const userObj = {
          firstName: existingUser.firstName,
          email: existingUser.email,
          role: existingUser.role,
        };
        const token = jwt.sign(userObj, SECRET, { expiresIn: "1h" });
        res.status(200).json({ ...userObj, token });
      } else {
        res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const user = {
      firstName,
      lastName,
      email,
      password: hashedpwd,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const addUser = async (req, res) => {
  try {
    const body = req.body;
    const hashedpwd = await bcrypt.hash(body.password, 10);
    body.password = hashedpwd;
    const result = await userModel.create(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const id = req.params.id;
    const { firstName, lastName, email, password } = req.body;
    const hashedpwd = await bcrypt.hash(password, 10);
    const userObj = {
      firstName,
      lastName,
      email,
      password: hashedpwd,
    };
    const result = await userModel.findByIdAndUpdate(id, userObj);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Something went wrong" });
  }
};

// const showUsers = async (req, res) => {

//   try {
//     const{page=1 ,limit=3 }=req.query;//default value being hard coded
//     const result = await userModel.find().skip(page-1).limit(limit)
//     res.status(200).json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Something went wrong" });
//   }Hello my name is arindam kashyap 
// };

const showUsers = async (req, res) => {
  try {
    const { page = 1, limit = 3, search = "" } = req.query;
    const skip = (page - 1) * limit;
    const searchQuery = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
      ],
    };
    const count = await userModel.countDocuments(searchQuery);
    const total = Math.ceil(count / limit);
    const users = await userModel
      .find(searchQuery)
      .skip(skip)
      .limit(limit)
      .sort({updatedAt:-1})
    res.status(200).json({ users, total });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
// const showUsers = async (req, res) => {
//   try {
//     const { page = 1, limit = 3, search = "" } = req.query;
//     const cleanSearch = search.trim();
//     const skip = (parseInt(page) - 1) * parseInt(limit);

//     const searchQuery = cleanSearch
//       ? {
//           $or: [
//             { firstName: { $regex: cleanSearch, $options: "i" } },
//             { lastName: { $regex: cleanSearch, $options: "i" } },
//           ],
//         }
//       : {};

//     const count = await userModel.countDocuments(searchQuery);
//     const total = Math.ceil(count / limit);

//     const users = await userModel
//       .find(searchQuery)
//       .skip(skip)
//       .limit(parseInt(limit))
//       .sort({ updatedAt: -1 });

//     res.status(200).json({ users, total });
//   } catch (err) {
//     console.error("🔥 showUsers error:", err.message);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };


export {
  register,
  login,
  showUsers,
  deleteUser,
  updateUser,
  profile,
  updateProfile,
  getUser,
  addUser,
};