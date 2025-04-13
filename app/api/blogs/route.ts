import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://reyntech.blogspot.com/feeds/posts/default?alt=json', {'cache' : 'no-store'})
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch blog data', error }, { status: 500 })
  }
}
