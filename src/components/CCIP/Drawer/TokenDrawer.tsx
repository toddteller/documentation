import "../Tables/Table.css"
import { drawerContentStore } from "../Drawer/drawerStore"
import TokenDetailsHero from "../ChainHero/TokenDetailsHero"
import {
  Environment,
  getLane,
  getNetwork,
  representMoney,
  SupportedTokenConfig,
  Version,
  LaneFilter,
} from "~/config/data/ccip"
import { useState } from "react"
import { SupportedChain } from "~/config"
import LaneDrawer from "../Drawer/LaneDrawer"
import TableSearchInput from "../Tables/TableSearchInput"
import Tabs from "../Tables/Tabs"

function TokenDrawer({
  token,
  network,
  destinationLanes,
  environment,
  explorerUrl,
}: {
  token: {
    name: string
    logo: string
    symbol: string
  }
  network: {
    name: string
    logo: string
    tokenAddress: string
    tokenPoolType: string
    tokenPoolAddress: string
    decimals: number
    key: string
  }
  destinationLanes: {
    [sourceChain: string]: SupportedTokenConfig
  }
  environment: Environment
  explorerUrl: string
}) {
  const [search, setSearch] = useState("")
  const [inOutbound, setInOutbound] = useState<LaneFilter>(LaneFilter.Outbound)
  return (
    <div>
      <h2 className="ccip-table__drawer-heading">Token details</h2>
      <TokenDetailsHero
        token={{
          name: token.name,
          symbol: token.symbol,
          logo: token.logo,
          decimals: network.decimals,
          address: network.tokenAddress,
          poolType: network.tokenPoolType,
          poolAddress: network.tokenPoolAddress,
        }}
        network={{
          name: network.name,
          logo: network.logo,
          explorerUrl,
        }}
      />
      <div className="ccip-table__drawer-container">
        <div className="ccip-table__filters">
          <div>
            <Tabs
              tabs={[
                {
                  name: "Outbound lanes",
                  key: LaneFilter.Outbound,
                },
                {
                  name: "Inbound lanes",
                  key: LaneFilter.Inbound,
                },
              ]}
              onChange={(key) => setInOutbound(key as LaneFilter)}
            />
          </div>
          <TableSearchInput search={search} setSearch={setSearch} />
        </div>
        <table className="ccip-table">
          <thead>
            <tr>
              <th>{inOutbound === LaneFilter.Inbound ? "Source" : "Destination"} network</th>
              <th>Rate limit capacity</th>
              <th>Rate limit refil rate</th>
              <th>Mechanism</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>
          <tbody>
            {Object.keys(destinationLanes)
              ?.filter((lane) => lane.toLowerCase().includes(search.toLowerCase()))
              .map((lane, index) => {
                const networkDetails = getNetwork({
                  filter: environment,
                  chain: lane,
                })
                const laneData = getLane({
                  sourceChain: network?.key as SupportedChain,
                  destinationChain: lane as SupportedChain,
                  environment,
                  version: Version.V1_2_0,
                })

                if (!laneData) return null

                return (
                  <tr key={index}>
                    <td>
                      <div
                        className="ccip-table__network-name"
                        role="button"
                        onClick={() => {
                          drawerContentStore.set(() => (
                            <LaneDrawer
                              environment={environment}
                              lane={laneData}
                              sourceNetwork={network}
                              destinationNetwork={{
                                name: networkDetails?.name || "",
                                logo: networkDetails?.logo || "",
                                key: lane,
                              }}
                              inOutbound={inOutbound}
                              explorerUrl={network.explorerUrl}
                            />
                          ))
                        }}
                      >
                        <img src={networkDetails?.logo} alt={networkDetails?.name} className="ccip-table__logo" />
                        {networkDetails?.name}
                      </div>
                    </td>
                    <td>
                      {representMoney(
                        String(
                          destinationLanes[lane].rateLimiterConfig?.[inOutbound === LaneFilter.Inbound ? "in" : "out"]
                            ?.capacity || 0
                        )
                      )}{" "}
                      {token.name}
                    </td>
                    <td>
                      {representMoney(
                        String(
                          destinationLanes[lane].rateLimiterConfig?.[inOutbound === LaneFilter.Inbound ? "in" : "out"]
                            ?.rate || 0
                        )
                      )}{" "}
                      {token.name}
                      /second
                    </td>
                    <td>{network.tokenPoolType === "lockRelease" ? "Lock/Release" : "Burn/Mint"}</td>
                    {/* <td>
                      <span className="ccip-table__status">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4.83329 8.49996L7.16663 10.8333L11.1666 5.83329M0.666626 8.49996C0.666626 10.4449 1.43925 12.3102 2.81451 13.6854C4.18978 15.0607 6.05504 15.8333 7.99996 15.8333C9.94489 15.8333 11.8102 15.0607 13.1854 13.6854C14.5607 12.3102 15.3333 10.4449 15.3333 8.49996C15.3333 6.55504 14.5607 4.68978 13.1854 3.31451C11.8102 1.93925 9.94489 1.16663 7.99996 1.16663C6.05504 1.16663 4.18978 1.93925 2.81451 3.31451C1.43925 4.68978 0.666626 6.55504 0.666626 8.49996Z"
                            stroke="#267E46"
                          />
                        </svg>
                        Operational
                      </span>
                    </td> */}
                  </tr>
                )
              })}
          </tbody>
        </table>
        <div className="ccip-table__notFound">
          {Object.keys(destinationLanes)?.filter((lane) => lane.toLowerCase().includes(search.toLowerCase())).length ===
            0 && <>No lanes found</>}
        </div>
      </div>
    </div>
  )
}

export default TokenDrawer
