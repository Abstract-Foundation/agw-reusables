"use client"

import { PortfolioChart } from "@/registry/new-york/blocks/portfolio-chart/portfolio-chart"
import { useAccount } from "wagmi"

export default function PortfolioChartDemo() {
  const { address: connectedAddress } = useAccount()
  const defaultAddress = "0x06639F064b82595F3BE7621F607F8e8726852fCf"
  const address = connectedAddress || defaultAddress

  return (
    <PortfolioChart
      address={address}
      defaultPeriod="30d"
    />
  )
}