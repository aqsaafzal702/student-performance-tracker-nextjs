// import connectDB from '@/lib/mongodb';
// import { NextResponse } from 'next/server';

// export async function GET() {
//   try {
//     await connectDB();
//     return NextResponse.json({ msg: 'MongoDB connection successful' });
//   } catch (err) {
//     console.error('Error in test API:', err.message, 'Stack:', err.stack);
//     return NextResponse.json({ msg: 'MongoDB connection failed' }, { status: 500 });
//   }
// }

import connectDB from '@/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB("teacher_db"); // ✅ Explicitly connect to your DB
    return NextResponse.json({ msg: 'MongoDB connection to teacher_db successful' });
  } catch (err) {
    console.error('❌ Error in test API:', err.message, '\nStack:', err.stack);
    return NextResponse.json({ msg: 'MongoDB connection failed' }, { status: 500 });
  }
}
