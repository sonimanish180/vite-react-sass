import React from 'react'
import { useConnect, useDisconnect } from 'wagmi'
import ButtonComponent from '../buttonComponent/ButtonComponent'
import { useEffect } from 'react';

export default function ChooseWallet({setShowChooseWallet}) {

    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect()
    // const { disconnect } = useDisconnect()

    const connectorArray = connectors.filter((item, index, array) => {
        return index === array.findIndex(t => t.name === item.name);
      });
      

    const handleOuterSpaceClick = (event) => {
        event.stopPropagation();
        setShowChooseWallet();
    }


    return (
        <div className='choose-wallet' onClick={handleOuterSpaceClick}>
            <div className='wallet-dialog' onClick={e => e.stopPropagation()}>
                <h2>Choose Wallet</h2>

                {console.log(connectors)}

                {connectorArray.map((connector, index) => (
                    <ButtonComponent
                        disabled={!connector.ready}
                        key={`${connector.id}${index}`}
                        handleClick={() => connect({ connector })}
                        buttonText={connector?.name}
                    >
                        {/* {connector?.name} */}
                        {isLoading &&
                            pendingConnector?.id === connector.id &&
                            ' (connecting)'}
                    </ButtonComponent>
                ))}

                {error && <div>{error.message}</div>}
                {/* <button onClick={disconnect}>Disconnect</button> */}
            </div>
        </div>
    )
}
