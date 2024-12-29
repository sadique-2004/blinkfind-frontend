import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'visitor-count.json');

export async function GET() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    const initialData = { count: 5000 };
    await fs.writeFile(dataFilePath, JSON.stringify(initialData));
    return NextResponse.json(initialData);
  }
}

export async function POST() {
  try {
    let data = { count: 5000 };
    try {
      const fileContent = await fs.readFile(dataFilePath, 'utf8');
      data = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist, use initial data
    }
    
    data.count += 1;
    await fs.writeFile(dataFilePath, JSON.stringify(data));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update count' }, { status: 500 });
  }
}
