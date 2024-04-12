import { useAccount, useBalance, useConnect, useDisconnect, useEnsAddress } from 'wagmi'

export function CustomConnectButton() {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    const { connector: activeConnector, address, isConnecting, isDisconnected, isConnected } = useAccount()

    const { disconnect } = useDisconnect()
    const { data, isError } = useBalance({
        address: address,
        chainId: 137
      })
    //   const { data, isError, isLoading } = useEnsAddress({
    //     name: 'awkweb.eth',
    //   })
    
    


    return (
        <div>
            {connectors.map((newConnector, index) => (
                <button
                    disabled={!newConnector.ready}
                    key={index}
                    onClick={() => connect({ newConnector })}
                >
                    {newConnector.name}{newConnector.id}
                    {!newConnector.ready && ' (unsupported)'}
                    {isLoading &&
                        newConnector.id === pendingConnector?.id &&
                        ' (connecting)'}
                </button>
            ))}

            {/* {!!isConnected && <div> It is connected to {activeConnector?.name} now.! and the address is {address}. Balance: {data?.formatted} {data?.symbol}"</div>} */}

            {error && <div>{error.message}</div>}
            <button onClick={disconnect}>Disconnect</button>
        </div>
    )
}


// export default function ButtonComponent() {
    

//     return (
//         <>
//             {isConnected && <div>Connected to {activeConnector?.name}</div>}

//             {connectors.map((connector) => (
//                 <button
//                     disabled={!connector.ready}
//                     key={connector.id}
//                     onClick={() => connect({ connector })}
//                 >
//                     {connector?.name}
//                     {isLoading &&
//                         pendingConnector?.id === connector.id &&
//                         ' (connecting)'}
//                 </button>
//             ))}

//             {error && <div>{error.message}</div>}
//             <button onClick={disconnect}>Disconnect</button>
//         </>
//     )
// }

