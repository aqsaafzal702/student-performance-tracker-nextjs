import connectDB from '@/lib/mongodb';

import User from '@/models/User';


import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectDB();
    const { name, email, password, role } = await req.json();

    if (!name || !email || !password || !role) {
      return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
    }
    if (!['teacher', 'student'].includes(role)) {
      return NextResponse.json({ msg: 'Invalid role' }, { status: 400 });
    }

    let user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ msg: 'User already exists' }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ name, email, password: hashedPassword, role });
    await user.save();

    const payload = { userId: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ msg: 'Server error' }, { status: 500 });
  }
}