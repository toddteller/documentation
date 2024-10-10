import { Tooltip } from "~/features/common/Tooltip"
import AddressComponent from "../Address/Address"
import "./LaneDetailsHero.css"
import { getExplorerAddressUrl } from "~/features/utils"
import CopyValue from "../CopyValue/CopyValue"

interface LaneDetailsHeroProps {
  sourceNetwork: {
    logo: string
    name: string
  }
  destinationNetwork: {
    logo: string
    name: string
  }
  onRamp: string
  destinationAddress: string
  explorerUrl: string
}

function LaneDetailsHero({
  sourceNetwork,
  destinationNetwork,
  onRamp,
  destinationAddress,
  explorerUrl,
}: LaneDetailsHeroProps) {
  return (
    <div className="lane-details-hero">
      <h2>Lane details</h2>

      <div className="lane-details-hero__networks">
        <div className="lane-details-hero__network">
          <img src={sourceNetwork.logo} alt={sourceNetwork.name} />
          {sourceNetwork.name}
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.666626 7.99673H14.6666M7.66663 15L14.6666 8L7.66663 1" stroke="#141921" />
        </svg>
        <div className="lane-details-hero__network">
          <img src={destinationNetwork.logo} alt={destinationNetwork.name} className="lane-details-hero__token-logo" />
          {destinationNetwork.name}
        </div>
      </div>
      <div className="lane-details-hero__details">
        <div className="lane-details-hero__details__label">OnRamp address</div>
        <div>
          <AddressComponent address={onRamp} endLength={6} contractUrl={getExplorerAddressUrl(explorerUrl)(onRamp)} />
        </div>
        <div className="lane-details-hero__details__label">Destination network selector</div>
        <div>{destinationAddress ? <CopyValue value={destinationAddress} /> : "n/a"} </div>
        <div className="lane-details-hero__details__label">RMN</div>
        <Tooltip
          label="Coming soon"
          tip="Risk Management Network (RMN) is NOT active for this lane at this time."
          style={{
            display: "inline-flex",
          }}
        />
      </div>
    </div>
  )
}

export default LaneDetailsHero
