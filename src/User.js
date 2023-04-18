import React from 'react'
import logo from './image/money.png'
import dollar from './image/dollar.png'
import man from './image/man.png'
import dollar2 from './image/dollar2.png'
import wallet from './image/wallet.png'
import dots from './image/more.png'
function User() {
    return (
        <div>
            {/* Header */}
            <div className='row'>
                <div class="col-md-8">
                    <div className='header'>
                        <div class="d-flex justify-content-left align-items-left m-3 p-3">
                            <h1 className='text-left'>Vids<img src={logo} className='logo' alt='' width={40} height={40} />Pay</h1><br />
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="d-flex justify-content-left align-items-left m-3 p-3">
                        <a><img src={man} className='logo' alt='' width={50} height={50} /></a>
                    </div>
                </div>
                <div className='col-4'>
                    <div class="d-flex justify-content-left align-items-left ">
                        <h3>Hello, Trishna!</h3>
                    </div>
                </div>
                <div>
                </div>
            </div>
            {/* Text */}
            <div className='row'>
                <div className='container'>
                    <div class="col-md-8">
                        <div className='flex'>
                            <div className='card'>
                                <h1><img src={wallet} className='logo' alt='' width={80} height={80} />&nbsp;&nbsp;&nbsp;<img src={dots} className='logo' alt='' width={25} height={25} /> </h1>

                                <h2><img src={dollar2} className='logo' alt='' width={45} height={45} />1.7K<h6>-2.3%</h6></h2>
                                <p>Earnings for the month</p>
                            </div>
                            <div className='card_1'>
                                <h1><img src={wallet} className='logo' alt='' width={80} height={80} />&nbsp;&nbsp;&nbsp;<img src={dots} className='logo' alt='' width={25} height={25} /> </h1>
                                <h2><img src={dollar2} className='logo' alt='' width={45} height={45} />957.9K<h6>+7.9%</h6></h2>
                                <p>Earnings for the month</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='card_2'>
                                <h1 className='text-left'>Bank Account Detail</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div className='card_3'>
                            <div class="d-flex justify-content-left align-items-left">
                                <h1> Transaction History</h1>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-lg-4 col-12 text-md-left">
                                                    <div >
                                                        <p >Type</p>
                                                    </div>
                                                </div>
                                                <div class="col-lg-4 col-12 text-md-center">
                                                    <div >
                                                        <p >Amount</p>
                                                    </div>
                                                </div>
                                                <div class=" text-md-right">
                                                    <div >
                                                        <p >Status</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card'>
                                    <div >
                                        <div class="container-fluid">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default User