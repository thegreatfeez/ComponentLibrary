import React from 'react';
import Banner from './Banner';

function BannersApp() {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
           
            <h1 className="text-6xl font-bold mb-12 text-gray-800" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                BANNERS
            </h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl">
                
               
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-600 italic" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                        MULTI LINE
                    </h2>
                    
                    <div className="space-y-6">
                        
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                SUCCESS
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">success-multiline</div>
                            <Banner status="success" title="Staking Rewards Earned!">
                                Congratulations! You've earned 2.35 ETH in staking rewards this month. Your rewards have been automatically added to your wallet.
                            </Banner>
                        </div>

                       
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                WARNING
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">warning-multiline</div>
                            <Banner status="warning" title="Phishing Link Detected">
                                The website you're trying to access appears suspicious and may be attempting to steal your cryptocurrency. Always verify URLs before connecting your wallet.
                            </Banner>
                        </div>

                       
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                ERROR
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">error-multiline</div>
                            <Banner status="error" title="Insufficient Funds for Transaction">
                                Your current balance of 0.0012 BTC is not enough to complete this transaction including network fees. Please add more funds to your wallet.
                            </Banner>
                        </div>

                        
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                NEUTRAL
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">neutral-multiline</div>
                            <Banner status="neutral" title="DeFi Protocol Update Available">
                                A new version of the Uniswap protocol is now available with improved gas efficiency and additional trading pairs. Update recommended.
                            </Banner>
                        </div>
                    </div>
                </div>

               
                <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-600 italic" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                        SINGLE LINE
                    </h2>
                    
                    <div className="space-y-6">
                     
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                SUCCESS
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">success-singleline</div>
                            <Banner status="success" title="You Are Eligible for Airdrop!" />
                        </div>

                       
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                WARNING
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">warning-singleline</div>
                            <Banner status="warning" title="Suspicious Transaction Detected" />
                        </div>

                        
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                ERROR
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">error-singleline</div>
                            <Banner status="error" title="Wallet Connection Lost" />
                        </div>

                        
                        <div>
                            <h3 className="text-lg font-bold mb-2 text-gray-700" style={{ fontFamily: 'Permanent Marker, cursive' }}>
                                NEUTRAL
                            </h3>
                            <div className="text-sm text-gray-500 mb-2">neutral-singleline</div>
                            <Banner status="neutral" title="Mining Pool Statistics Updated" />
                        </div>
                    </div>
                </div>
            </div>

           
            <link 
                href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" 
                rel="stylesheet" 
            />
        </div>
    );
}

export default BannersApp;