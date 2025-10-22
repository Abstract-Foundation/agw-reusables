import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET(
  _request: Request,
  { params }: { params: { name: string } }
) {
  // Remove .json extension if present
  const name = params.name.replace(/\.json$/, "")
  const componentPath = path.join(process.cwd(), "public/r", `${name}.json`)

  if (!fs.existsSync(componentPath)) {
    return NextResponse.json(
      { error: "Component not found" },
      { status: 404 }
    )
  }

  const component = JSON.parse(fs.readFileSync(componentPath, "utf-8"))

  return NextResponse.json(component, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
