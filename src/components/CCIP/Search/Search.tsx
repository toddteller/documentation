import { useState, useEffect, useRef } from "react"
import "./Search.css"
import { clsx } from "~/lib"
import { useClickOutside } from "~/hooks/useClickOutside"
import { Environment, LaneConfig } from "~/config/data/ccip"
import { drawerContentStore } from "../Drawer/drawerStore"
import LaneDrawer from "../Drawer/LaneDrawer"

interface SearchProps {
  chains: {
    name: string
    totalLanes: number
    totalTokens: number
    logo: string
    chain: string
  }[]
  tokens: {
    name: string
    totalNetworks: number
    logo: string
  }[]
  lanes: {
    sourceNetwork: {
      name: string
      logo: string
      key: string
    }
    destinationNetwork: {
      name: string
      logo: string
      key: string
      explorerUrl: string
    }
    lane: LaneConfig
  }[]
  small?: boolean
  environment: Environment
}

function Search({ chains, tokens, small, environment, lanes }: SearchProps) {
  const [search, setSearch] = useState("")
  const [openSearchMenu, setOpenSearchMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [networksResults, setNetworksResults] = useState<SearchProps["chains"]>([])
  const [tokensResults, setTokensResults] = useState<SearchProps["tokens"]>([])
  const [lanesResults, setLanesResults] = useState<SearchProps["lanes"]>([])
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (search) {
      const networks = chains.filter((chain) => chain.name.toLowerCase().includes(search.toLowerCase()))
      const tokensList = tokens.filter((token) => token.name.toLowerCase().includes(search.toLowerCase()))
      const lanesList = lanes.filter(
        (lane) =>
          (lane.sourceNetwork.name.toLowerCase().includes(search.toLowerCase()) ||
            lane.destinationNetwork.name.toLowerCase().includes(search.toLowerCase())) &&
          (lane.lane.supportedTokens ? Object.keys(lane.lane.supportedTokens).length : 0) > 0
      )

      setNetworksResults(networks)
      setTokensResults(tokensList)
      setLanesResults(lanesList)
      setOpenSearchMenu(true)
    } else {
      setNetworksResults([])
      setTokensResults([])
      setLanesResults([])
      setOpenSearchMenu(false)
    }
  }, [search, chains, tokens])

  useClickOutside(searchRef, () => setOpenSearchMenu(false))

  return (
    <>
      {openSearchMenu && <div className="ccip-hero__search-overlay"></div>}
      <div
        className={clsx("ccip-hero__search", {
          active: isActive,
          small: small || false,
        })}
        ref={searchRef}
      >
        <img src="/assets/icons/search.svg" alt="" />
        <input
          type="search"
          placeholder="Network/Token/Lane"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        {openSearchMenu && (
          <div className="ccip-hero__search-results">
            {networksResults.length === 0 && tokensResults.length === 0 && (
              <span className="ccip-hero__search-results__title">No results found</span>
            )}
            {networksResults.length > 0 && (
              <>
                <span className="ccip-hero__search-results__title">Networks</span>
                <ul aria-label="Networks">
                  {networksResults.map((network) => (
                    <li key={network.name}>
                      <a href={`/ccip/supported-networks/${environment}/chain/${network.chain}`}>
                        <img src={network.logo} alt="" />
                        {network.name}
                        <span>
                          {network.totalLanes} lanes | {network.totalTokens} tokens
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
            {tokensResults.length > 0 && (
              <>
                <span className="ccip-hero__search-results__title">Tokens</span>
                <ul aria-label="Networks">
                  {tokensResults.map((token) => (
                    <li key={token.name}>
                      <a href={`/ccip/supported-networks/${environment}/token/${token.name}`}>
                        <img src={token.logo} alt="" />
                        {token.name}
                        <span>{token.totalNetworks} networks</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {lanesResults.length > 0 && (
              <>
                <span className="ccip-hero__search-results__title">Lanes</span>
                <ul aria-label="Networks">
                  {lanesResults.map((lane) => (
                    <li key={lane.sourceNetwork.name + lane.destinationNetwork.key}>
                      <a
                        role="button"
                        onClick={() =>
                          drawerContentStore.set(() => (
                            <LaneDrawer
                              environment={environment}
                              lane={lane.lane}
                              sourceNetwork={lane.sourceNetwork}
                              destinationNetwork={{
                                ...lane.destinationNetwork,
                                explorerUrl: lane.destinationNetwork.explorerUrl,
                              }}
                            />
                          ))
                        }
                      >
                        <div className="ccip-hero__search-results__lane-images">
                          <img src={lane.sourceNetwork.logo} alt="" />
                          <img src={lane.destinationNetwork.logo} alt="" />
                        </div>
                        {lane.sourceNetwork.name} {">"} {lane.destinationNetwork.name}
                        <span>
                          {lane?.lane?.supportedTokens ? Object.keys(lane.lane.supportedTokens).length : 0} tokens
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Search
