import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  const registryPath = path.join(process.cwd(), "public/r/registry.json")
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf-8"))

  return NextResponse.json(registry, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
